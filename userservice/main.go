package main

import (
	"fmt"

	"userservice/app/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.GET("/register", handlers.Register)
	router.Run("localhost:8080")
	fmt.Println(" Hello therer")
}
