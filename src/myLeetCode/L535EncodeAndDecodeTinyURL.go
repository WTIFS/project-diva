package main

import "strconv"

/***
Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

*/
func main() {
	testCases := []string{
		"http://www.baidu.com",
		"http://www.google.com",
	}
	obj := Constructor()
	for _, tt := range testCases {
		url := obj.encode(tt)
		ans := obj.decode(url)
		println(ans)
	}
}

type Codec struct {
	M1 map[string]string
	M2 map[string]string
}

func Constructor() Codec {
	return Codec{
		M1: make(map[string]string),
		M2: make(map[string]string),
	}
}

// Encodes a URL to a shortened URL.
func (this *Codec) encode(longUrl string) string {
	if short, ok := this.M2[longUrl]; ok {
		return short
	}
	l := strconv.Itoa(len(this.M1))
	this.M1[longUrl] = l
	this.M2[l] = longUrl
	return l
}

// Decodes a shortened URL to its original URL.
func (this *Codec) decode(shortUrl string) string {
	return this.M2[shortUrl]
}

/**
 * Your Codec object will be instantiated and called as such:
 * obj := Constructor();
 * url := obj.encode(longUrl);
 * ans := obj.decode(url);
 */
