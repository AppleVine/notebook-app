// import NoteDisplay from "../components/NoteDisplay";
import NoteForm from "../components/NoteForm";
import NoteParent from "../components/NoteParent";
import { useNoteData } from "../contexts/NotesContext"

export default function Homepage(props){

    const globalNotesData = useNoteData();


    return(
        <div>
            <h1>Note taking Application</h1>

            {/* Note taking component */}
                <h3>We have {globalNotesData.length} notes in storage!</h3>

            {/* Note form component */}
            <h3>Create a new note:</h3>
            <NoteForm />

            {/* List of all notes  */}
                <h3>List of all notes:</h3>
                {globalNotesData.map((note) => {

                    return(
                        <div key={note.id}>
                            {/* <NoteDisplay id={note.id} /> */}
                            <NoteParent id={note.id}/>
                        </div>
                            
                    )
                })}

        </div>
    )
}