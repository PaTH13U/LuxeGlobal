import { Col, Image, InputNumber, Row } from 'antd'
import React from 'react'
import imageproduct from '../../assets/images/detail1.jpg'
import imagesmall from '../../assets/images/detail3.jpg'
import { WrapperAddressProduct, WrapperBtnQuanlityProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQuanlityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import {
    StarFilled,
    MinusOutlined,
    PlusOutlined,
  } from '@ant-design/icons';
import ButtonComponents from '../ButtonComponents/ButtonComponents'
const ProductDetailComponent = () => {
  return (
    
        <Row style={{padding:'16px',background:'#fff'}}>
            <Col span={10} style={{paddingRight:'5px',borderRight:'1px solid #e5e5e5'}}>
                <Image src={imageproduct} alt="image product" preview={false}/>
                <Row style={{paddingTop:'10px',justifyContent:'space-between'}}>
                    <WrapperStyleColImage span={4}><WrapperStyleImageSmall src={imagesmall} alt="image small" preview={false}/></WrapperStyleColImage>
                    <WrapperStyleColImage span={4}><WrapperStyleImageSmall src={imagesmall} alt="image small" preview={false}/></WrapperStyleColImage>
                    <WrapperStyleColImage span={4}><WrapperStyleImageSmall src={imagesmall} alt="image small" preview={false}/></WrapperStyleColImage>
                    <WrapperStyleColImage span={4}><WrapperStyleImageSmall src={imagesmall} alt="image small" preview={false}/></WrapperStyleColImage>
                    <WrapperStyleColImage span={4}><WrapperStyleImageSmall src={imagesmall} alt="image small" preview={false}/></WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft:'10px'}}>
            <WrapperStyleNameProduct>Bộ quần áo-Đang hot nhất mùa hè năm nay</WrapperStyleNameProduct>
            <div>
                <StarFilled style={{fontSize:'10px',color:'yellow'}}/>
                <StarFilled style={{fontSize:'10px',color:'yellow'}}/>
                <StarFilled style={{fontSize:'10px',color:'yellow'}}/>
                <StarFilled style={{fontSize:'10px',color:'yellow'}}/>
                <WrapperStyleTextSell>  | Đã bán 2002+ </WrapperStyleTextSell> 
            </div>    
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>    
            </WrapperPriceProduct>  
            <WrapperAddressProduct>
                <span>Giao đế :</span>
                <span className='address'>Hóc Môn,TP.HCM</span>-
                <span className='change-address'>Đổi địa chỉ </span>                      
            </WrapperAddressProduct>                     
            <div style={{margin:'10px 0 20px',borderTop:'1px solid #e5e5e5',borderBottom:'1px solid #e5e5e5'}}>
                <div>Số lượng:</div>     
                <WrapperQuanlityProduct>
                    <button style={{border:'none',background:'transparent'}}>
                        <MinusOutlined style={{color:'#000',fontSize:'20px'}}/>
                    </button>
                        <WrapperInputNumber defaultValue={3} onChange={onchange} size="small"/>
                    <button style={{border:'none',background:'transparent'}}>
                        <PlusOutlined style={{color:'#000',fontSize:'20px'}}/>
                    </button>          
                </WrapperQuanlityProduct>
            </div>
            <div style={{display:'flex',gap:'15px',alignItems:'center'}}>
                <ButtonComponents
                    size={20}              
                    styleButton={{
                        background:'rgb(255,57,69)',
                        height:'48px',
                        width:'220px',
                        border:'none',
                        borderRadius:'5px'
                    }}
                    textButton={'Chọn mua'}
                    styleTextButton={{color:'#fff',fontSize:'15px',fontWeight:'700'}}
                />
                <ButtonComponents
                    size={20}              
                    styleButton={{
                        background:'white',
                        height:'48px',
                        width:'220px',
                        border:'1px solid rgb(13,92,182)',
                        borderRadius:'5px'
                    }}
                    textButton={'Mua trả sau'}
                    styleTextButton={{color:'rgb(13,92,182)',fontSize:'15px',fontWeight:'700'}}
                />
            </div>
            </Col>
        </Row>

  )
}

export default ProductDetailComponent