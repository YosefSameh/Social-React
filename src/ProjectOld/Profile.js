import { Avatar, Button } from "@mui/material";
import "./profile.css"
import Green from "./Imges/Green.jpeg"
import Cards from "./Card";
export default function Profile() {
    return(
<div className="d-flex justify-content-center align-items-center">
        <div style={{backgroundColor:"#80808024",width:"98%"}}  >
        <div  style={{position:"relative",}} className="d-flex justify-content-center align-items-center ">
    <div  className="  d-flex justify-content-center align-items-center">
        <div className="profile"><img  src={Green}/></div>
        <div  className="card-about"  >
        <div style={{display:"flex", margin:30, backgroundColor:"white", borderRadius:"20px",  justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
            <div>
            <Avatar alt="Remy Sharp" src="" sx={{ width: 150, height: 150 }}/>
            </div>
            <div>
                <p>Yosef Sameh</p>
                <p>yosefsameh@gmail.com</p>
                <p>Im A Yosef Sameh FronEnd developer My Adge 16 Year</p>
            </div>
        </div>
        </div>
    </div>
    </div>
    {/* section 2 */}
    <div className="d-flex justify-content-center align-items-center">
        <div  className="py-1 px-4" style={{display:"flex", justifyContent:"space-between" ,alignItems:"center ",marginTop:"40%",backgroundColor:"white",borderRadius:10 , width:"60%"}}>
            <div  className=" w-75 ms-1 d-flex justify-content-center align-items-center ">
            <Avatar alt="Remy Sharp" src="" sx={{ width: 45, height: 45 }}/>
            <input placeholder="What Is On Your Mind" style={{ marginLeft:10, border:0,width:"100%" ,height:"65px" , outline:"none"}} />
            </div>
            <div>
                <Button variant="contained" >Post</Button>
                </div>
        </div>
    </div>
<div>
    {/* <Cards/> */}
</div>

    {/* end */}
        </div>
</div>
    )
}