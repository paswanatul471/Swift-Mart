import {Box, Typography, styled} from '@mui/material'
import { navData } from '../../constant/data'

const NavConponent = styled(Box)(({theme})=>({
display: 'flex',
margin: '55px 130px 0 130px',
justifyContext: 'space-between',
overflow: 'hidden',
[theme.breakpoints.down('lg')]:{
  margin: 0
}
}))
const ImgTextContainer = styled(Box)`
padding: 12px 15px;
text-align: center;
`
const Text = styled(Typography)`
font-size: 12px
font-weight: 600;
font-family: inherit;

`
const NavBar = () => {
  return (
    <Box styled={{background: '#fff'}}>
        <NavConponent>
      {
        navData.map(data =>(
          <ImgTextContainer>
            <img src={data.url} alt="nav" style={{width: 64}}/>
            <Text>{data.text}</Text>
          </ImgTextContainer>

        ))
      }
    </NavConponent>
    </Box>
  )
}

export default NavBar