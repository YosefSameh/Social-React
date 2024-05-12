import { Avatar, Badge, Chip, Stack, styled } from "@mui/material";
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import MicIcon from '@mui/icons-material/Mic';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function AddPost() {
    
    return(
        <div style={{ width:"100%",maxWidth:650}}>
            <div className="parent-all px-4 py-3 rounded-4 bg-white">
                <div className="d-flex align-items-center">
                    <Stack direction="row" spacing={2}>
                            <Avatar style={{width:50,height:50}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Stack>
                    <div style={{flex:1,marginLeft:20}}>
                        <input placeholder="Whats on your mind" style={{outline:"none",backgroundColor:"#eee"}} className="border-0 px-3 py-3 w-100 rounded-pill" />
                    </div>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex text-black-50" style={{cursor:"pointer"}}>
                        <WallpaperIcon/>
                        <p className="fw-bold ms-2 mb-0">Images</p>
                    </div>
                    <div className="d-flex text-black-50" style={{cursor:"pointer"}}>
                        <AssignmentIcon/>
                        <p className="fw-bold ms-2 mb-0">Clip</p>
                    </div>
                    <div className="d-flex text-black-50" style={{cursor:"pointer"}}>
                        <MicIcon/>
                        <p className="fw-bold mb-0 ms-2 ">Aduio</p>
                    </div>
                    <div className="d-flex">
                        <Chip label="Post" className="fw-bold fs-6 bg-info  text-black-50" component="a" style={{width:75,height:35}} href="#basic-chip" clickable />
                    </div>
                </div>
            </div>
        </div>

    )
}