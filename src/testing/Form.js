import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {incrementuser,decrementuser } from "../../redux/cret-user-slice";


export default function Form() {
    
    const [valueUser , setValueUser] = useState("")
    const [valueId , setValueId] = useState("")
    const stateAdd = useSelector(state => state.add) 
    const dispatch = useDispatch()

    let loop = stateAdd.value.map((ele)=>{
        return(
            <div key={ele.id}>Titel:{ele.Titel}  <p>id:{ele.id}</p></div>
        )
    })
    console.log(loop);

    console.log(valueId , valueUser);

    let handelAdd = (e)=>{
        e.preventDefault()
        dispatch(incrementuser({id:valueId,Titel:valueUser}))
        setValueId("")
        setValueUser("")
    }
    let handelDelete = (e,id)=>{
        e.preventDefault()
        let x = stateAdd.value.filter((ele)=>ele.id != valueId)
        dispatch(decrementuser(x))
        
    }

    return(
        <div>
            <div>{loop}</div>
            <form>
                <input type="text" value={valueUser} onChange={(e)=>setValueUser(e.target.value)}  placeholder="Enter your User"/>
                <input type="text" value={valueId}   onChange={(e)=>setValueId(e.target.value)}  placeholder="Enter your id User"/>
                <button onClick={(e)=> handelAdd(e)}>add</button>
                <button onClick={(e)=> handelDelete(e)}>delete</button>
            </form>
        </div>
    )
}