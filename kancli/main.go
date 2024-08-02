package main

type status int

const (
	todo status = iota
	inProgress
	done
)

type Task struct {
	status status
	title string
	description string
}

// implement the list.Item interface