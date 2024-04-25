import React from 'react'
import './AddForm.css'

function AddForm(props) {
  const {title, setTitle, description, setDescription, saveTask, editId, theme} = props;
  return (
    <> 
      <form className='FormGroup' onSubmit={saveTask}>
        <div className='FormControl'>
          <input 
             type="text" 
             className={theme === "Light" ? "LightTitleInput" : "DarkTitleInput"} 
             value={title} 
             onChange={(e)=>setTitle(e.target.value)}
             placeholder="Title"
             maxLength={45}
          />
          <textarea 
             className={theme === "Light" ? "LightDescriptionInput" : "DarkDescriptionInput"} 
             value={description} 
             onChange={(e)=>setDescription(e.target.value)}
             placeholder="Add note description..."
             rows="10" 
             cols="30"
             maxLength={150}
          />
          <button type='submit' className='SubmitButton'>
            {editId? "Update" : "Add"}
          </button>
        </div>
      </form>
    
    </>
  )
}

export default AddForm