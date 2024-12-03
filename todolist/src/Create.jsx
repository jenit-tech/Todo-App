import React, { useState } from 'react'
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => {
          location.reload()
        })
        .catch(err => console.log(err))

    }
  return (
    <div>
        <input type="text" name="" id="" className='create-form-input' 
        placeholder='enter task' onChange={(e) => setTask(e.target.value) }/>
        <button type="button" className='create-form-button' onClick={handleAdd}>Add</button>
      
    </div>
  )
}

export default Create
