import { Typography, Box,Table, TableBody, TableRow, TableCell , styled} from '@mui/material'
import React from 'react'
import {LocalOffer as Badge} from '@mui/icons-material';


const Smalltext = styled(Box)`
font-size: 14px;
vertical-align: baseline;

& > p{
    font-size: 14px;
    margin-top: 10px
}
`
const Stylebadge = styled(Badge)`
margin-right: 10px;
color: #00CC00;
font-size: 15px;
`

const ColumnText = styled(TableRow)`
vertical-align: baseline;
font-size: 14px;
& > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
}
`
const ProductDetails = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const addURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

  return (
    <>
        <Typography> {product.title.longTitle}</Typography>
        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14}}> 8 Ratings & 1 Reviews
            <Box component="span"><img src={fassured} style={{width: 77, marginTop: 20}} alt="" /></Box>
        </Typography>
        <Typography>
            <Box component="span" style={{fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color: '#878787'}}>₹<strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color: '#388E3C'}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available offers</Typography>
        <Smalltext>
            <Typography><Stylebadge/>Bank Offer10% off on Federal Bank Credit Card Txns, up to ₹1,500 on orders of ₹5,000 and aboveT&C</Typography>
            <Typography><Stylebadge/>Bank Offer10% off on Federal Bank Debit Card Txns, up to ₹1,250 on orders of ₹5,000 and aboveT&C</Typography>
            <Typography><Stylebadge/>Bank OfferFlat ₹1,000 off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹49,999T&C</Typography>
            <Typography><Stylebadge/>Buy for 100 get ₹150 off your Next BuyT&C</Typography>
            <Typography><Stylebadge/>Buy for 100 get ₹200 off your Next BuyT&C</Typography>
            <Typography><Stylebadge/>No Cost EMI on all Banks up to 46 MonthsT&C</Typography>
            <Typography><Stylebadge/>Partner OfferPurchase now & get 1 surprise cashback coupon in FutureKnow More</Typography>
        </Smalltext>

        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Delivery</TableCell>
                    <TableCell style={{fontWeight: 600}}>Delivery By {date.toDateString()} | ₹40</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                    <TableCell >No Warranty </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Seller</TableCell>
                    <TableCell >
                        <Box style={{color: '#2874f0'}}>SuperComNet</Box>
                        <Typography>GST invoice available</Typography>
                        <Typography>View more seller starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                    
                </ColumnText>
                <ColumnText>
                        <TableCell colSpan={2} >
                            <img src={addURL} alt="flipcart coins" style={{width: 390}} />
                            
                        </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}}>Description</TableCell>
                    <TableCell >{product.description}</TableCell>
                </ColumnText>
            </TableBody>
        </Table>
    </>
  )
}

export default ProductDetails