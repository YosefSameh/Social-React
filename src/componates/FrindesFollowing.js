import { Avatar, Badge, IconButton, Stack, styled } from "@mui/material";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
export default function FrindesFollowing() {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
        },
        '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
        },
    }));
    const StyledBadge2 = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));
    return(
        <div>
            <div className="parent-4 mt-4 bg-white px-4 py-3 rounded-4">
                    <h5 className="fw-bold">Friendes List</h5>
                    <div className="mt-3">
                        <div className="d-flex  align-items-center">
                        <div className="img-profile">
                            <Stack direction="row" spacing={2}>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar style={{width:40,height:40}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </StyledBadge>
                            </Stack>
                        </div>
                        <div className="name-profile ms-3">
                            <h4 className="mb-0 text-black-50">yosef</h4>
                            
                        </div>
                        <div style={{flex:1}} className="d-flex justify-content-end">
                                <IconButton aria-label="cart">
                                    <StyledBadge2 color="secondary">
                                        <PersonAddAlt1Icon/>
                                    </StyledBadge2>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}