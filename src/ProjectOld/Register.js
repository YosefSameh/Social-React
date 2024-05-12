import { Button, styled } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';  
import "./LogIn.css"
import { useEffect, useState } from "react";
import UseFetch from "./CutomHooks/useFetch";
import { useFetcher } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from "../redux/showPosts";
export default function Register() {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    }); 

    //     let formdatesingin = new FormData()
    // formdatesingin.append("email","lkfdjkfj@gmail.com")
    // formdatesingin.append("password","555555")
    // formdatesingin.append("username","lskdufiohowi")
    // formdatesingin.append("name","nvowieb")
    // setRegister({
    //     ...register,
    //     [e.target.name]: e.target.value
    // })
    const [valueEmail ,setValueEmail ] = useState(null)
    const [valuePassword ,setValuePassword ] = useState(null)
    const [valueUserName ,setValueUserName ] = useState(null)
    const [valueImage ,setValueImage ] = useState(null)
    const [valueName ,setValueName ] = useState(null)
    const dispatch = useDispatch()
    const responseUsernew = useSelector((state)=>state.users.regist)

    const handelClick = (e)=>{
        e.preventDefault()
        let body = {
                "email":valueEmail,
                "password":valuePassword,
                "name":valueName,
                "username":valueUserName,
            }
        
            dispatch(registerUser(body))
        
            
            console.log(responseUsernew,"yosef");

        }
        
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"590px"}}>
            <div class="wrapper">
        <header>Register</header>
        <form action="#">
            <div class="field email">
                <div class="input-area">
                    <input type="text" value={valueEmail} onChange={(e)=>setValueEmail(e.target.value)} placeholder="Email Address"/>
                    <i class="icon fas fa-envelope"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Email can't be blank</div>
            </div>
            <div class="field password">
                <div class="input-area">
                    <input type="password" value={valuePassword} onChange={(e)=>setValuePassword(e.target.value)} placeholder="Password"/>
                    <i class="icon fas fa-lock"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Password can't be blank</div>
            </div>
            <div class="field password">
                <div class="input-area">
                    <input type="text" value={valueName} onChange={(e)=>setValueName(e.target.value)} placeholder="Name"/>
                    <i class="icon fas fa-lock"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Password can't be blank</div>
            </div>
            <div class="field password">
                <div class="input-area">
                    <input type="texs" value={valueUserName} onChange={(e)=>setValueUserName(e.target.value)} placeholder="UserName"/>
                    <i class="icon fas fa-lock"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Password can't be blank</div>
            </div>
            <div class="field password">
                <div class="input-area">
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    >
                    Upload Imge Profile
                <VisuallyHiddenInput type="file"  onChange={(e)=>setValueImage(e.target.value)} />
                </Button>
                </div>
                <div class="error error-txt">Password can't be blank</div>
            </div>
            <input type="submit" value="Login" onClick={(e)=>handelClick(e)}/>
        </form>
        
    </div>
        </div>
    )
}