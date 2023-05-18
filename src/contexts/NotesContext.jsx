import { createContext, useContext, useReducer } from "react"

const initialNotesData = [
    {
        id: 1,
        title: "Welcome to the Note Taker",
        description: "Make your notes here!",
        isCompleted: false,
        dueDate: new Date().setDate(newDate().getDate() + 1), // Current date + 1 day. 
        createdAtDate: Date.now(),
    }
]

const notesReducer = (previous)