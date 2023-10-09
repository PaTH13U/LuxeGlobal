import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import slide1 from '../../assets/images/slide 1.jpg'
import slide2  from '../../assets/images/slide 2.jpg'
import slide3  from '../../assets/images/slide 3.jpg'
import slide4 from '../../assets/images/slide 4.jpg'
import SliderComponents from '../../components/SliderComponents/SliderComponents'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import ButtonComponents from '../../components/ButtonComponents/ButtonComponents'

export const HomePage = () => {
  const arr=['Áo','Quần','Áo khoác','Phụ kiện']
  return (
    <>
      <div style={{width:'1270px',margin:'0 auto'}}>
        <WrapperTypeProduct>
            {arr.map((item)=>{
            return (
                <TypeProduct name={item} key={item}/>
            );
          })}
        </WrapperTypeProduct>     
     </div> 
     <div className='body' style={{backgroundColor:'rgb(223 225 241)',width:'100%'}}>
        <div id="container" style={{margin:'0 auto',height:'543px',width:'1270px'}}> 
            <SliderComponents arrImages={[slide1,slide2,slide3,slide4]} />
            <WrapperProducts>
                  <CardComponent/>     
                  <CardComponent/>   
                  <CardComponent/>   
                  <CardComponent/>   
                  <CardComponent/>   
                  <CardComponent/>   
                  <CardComponent/>   
                  <CardComponent/>         
            </WrapperProducts>
            <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'10px'}}>
                <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
                  border:'1px solid rgb(11,116,229)',
                  color:'rgb(11,116,229)',
                  width:'150px',
                  height:'38px',
                  borderRadius:'7px',
                  
                  }}
                  styleTextButton={{fontWeight:'500'}} />         
            </div>            
        </div>
      </div>
    </>
    
  )
}
export default HomePage