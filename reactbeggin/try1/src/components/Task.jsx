const Task = ({task , onDelete , onToggle}) => {
    return(
        <div className={ 'task ' + `${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <p onClick ={() => onDelete(task.id)} style={{float:'right',fontSize:22,fontStyle:'bold',color:'red',cursor:'pointer',fontWeight:700}}>x</p>
            <h3> {task.text}</h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task