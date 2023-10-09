import { Badge, Col, Row } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import Search from 'antd/es/input/Search'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';


const HeaderComponents = () => {
  return (
    <div style={{width:'100%',justifyContent:'center',background:'rgb(0 140 179)',display:'flex'}}>
      <WrapperHeader >
        <Col span={5}>
          <WrapperTextHeader>ShopQuanAo</WrapperTextHeader>
        </Col>
        <Col span={13}>
            <ButtonInputSearch
            placeholder='Input search text...'  
            size="large"
            textButton="Tìm kiếm"
            />
        </Col>
        <Col span={6} style={{display:'flex',gap:'50px',alignItems:'center'}}>          
          <WrapperHeaderAccount>
            <UserOutlined style={{fontSize:'28px'}}/>
            <WrapperTextHeaderSmall>
              Đăng nhập/Đăng Ký
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </WrapperTextHeaderSmall>
          </WrapperHeaderAccount>
          <div>
           <Badge count={5} size='small'>
             <ShoppingCartOutlined style={{fontSize:'30px',color:'#fff'}}/>
           </Badge>
              
                <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponents