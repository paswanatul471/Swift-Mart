import { Badge, Box , Button, Typography, styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, {useState, useContext} from 'react'
import LoginDialog from '../login/LoginDialog';


import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Wrapper = styled(Box)(({theme})=>({
display: 'flex',
margin: '0 3% 0 auto',
'&> *':{
    marginRight: '40px !important',
    fontSize: 14,
    alignItems: 'center',
    
},
[theme.breakpoints.down('md')]:{
  display: 'block'
}

}))


const ShoppingCartContainer = styled(Link)(({theme})=>({
  display: 'flex',
  textDecoration: 'none',
  color: 'inherit',
  [theme.breakpoints.down('md')]:{
    display: 'block'
  }
}))


const LoginButton = styled(Button)`
background: #FFF;
color: #2874f0;
text-transform: none;
padding: 5px 40px
border-radius: 2px
box-shadow: none;
font-weight: 600;
height: 32px;
`


const CustomButton = () => {
  const [open, setOpen] = useState(false)
  const {account, setAccount} = useContext(DataContext)
  const {cartItem} = useSelector(state => state.cart);

const OpenDialogBox = ()=>{
  setOpen(true);
}
  return (
    <Wrapper>
      {
        account ? <Profile account={account} setAccount={setAccount}/>
        :
        <LoginButton variant='contained' onClick={()=> OpenDialogBox()}>Login</LoginButton>
      }
        
        <Typography style={{marginTop: 3, width: 135}}>Become a Seller</Typography>
        <Typography style={{marginTop: 3}}>More</Typography>

        <ShoppingCartContainer to='/cart'>
          <Badge badgeContent={cartItem?.length} color='secondary'>
              <ShoppingCartIcon/>
            </Badge>
            <Typography style={{marginLeft: 10}}>Cart</Typography>
            
        </ShoppingCartContainer>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButton