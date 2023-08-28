import styled from "@emotion/styled";
import { Box, InputBase, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React,{useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { getPruducts } from "../../redux/actions/productsAction";
import { Link } from "react-router-dom";



const BoxComponent = styled(Box)`
    background: #fff;
    width: 35%;
    margin-left: 10px;
    border-radius: 2px;
    display: flex;
`;

const InputBaseComponent =  styled(InputBase)`
    width: 100%;
    margin-left: 10px;
`;
const SearchIconWrapper = styled(Box)`
color: blue;
padding: 5px;
display: flex;
`

const ListWrapper = styled(List)`
position: absolute;
background: #FFFFFF;
color: #000;
margin-top: 38px;
`



const Search = () => {
  const [text, setText] = useState('')

  const {products} = useSelector(state => state.getPruducts)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPruducts());
  }, [dispatch])
  const getText =(text)=>{
    setText(text)
  }
  return (
    <BoxComponent>
      <InputBaseComponent placeholder="Search for products, brand and more" onChange={(e)=> getText(e.target.value)} value={text}/>
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
      {
        text && 
        <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
              <ListItem>
                <Link to={`/product/${product.id}`} onClick={()=>setText('')} style={{textDecoration: 'none', color:' inherit'}}>
                  
                  {product.title.longTitle}
                </Link>
                
              </ListItem>
            ))
          }
        </ListWrapper>
      }


    </BoxComponent>
  );
};

export default Search;
