import React from 'react'
import Tasks from './Tasks'

const List = ({tasks,setTasks}) => {
  return (
    <div>


{/* {
    tasks.map((item)=>{
return (<Tasks obj={item}/>)
    })
} */}

{
            tasks.map((item) => {
                return <Tasks obj={item} key={item.id} tasks={tasks} setTasks={setTasks} />
            })
        }

    </div>
  )
}

export default List