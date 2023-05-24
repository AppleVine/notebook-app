

            /* 
            - ID (number)
            - title (string)
            - description (string)
            - isComplete (boolean)
            - due date (JS date)
            - created at date (JS date)          
            */

import { useState } from "react";

export default function NoteForm(props){

    // const [localID, setLocalID] = useState("");
    const [localTitle, setLocalTitle] = useState("")
    const [localDescription, setLocalDescription] = useState("")
    const [localIsCompleted, setLocalIsCompleted] = useState(false)
    const [localDueDate, setLocalDueDate] = useState(new Date().setDate(new Date().getDate() + 1))
    // const [localCreatedAtDate, setLocalCreatedAtDate] = useState(Date.now());


    return(

        <div>

            <form>
                <label>Title</label>
                    <input type="text" name="title" value={localTitle} onChange={setLocalTitle}/>
                
                <label>Descrption</label>
                    <input type="text" name="description" value={localDescription} onChange={setLocalDescription}/>

                <label>Is Completed</label>
                    <input type="text" name="isCompleted" value={localIsCompleted} onChange={setLocalIsCompleted}/>

                <label>Due Date</label>
                    <input type="text" name="dueDate" value={localDueDate} onChange={setLocalDueDate}/>

                {/* This will be handled by the reducer, not the human. */}

            </form>
            <button>Save Note</button>
        </div>

    )

}