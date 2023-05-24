import { useEffect, useState } from "react"
import { useNoteData } from "../contexts/NotesContext";

export default function NoteDisplay(props){
    
    const {id} = props;
    const [localNote, setLocalNote] = useState({});

    const globalNotesData = useNoteData();

    

    useEffect(() =>{
        // On start, find the note in globalNotesData that has an ID that matches props.id
        setLocalNote(globalNotesData.find(globalSpecificNote => { // filter returns an array which is note what we want, find returns a specific piece of data which is what we want.
            return globalSpecificNote.id === id;
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalNotesData, id])




    return(
        <div>
            <h4>{localNote.title}</h4>
            <p>{localNote.description}</p>
            <p>{localNote.isCompleted ? "COMPLETE" : "NOT YET DONE"}</p>
            <input type="checkbox" disabled="disabled" value={localNote.isCompleted} />
            <h5>Due date: {new Date(localNote.dueDate).toLocaleDateString()}</h5>
            {/* <input type="date" readOnly value={note.dueDate} /> */}
            <h5>Created at: {new Date(localNote.createdAtDate).toLocaleDateString()}</h5>
            {/* <input type="datetime-local" readOnly value={note.createdAtDate} /> */}
        </div>
    )
}