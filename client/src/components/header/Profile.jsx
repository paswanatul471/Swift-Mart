import React,{useState} from 'react'
import { Box, Typography, Menu, MenuItem, styled } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';



const Component = styled(Menu)`
margin-top: 5px;
`

const LogOutButton = styled(Typography)`
font-size: 14px;
margin-left: 10px;
`
const Profile = ({account, setAccount}) => {
    const [open, setOpen] = useState(false)
    const handleClick = (event) =>{
        setOpen(event.currentTarget);

    }

    const handleClose =()=>{
        setOpen(false);
    }

    const LogOut = () =>{
        setAccount('');
    }
  return (
    <>
    <Box>
        <Typography onClick={handleClick} style={{marginTop: 3, cursor: 'pointer'}}>{account}</Typography>
        <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=> {handleClose(); LogOut();}}>
        <PowerSettingsNewIcon color='primary' fontSize='small'/>
            <LogOutButton >
                 Logout
            </LogOutButton>
        </MenuItem>
      </Component>
    </Box>
    </>
  )
}

export default Profile
