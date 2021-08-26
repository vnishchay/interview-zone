package handlers

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func HelloHandler(c *gin.Context) {
	fmt.Println("hello this is fine")

}
