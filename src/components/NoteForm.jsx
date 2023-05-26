import { useEffect, useState } from "react";
import { useNoteData, useNoteDispatch } from "../contexts/NotesContext";
import Button from "react-bootstrap/Button";

export default function NoteForm(props){

    // if this is null, no props provided then we are creating a note.
    // if id has a value, we are editing a note. 
    const {id} = props;

    // this is to read the global notes data.
    const globalNotesData = useNoteData();

    // the dispatch is our reducer, can edit global notes data. 
    const globalNotesDispatch = useNoteDispatch();

    // const [localID, setLocalID] = useState("");
    const [localTitle, setLocalTitle] = useState("")
    const [localDescription, setLocalDescription] = useState("")
    const [localIsCompleted, setLocalIsCompleted] = useState(false)
    const [localDueDate, setLocalDueDate] = useState(new Date().setDate(new Date().getDate() + 1))
    const [localCreatedAtDate, setLocalCreatedAtDate] = useState(Date.now());


    useEffect(() =>{
        let tempNote = globalNotesData.find(globalSpecificNote => {
            return globalSpecificNote.id === id;
        });

        if (tempNote){
            // we found a note.
            setLocalTitle(tempNote.title);
            setLocalDescription(tempNote.description);
            setLocalIsCompleted(tempNote.isCompleted);
            setLocalDueDate(tempNote.dueDate);
            setLocalCreatedAtDate(tempNote.createdAtDate);
        }

    }, [globalNotesData, id])

    const saveNoteToGlobal = () => {
        // US Note: saving should exit edit mode, but we won't do it in this app. 
        // We'd need to pass in the toggle EditMode stuff from the NoteParent. 

        let tempNewNote = {
            id: id || globalNotesData.length +1,
            title: localTitle,
            description: localDescription,
            isCompleted: localIsCompleted,
            dueDate: localDueDate,
            createdAtDate: localCreatedAtDate,
        }

        if (id) {
            globalNotesDispatch({type:"update", updatedNote: tempNewNote})          
        } else {
            globalNotesDispatch({type:"create", newNote: tempNewNote})
        }

    }


    return(

        <div>

            <form>
                <label>Title</label>
                    <input type="text" name="title" value={localTitle} onChange={(event) => setLocalTitle(event.target.value)}/>
                
                <label>Descrption</label>
                    <input type="text" name="description" value={localDescription} onChange={(event) => setLocalDescription(event.target.value)}/>

                <label>Is Completed</label>
                    <input type="checkbox" name="isCompleted" value={localIsCompleted} checked={localIsCompleted} onChange={(event) => setLocalIsCompleted(!localIsCompleted)}/>

                <label>Due Date</label>
                    <input type="date" name="dueDate" value={new Date(localDueDate).toISOString().split('T')[0]} onChange={(event) => setLocalDueDate(event.target.value)}/>

                {/* This will be handled by the reducer, not the human. */}

            </form>
            <Button variant="primary" onClick={saveNoteToGlobal}>
                Save Note
            </Button>
        </div>

    )

}


// 2:18 on sat video