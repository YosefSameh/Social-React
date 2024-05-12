import * as React from 'react';
import { styled } from '@mui/material/styles';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge, Button, Divider, Menu, MenuItem, Tooltip, alpha } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../redux/showPosts';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';


    
    export default function Cards() {
    const [showComments, setShowComments] = useState(false);
  

    // Toggle delet and Edit
    const StyledMenu = styled((props) => (
            <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
            />
        ))(({ theme }) => ({
            '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
                },
                '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
                },
            },
            },
        }));

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    // Toggle delet and Edit
    
    // Fun Show Comments
        const handelShowComments = ()=>{
            setShowComments(!showComments)
        }
    // Fun Show Comments 
    
    
    // Fetch Posts
        let posts = useSelector((state)=>state.users.users)
            const disp = useDispatch()
        useEffect(()=>{
            disp(fetchPosts())
        },[])
    // Fetch Posts
    console.log(posts);
    
    
    return (
        
        <>  
            {posts.map((ele)=>(

            
        
        <div key={ele.id} style={{display:"flex" , justifyContent:"center",alignItems:"center"}}>
            <Card  sx={{ maxWidth: 700 ,paddingX:3,paddingY:2, width:700 , marginTop:5 }}>

                <div className='d-flex justify-content-between '>
                        <div className='d-flex'>
                        
                            <Avatar alt="Remy Sharp" src={ele.author.profile_image} />
                        
                            <div className='ms-4'>
                                <p className='m-0'>{ele.author.name}</p>
                                <p>{ele.created_at}</p>
                            </div>
                        </div>
                        <div>
                            {/* Toggle Options */}
                        <Button
                            id="demo-customized-button"
                            aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="contained"
                            disableElevation
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                                >
                            Options
                        </Button>
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        >
                        <MenuItem onClick={handleClose} disableRipple>
                        <EditIcon />
                        Edit
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                        <DeleteIcon />
                        Delete
                        </MenuItem>
                        <Divider sx={{ my: 0.5 }} />
                        <MenuItem onClick={handleClose} disableRipple>
                        <MoreHorizIcon />
                        More
                        </MenuItem>
                    </StyledMenu>
                            {/* Toggle Options */}
                        </div>
                </div>

                {/* img Post */}
                

        <CardMedia
            component="img"
            height="350"
            image={ele.image}
            alt="image is no avalible"
        />
              
                {/* img Post */}
                
        <CardContent>
            <Typography variant="body1" color="">
            {ele.body}
            </Typography>
        </CardContent>
        {/* Button Comments */}
        <div className='text-start mt-2'>
        <Button style={{textAlign:"center", }} className='d-flex  justify-content-center align-items-center'  onClick={handelShowComments}  variant="contained"><ChatBubbleOutlineRoundedIcon/> <span className='ps-1'> {ele.comments_count} </span></Button>
        </div>
        {/* Button Comments */}
        {/* Show Comments */}
        {showComments == true ? 
        <>
        <div className="shadow mt-4 d-flex justify-content-center align-items-center">
        <div  className="py-1 h-50 px-2" style={{display:"flex", justifyContent:"space-between" ,alignItems:"center ",backgroundColor:"white",borderRadius:10 , width:"100%"}}>
            <div  className="  ms-1 d-flex justify-content-center align-items-center ">
            <Avatar alt="Remy Sharp" src="" sx={{ width: 45, height: 45 }}/>
            <input placeholder="Add Comment" style={{ marginLeft:10, border:0,width:"100%" ,height:"65px" , outline:"none"}} />
            </div>
            <div>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
            </div>
        </div>
    </div>

    <div>
        <div className='d-flex align-items-center' >
        <div>
        <Avatar alt="Remy Sharp" src="" sx={{ width: 30, height: 30 }}/>
        </div>
        <div className='ms-2 mt-5 bg-light px-3 rounded  d-flex justify-content-center align-items-center flex-column' >
            <p className='m-0' style={{width:"100%",textAlign:"start"}}>yosef</p>
            <p>Your happy mute slkfjldk</p>
        </div>
        </div>
    </div>
    </>
    :null}
        {/* Show Comments */}
        
        </Card>
        </div>
        ))}
        </>
    )
}





















































// import { styled } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import EditIcon from '@mui/icons-material/Edit';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import './Card.css';
// import { Badge, Button, Menu, MenuItem } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { useSelector,useDispatch } from 'react-redux';
// import  { fetchPosts } from '../redux/showPosts';








//     const StyledBadge = styled(Badge)(({ theme }) => ({
//         '& .MuiBadge-badge': {
//         backgroundColor: '#44b700',
//         color: '#44b700',
//         boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//         '&::after': {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             borderRadius: '50%',
//             animation: 'ripple 1.2s infinite ease-in-out',
//             border: '1px solid currentColor',
//             content: '""',
//         },
//         },
//         '@keyframes ripple': {
//         '0%': {
//             transform: 'scale(.8)',
//             opacity: 1,
//         },
//         '100%': {
//             transform: 'scale(2.4)',
//             opacity: 0,
//         },
//         },
//     }));

    
//     const settings = ['Edit','Delete' ];
//     export default function Cards() {
        
        
//         const [anchorElUser, setAnchorElUser] = useState(null);
//         const [show, setShow] = useState(false);
        
//         // Show All Posts 
    
//         // Show All Posts 


//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//         };

//         const handleOpenUserMenu = (event) => {
//             setAnchorElUser(event.currentTarget);
//             console.log(event);
//         };
//         const handelOpenCom = ()=>{
//             if(show == false ){
//             setShow(true)
//             }else{
//                 setShow(false)
                
//             }
//         } 
        
       

  

//     return(
//         <>

        

//         </>
//     )
// }