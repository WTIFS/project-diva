package productServer

import (
	"github.com/gorilla/mux"
	"database/sql"
	."fmt"
	"log"
	_"github.com/lib/pq"
)

type App struct {
	Router *mux.Router
	DB *sql.DB
}

func (a *App) Initialize() {
	connectionString := Sprintf("user=%s password=%s dbname=%s sslmode=disable", "chenyuanfei", "www", "demo")
	var err error
	a.DB, err = sql.Open("postgres", connectionString)
	if err != nil {
		log.Fatal(err)
	}
	a.Router = mux.NewRouter()
}

func (a *App) Run(addr string) {

}