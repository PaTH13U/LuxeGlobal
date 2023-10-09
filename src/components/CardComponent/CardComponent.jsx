import { Card, Image } from 'antd'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperPriceDisContText, WrapperPriceText, WrapperReporText, WrapperStyleTextSell } from './style'
import { WrapperHeader } from '../HeaderComponents/style'
import logo from '../../assets/images/chinhhang.png'

import {
  StarOutlined,
} from '@ant-design/icons';
const CardComponent = () => {
  return (
    <WrapperCardStyle
    hoverable
    headStyle={{width:'200',height:'200'}}
    style={{ width: 240 }}
    bodyStyle={{padding:'10px'}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <img src={logo} style={{width:'70px',height:'15px',position:'absolute',top: '-1px',left:'-1px',borderTopLeftRadius:'3px'}}/>
    <StyleNameProduct>Bộ đồ 01</StyleNameProduct>
    <WrapperReporText>
      <span style={{marginRight:'5px'}}>
        <span>5.0  </span>
        <StarOutlined style={{fontSize:'10px',color:'yellow'}}/>
      </span>
      <WrapperStyleTextSell>  | Đã bán 2002 </WrapperStyleTextSell>
       </WrapperReporText>
      <WrapperPriceText>
         1.234.567<u> đ </u>      
        <WrapperPriceDisContText>-10%</WrapperPriceDisContText>
      </WrapperPriceText>
     
  </WrapperCardStyle>
  )
}

export default CardComponent