
import { Box, Button, styled } from '@mui/material'

import React,{useState} from 'react'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/actions/cartAction';
// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';




const LeftContainer = styled(Box)(({theme})=>({
minWidth: '40%',
padding: '40px 0 0 80px',
[theme.breakpoints.down('md')]:{
  padding: '20px 40px'
}
}))
const StyledButtons = styled(Button)(({theme})=>({
width: '48%',
height: 50,
borderRadius: 2,
[theme.breakpoints.down('lg')]:{
  width:'46%'
},
[theme.breakpoints.down('sm')]:{
  width:'48%'
}

}))



const Image = styled('img')({
    padding: '15px',
    width: '100%'
    
})
const ActionItem = ({product}) => {
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const{id} = product;
  const addItemToCart = ()=>{
    dispatch(addCart(id,quantity));
    navigate('/cart')
  }

  // const buyNow = ()=>{
  //   let response = payUsingPaytm({amount: 500, email: 'paytm@paytm.com'});
  //   let information = {
  //     action: 'https://securegw-stage.paytm.in/order/process',
  //     param: response
  //   }
  //   post(information);
  // }
  return (
    <LeftContainer>
        <Box style={{padding:'15px 20px',border: '1px solid #f0f0f0', width: '90%'}}>
            <Image src={product.detailUrl} alt="" />
        </Box>
        <StyledButtons variant='contained' onClick={()=>{addItemToCart()}} style={{marginRight: 10, background: '#ff9f00'}}><ShoppingCartIcon/>Add to Cart</StyledButtons>
        <StyledButtons variant='contained'  style={{background: '#fb541b'}}><FlashOnIcon/>Buy Now</StyledButtons>
    </LeftContainer>
  )
}

export default ActionItem