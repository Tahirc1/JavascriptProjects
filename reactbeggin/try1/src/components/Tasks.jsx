import Task from "./Task"

const Tasks =  ({tasks , onDelete , onToggle}) => {
    

    return(
        <div>
            {tasks.map((tas) => 
            (<Task key={tas.id} task={tas} onDelete={onDelete} onToggle= {onToggle} />
            ))}
        </div>
    )
} 

export default Tasks