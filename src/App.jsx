import './App.css'
import Header from './components/Header'
import AddForm from './components/AddForm'
import Item from './components/Item'
import { useState, useEffect } from 'react'
import Modal from './components/Modal'
import NoteAddIcon from '@mui/icons-material/NoteAdd';


function App() {
  // json.parse แปลงข้อมูลใน localStorage ให้เป็น JSON จากนั้นก็เอาข้อมูลใน localStorage ที่ชื่อว่า tasks มาแสดงเป็นค่าเริ่มต้น || หรือถ้าไม่มีก็แสดง array เปล่าๆ
  const [ task, setTask ] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("")
  const [ editId, setEditId ] = useState(null);
  const [ theme,  setTheme ] = useState("Light");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // เมื่อเปลี่ยนแปลงค่าใน state ชื่อ task จะมีการเรียกใช้งานคำสั่งใน useState
  // เก็บข้อมูลใน localStorage ตั้งชื่อ localStorage ว่า tasks เก็บในรูปแบบ JSON โดยเก็บจาก state ชื่อว่า task
  // เมื่อมีการเปลี่ยนแปลงข้อมูล เช่น เพิ่ม ลบ อัปเดต จะเก็บข้อมูลล่าสุดทั้งหมดนั้นลง localStorage
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(task))
  },[task])
  
  function deleteTask(id) {
    const result = task.filter(item=>item.id !==id)
    setTask(result);
  }

  function editTask(id){
    setEditId(id)
    const editTask = task.find((item)=>item.id === id)
    setTitle(editTask.title)
    setDescription(editTask.description)
  }
 
  function saveTask(e) {
    e.preventDefault();
    if(!title || !description){
      alert("Please input some text")
    }else if(editId){
      //Update task
      const updateTask = task.map((item)=>{
        //รายการใดมีรหัสตรงกับรหัสแก้ไข
        if(item.id === editId){
          return{...item, title:title, description:description}
        }
        return item;
      })
      // setTask มีค่าเท่ากับ updateTask
      setTask(updateTask)
      // คืนค่า setEditId ให้กลายเป็น null เหมือนเดิม
      setEditId(null)
      setIsModalOpen(false)
    }else{
      //save task
      const newTask={
        id: Math.floor(Math.random()*1000),
        title: title,
        description: description
      }
      setTask([...task,newTask])
      setIsModalOpen(false)
    }
    // Clear input fields
    setTitle('');
    setDescription('');
  }

  return (
    <div className={'App '+theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className={'InputContainer'}>
        <button 
          className={theme === "Light" ? "LightCreateNoteButton" : "DarkCreateNoteButton"}
          onClick={() => setIsModalOpen(true)}
          >
            <NoteAddIcon /><span>Create new note</span>
          </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} theme={theme}>
       <AddForm 
          title={title} 
          setTitle={setTitle} 
          description={description} 
          setDescription={setDescription}
          saveTask={saveTask} 
          editId={editId} 
          theme={theme}
        />
      </Modal>
      <div className='CardContainer'>
        <section>
          {
            task.map((data)=>(
              <Item 
                data={data} 
                key={data.id} 
                deleteTask={deleteTask} 
                editTask={editTask} 
                theme={theme} 
                setIsModalOpen={setIsModalOpen}
              />
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default App
