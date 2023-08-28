import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import TotalView from './TotalView'
import styled from '@emotion/styled'
import EmptyCart from './EmptyCart'



const Container = styled(Grid)`
padding: 35px 135px;
`

const Header = styled(Box)`
background: #fff;
padding: 15px 24px;
`
const ButtonWrapper = styled(Box)`
padding: 16px 22px;
background: #fff;
box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
border-top: 1px solid #f0f0f0;
`

const StyledButton = styled(Button)`
display: flex;
margin-left: auto;
background: #fb641b;
color: #fff;
width: 250px;
height: 51px;
border-radius: 2px;
`

const LeftComponent = styled(Grid)`
padding-right: 15px;
`

const Cart = () => {
    const {cartItem} = useSelector(state => state.cart)
  return (
    <>
    {
        cartItem.length ?
            <Container container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography>
                            My Cart ({cartItem?.length});
                        </Typography>
                    </Header>
                    {
                        cartItem.map(item=>(
                            <CartItems item={item}/>
                        ))
                    }
                    <ButtonWrapper>
                        <StyledButton>
                            Place Order
                        </StyledButton>
                    </ButtonWrapper>
                </LeftComponent>
                 
                
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItem={cartItem}/>
                </Grid>

            </Container>

            :
            <EmptyCart/>
    }
    </>
  )
}

export default Cart