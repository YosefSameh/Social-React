
import {  useState } from "react"

// const axios = require('axios');
export default function Todo() {

    const [inputValue , setInputValue] = useState("")
    const [checked , setChecked] = useState(null)
    const [array , setArray] = useState([{id:0 ,Titel:"yosef"}])
    const [index , setIndex] = useState(0)

    
    let arrayOflength = array.length
    let handelChange = (e)=>{
        setInputValue(e.target.value)
    
    }
    let handelAdd = (e)=>{
        e.preventDefault()
        if (checked == null) {
            
            setArray([...array,{id:arrayOflength ,  Titel:inputValue}])
            setInputValue("")
        }else{
            let newarr = [...array]
            newarr[index].Titel = inputValue
            setArray(newarr)
            setChecked(null)
            setInputValue("")
        }
        
    }
    let handelDelete = (id)=>{
            let newArrayAfterDelete = array.filter((ele)=> ele.id != id)
            setArray(newArrayAfterDelete) 
            
        }
    let handelEdit = (id)=>{
        setInputValue(array[id].Titel)
        setChecked("")
        setIndex(id)
    }
    
    let loopOfList = array.map((ele)=>{
        return(
            <div className='items' key={ele.id}>
            <div className='icon' ><input  type='checkbox'/></div>
            <div className='item'><h5 id='h5'>{ele.Titel}</h5> <span onClick={()=>handelEdit(ele.id)} >Edit</span>  <span onClick={()=>handelDelete(ele.id)} >X</span></div>
            </div>

        )
    })

        return(
            <>
        <div className='Titel'>
        <h4>To-Do List</h4>
      </div >
      <div className='parent-form'>
        <form className='form-inp' onSubmit={handelAdd}>
          <input type='text' id='name' value={inputValue}  onChange={handelChange}   placeholder='Add your task'/>
          <button>Add</button>
        </form>
      </div>
      <div className='parent-items'>
      
      {loopOfList}

      </div>
            
            </>
        )
}

