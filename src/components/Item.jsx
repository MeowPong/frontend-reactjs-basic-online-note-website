import React from 'react'
import './Item.css'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';

function Item(props) {
  const {data, deleteTask, editTask, theme, setIsModalOpen} = props;
  
  return (
    <div className={theme === "Light" ? "LightListItem" : "DarkListItem"}>
      <div key={data.id}>
        <p className='Title'>{data.title}</p>
        <p className='Description'>{data.description}</p>
      </div>
      <div className='ButtonContainer'>
        <button 
          className='DeleteButton' 
          onClick={()=>deleteTask(data.id)}
          >
            <DeleteIcon />
        </button>
        <button 
          className='EditButton' 
          onClick={()=>{
            editTask(data.id); 
            setIsModalOpen(true);
            }}
        >
          <EditNoteIcon />
        </button>
      </div>
    
    </div>
  )
}

export default Item