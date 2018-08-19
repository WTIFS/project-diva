package productServer

//this project implements the tutorial of
// https://semaphoreci.com/community/tutorials/building-and-testing-a-rest-api-in-go-with-gorilla-mux-and-postgresql

import (
	"testing"
	"os"
	"log"
	"net/http/httptest"
	"net/http"
	"encoding/json"
	"bytes"
	"strconv"
)


const tableCreationQuery = `CREATE TABLE IF NOT EXISTS products
(
id SERIAL,
name TEXT NOT NULL,
price NUMERIC(10,2) NOT NULL DEFAULT 0.00,
CONSTRAINT products_pkey PRIMARY KEY (id)
)`

var a App

func TestMain(m *testing.M) {
	a = App{}
	a.Initialize()

	ensureTableExists()

	code := m.Run()

	clearTable()

	os.Exit(code)
}

func ensureTableExists() {
	if _, err := a.DB.Exec(tableCreationQuery); err != nil {
		log.Fatal(err)
	}
}

func clearTable() {
	a.DB.Exec("DELETE FROM products")
	a.DB.Exec("ALTER SEQUENCE products_id_seq RESTART WITH 1")
}

//测试空产品列表
func TestEmptyTable(t *testing.T) {
	clearTable()
	req, _ := http.NewRequest("GET", "/products", nil)
	response := executeRequest(req)
	checkResponseCode(t, http.StatusOK, response.Code) //status==200
	if body := response.Body.String(); body != "[]" { //body==""
		t.Errorf("expected an empty arry. Got %s", body)
	}
}

//测试空产品
func TestGetNonExistentProduct(t *testing.T) {
	clearTable()

	req, _ := http.NewRequest("GET", "/product/11", nil)
	res := executeRequest(req)
	checkResponseCode(t, http.StatusNotFound, res.Code) //status==404

	var m map[string]string
	json.Unmarshal(res.Body.Bytes(), &m)
	if m["error"] != "Product not found" {
		t.Errorf("Expected the 'error' key of the response to be set to 'Product not found'. Got '%s'", m["error"])
	}
}

//测试新建产品
func TestCreateProduct(t *testing.T) {
	clearTable()
	payload := []byte(`{"name":"test product","price":11.22}`)

	req, _ := http.NewRequest("POST", "/product", bytes.NewBuffer(payload))
	res := executeRequest(req)

	checkResponseCode(t, http.StatusCreated, res.Code)

	var m map[string]interface{}
	json.Unmarshal(res.Body.Bytes(), &m)

	if m["name"] != "test product" {
		t.Errorf("Expected product name to be 'test product'. Got '%v'", m["name"])
	}

	if m["price"] != 11.22 {
		t.Errorf("Expected product price to be 11.22. Got %v", m["price"])
	}

	// the id is compared to 1.0 because JSON unmarshaling converts numbers to
	// floats, when the target is a map[string]interface{}
	if m["id"] != 1.0 {
		t.Errorf("Expected product ID to be 1. Got %v", m["id"])
	}
}

//Get一个产品
func TestGetProduct(t *testing.T) {
	clearTable()
	addProducts(1)

	req, _ := http.NewRequest("GET", "/product/1", nil)
	res := executeRequest(req)

	checkResponseCode(t, http.StatusOK, res.Code)
}

func addProducts(count int) {
	if count < 1 {
		count = 1
	}
	for  i:=0; i < count; i++ {
		a.DB.Exec("INSERT INTO products(name, price) VALUES($1, $2)", "Product " + strconv.Itoa(i), (i+1)*10)
	}
}

//Update一个产品
func TestUpdateProduct(t *testing.T) {
	clearTable()
	addProducts(1)

	req, _ := http.NewRequest("GET", "/product/1", nil)
	res := executeRequest(req)
	var originalProduct map[string]interface{}
	json.Unmarshal(res.Body.Bytes(), &originalProduct)

	payload := []byte(`{"name":"test product - update name","price":11.22}`)
	req, _ = http.NewRequest("PUT", "/product/1", bytes.NewBuffer(payload))
	res = executeRequest(req)

	checkResponseCode(t, http.StatusOK, res.Code)

	var m map[string]interface{}
	json.Unmarshal(res.Body.Bytes(), &m)

	if m["id"] != originalProduct["id"] {
		t.Errorf("Expected the id to remain the same (%v). Got %v", originalProduct["id"], m["id"])
	}

	if m["name"] == originalProduct["name"] {
		t.Errorf("Expected the name to changes from '%v' to '%v'. Got '%v'", originalProduct["name"], m["name"], m["name"])
	}

	if m["price"] == originalProduct["price"] {
		t.Errorf("Expected the price to change from %v to %v. Got %v", originalProduct["price"], m["price"], m["price"])
	}
}

//删除一个产品
func TestDeleteProduct(t *testing.T) {
	clearTable()
	addProducts(1)

	req, _ := http.NewRequest("GET", "/product/1", nil)
	res := executeRequest(req)
	checkResponseCode(t, http.StatusOK, res.Code)

	req, _ = http.NewRequest("DELETE", "/product/1", nil)
	res = executeRequest(req)

	checkResponseCode(t, http.StatusOK, res.Code)

	req, _ = http.NewRequest("GET", "/product/1", nil)
	res = executeRequest(req)
	checkResponseCode(t, http.StatusNotFound, res.Code)
}

func checkResponseCode(t *testing.T, expected, actual int) {
	if expected != actual {
		t.Errorf("Expected response code %d. Got %d\n", expected, actual)
	}
}

func executeRequest(req *http.Request) *httptest.ResponseRecorder {
	rr := httptest.NewRecorder()
	a.Router.ServeHTTP(rr, req)
	return rr
}