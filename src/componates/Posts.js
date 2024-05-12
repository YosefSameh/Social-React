import { styled } from '@mui/material/styles';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SendIcon from '@mui/icons-material/Send';
import { Badge, Button, Divider, Menu, MenuItem, Tooltip, alpha } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../redux/showPosts';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';


    
    export default function Posts(flex) {
    const [showComments, setShowComments] = useState(false);
  console.log(flex.flex);

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
    const [color, setColor] = useState(false);
    const [Follow, setFollow] = useState(false);
    const [save, setSave] = useState(false);
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

    // color Favorite 
        const colorFavorite = ()=>{
            setColor(!color)
        }
    // color Favorite 
    // Follow 
        const follow = ()=>{
            setFollow(!Follow)
        }
    //  follow 
    // Save 
        const Save = ()=>{
            setSave(!save)
        }
    //  Save 
    
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
            

            
        
        <div className='rounded'  style={{display:"flex" , justifyContent:`${flex.flex}`,alignItems:"center"}}>
            <Card  sx={{ maxWidth: 650 ,paddingX:3,paddingY:2, width:700 , marginTop:5 }}>

                <div className='d-flex justify-content-between '>
                        <div className='d-flex'>
                        
                            <Avatar alt="Remy Sharp" src="" />
                        
                            <div className='ms-4'>
                                <p className='m-0'>Yosefsameh</p>
                                <p>5/1/2024</p>
                            </div>
                            <div className='ms-4 d-flex align-items-start  '>
                                {Follow == false ? 
                                
                                <Button onClick={follow} style={{transition:"0.4s"}} variant="text">Follow</Button>
                                :
                                <Button onClick={follow} style={{transition:"0.4s"}} variant="text">UnFollow</Button>
                                }
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
                            // endIcon={<KeyboardArrowDownIcon />}
                            style={{backgroundColor:"transparent",color:"black"}}
                            >
                                    <MoreVertIcon/> 
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
            image=""
            alt="image is not avalible"
        />
            
                {/* img Post */}
                
        <CardContent>
            <Typography variant="body1" color="">
            test your post work right
            </Typography>
        </CardContent>
        {/* Button Comments */}
            <div className='d-flex align-items-center justify-content-between' style={{transition:"0.5s"}}>
                <div className='d-flex align-items-center' style={{cursor:"pointer"}}>
                 <div onClick={Save} style={{cursor:"pointer"}}>
                    {save != false ?
                    <BookmarkBorderIcon style={{color:"red",transition:".2s"}} />
                    :
                    <BookmarkBorderIcon style={{color:"black" ,transition:".2s"}} />
                    }
                </div>
                   <div  onClick={colorFavorite} className='ms-3'>
                        {color != false ?
                            <FavoriteBorderIcon style={{color:"red",transition:".2s"}} />
                                :
                            <FavoriteBorderIcon style={{color:"black" ,transition:".2s"}} />
                        }
                   </div>
                </div>
                <div className='text-start ms-3 mt-2'>
                    <Button style={{textAlign:"center",transition:".4s" }} className='d-flex  bg-info text-black justify-content-center align-items-center'  onClick={handelShowComments}  variant="contained"><ChatBubbleOutlineRoundedIcon/> <span className='ps-1'>5 </span></Button>
                </div>
            </div>
        {/* Button Comments */}
        {/* Show Comments */}
        {showComments == true ? 
        <>
        <div className="shadow mt-4 d-flex justify-content-center align-items-center rounded">
        <div  className="py-1 h-50 px-2 " style={{display:"flex", justifyContent:"space-between" ,alignItems:"center ",backgroundColor:"white",borderRadius:10 , width:"100%"}}>
            <div  className="  ms-1 d-flex justify-content-center align-items-center  ">
            <Avatar alt="Remy Sharp" src="" sx={{ width: 45, height: 45 }}/>
            <input placeholder="Add Comment" style={{ marginLeft:10, border:0,width:"100%" ,height:"65px" , outline:"none"}} />
            </div>
            <div>
            <Button variant="contained" className="bg-info text-black" endIcon={<SendIcon />}>
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
            <p>test your comments</p>
        </div>
        </div>
    </div>
    </>
    :null}
    
        {/* Show Comments */}
        
        </Card>
        </div>
        </>
    )
}