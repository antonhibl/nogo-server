package main

import (
	"log"

	json "github.com/jgranstrom/go-simplejson"
	gonode "github.com/jgranstrom/gonodepkg"
)

func main() {
	gonode.Start(process)
}

func process(cmd *json.Json) (response *json.Json) {
	// TODO: Add code processing commands from node
	response, m, err := json.MakeMap()
	if err != nil {
		log.Fatal(err)
	}

	if cmd.Get("commandText").MustString() == "Hello friend - from gonode" {
		m["responseText"] = "Well hello there."
	} else {
		m["responseText"] = "You are no friend."
	}

	return
}
