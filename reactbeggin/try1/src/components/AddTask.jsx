import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSub = (e) =>{
        e.preventDefault()

        if( !text){
            alert("plz add text")
        }
        if( !day){
            alert("plz add day")
        }

        onAdd({text,day,reminder})

        setDay('')
        setReminder(false)
        setText('')
    }

    return(
        <form className="add-from" onSubmit={onSub}>
            <div className="form-control">
                <label >Task</label>
                <input type="text" placeholder="Add task name" value={text} onChange={(e) => setText(e.target.value)}></input>
                <p>{text}</p>
                <label >Day and Time</label>
                <input type="text" placeholder="Add Day and Time" value={day} onChange={(e) => setDay(e.target.value)}></input>
                <p>{day}</p>
                <label >Set Reminder</label>
                <div class='form-control-check'>
                <input  type="checkbox" checked= {reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
                <p>{reminder?'true':'false'}</p>
                </div>
            </div>
            <input type='submit' value='save' className="btn btn-block"></input>
        </form>
    )

}

export default AddTask