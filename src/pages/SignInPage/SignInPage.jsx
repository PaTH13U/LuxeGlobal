import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponents from '../../components/ButtonComponents/ButtonComponents'
import ImageLogo from '../../assets/images/bglogin.jpg'
import { Image } from 'antd'
import { shallowEqual } from 'react-redux'
import {
  EyeFilled,
  EyeInvisibleFilled
} from '@ant-design/icons';

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (

    <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'rgb(0 0 0 / 53%)',height:'100vh'}}>
      <div style={{width:'800px',height:'450px',borderRadius:'25px',background:'#fff',display:'flex'}}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tài khoản</p>
          <InputForm placeholder="abc@gmail.com" style={{marginBottom:'10px'}}/>
          <div style={{position:'relative'}}>
                <span style={{zIndex:10,position:'absolute',top:'8px',right:'8px'}}>
                    {isShowPassword }
                </span>
                <InputForm placeholder="password" type={isShowPassword ? "text" :"password"}/>
          </div>        
          <ButtonComponents
              size={20}              
              styleButton={{
                  background:'red',
                  height:'38px',
                  width:'100%',
                  border:'1px solid rgb(13,92,182)',
                  borderRadius:'5px',
                  margin:'26px 0 10px'
              }}
              textButton={'Đăng nhập'}
              styleTextButton={{color:'white',fontSize:'15px',fontWeight:'700'}}
        />
        <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
        <p>Chưa có tài khoản ?<WrapperTextLight> Tạo tài khoản mới</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>            
                <Image src={ImageLogo} preview={false} alt="image-logo" height="205px" width="205px"/>
             <h4>Mua sắm tại cửa hàng </h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage