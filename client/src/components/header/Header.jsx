import {useState} from "react";
import { AppBar, Toolbar, Box, styled, Typography, IconButton, Drawer, List, ListItem } from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 56px;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;
const PlusImage = styled('img')({
    height: 10,
    width: 10,
    marginLeft: 4
})

const CustomButtonWrapper = styled(Box)(({theme})=>({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('sm')]:{
    display: 'none'
  }
}))

const MenuButton = styled(IconButton)(({theme})=>({
  display: "none",
  [theme.breakpoints.down('sm')]:{
    display: 'block',
  }
}))


const Header = () => {
  const logoURL = `https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png`;
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  const [open, setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(true)
  }
  const handleClose = () =>{
    setOpen(false)
  }

  const ListFun = ()=>(
   <Box style={{width: 200}} onClick={onclose}>
     <List>
        <ListItem button>
          <CustomButton/>
        </ListItem>
    </List>
   </Box>
  )
  return (
    <StyledHeader>
      <Toolbar style={{minHeight: 50}}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <MenuIcon/>
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {ListFun()}
        </Drawer>
        <Component to='/'>
          <img src={logoURL} alt="Please wait" style={{ width: 75 }} />
          <Box style={{display: 'flex'}}>
            <SubHeading>Explore&nbsp;
                 <Box component="span" style={{color: '#FFE500'}}>Plus</Box>
            </SubHeading>
            <PlusImage src={subURL} alt="" />
          </Box>
        </Component>
        <Search/>
        <CustomButtonWrapper>
        <CustomButton/>
        </CustomButtonWrapper>
      </Toolbar>
      
    </StyledHeader>
  );
};

export default Header;
