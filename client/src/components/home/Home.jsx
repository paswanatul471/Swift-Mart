import React ,{useEffect}from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box , styled} from '@mui/material'
import { getPruducts } from '../../redux/actions/productsAction'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'



const Component = styled(Box)`
padding: 10px;
background: #F2F2F2;
`

const Home = () => {

  const {products} = useSelector(state => state.getPruducts)
  console.log(products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPruducts());
  }, [dispatch])

  
  
  return (
    <>
    <NavBar/>
    <Component>
    <Banner/>
    <MidSlide products={products} title="Day of the Deal" timer={true}/>
    <MidSection/>
    <Slide products={products} title="Discount for you"timer={false}/>
    <Slide products={products} title="Suggesting Items"timer={false}/>
    <Slide products={products} title="Top selection"timer={false}/>
    <Slide products={products} title="Recommended Items"timer={false}/>
    <Slide products={products} title="Trending offers"timer={false}/>
    <Slide products={products} title="Season's Top Picks"timer={false}/>
    <Slide products={products} title="Top Deals on Accessories"timer={false}/>
    </Component>
    </>
  )
}

export default Home