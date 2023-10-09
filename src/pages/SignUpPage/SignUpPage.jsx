import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import ButtonComponents from '../../components/ButtonComponents/ButtonComponents'
import InputForm from '../../components/InputForm/InputForm'
import { Image } from 'antd'
import ImageLogo from '../../assets/images/bglogup.png'
const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (

    <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'rgb(0 0 0 / 53%)',height:'100vh'}}>
      <div style={{width:'800px',height:'450px',borderRadius:'25px',background:'#fff',display:'flex'}}>
        <WrapperContainerLeft>
        <Image src={ImageLogo} preview={false} alt="image-logo" height="205px" width="205px"/>
             <h4 style={{width: '200px',textAlign: 'center'}}>Nơi mang đến niềm vui cho mọi người </h4>
        </WrapperContainerLeft>
        <WrapperContainerRight>            
               <h1>Chào mừng </h1>
          <p>Hãy điền thông tin đăng kí dưới đây!</p>
          <InputForm placeholder="abc@gmail.com" style={{marginBottom:'10px',bottom:'10px'}}/>
          <div style={{position:'relative'}}>
                <span style={{zIndex:10,position:'absolute',top:'8px',right:'8px'}}>
                    {isShowPassword }
                </span>
                <InputForm placeholder="Password" style={{bottom:'10px'}} type={isShowPassword ? "text" :"password"} />
                <InputForm placeholder="Confirm password" type={isShowPassword ? "text" :"password"}/>
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
        <p>Bạn đã có tài khoản ?<WrapperTextLight> Quay lại đăng nhập</WrapperTextLight></p>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage