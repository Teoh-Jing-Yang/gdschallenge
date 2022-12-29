package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

var SomeData Login

func showData(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, SomeData)
}

func userLogin(c *gin.Context) {
	var Data Login
	err := c.BindJSON(&Data)
	if err != nil {
		fmt.Println("Error occured")
		return
	}
	fmt.Println(Data)
	c.IndentedJSON(http.StatusCreated, Data)
}

func main() {
	router := gin.Default()
	router.GET("", showData)
	router.POST("/login", userLogin)
	router.Run("192.168.0.118:8000")
}
