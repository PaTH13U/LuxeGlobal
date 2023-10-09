
import React from 'react'
import {
    SearchOutlined,
  } from '@ant-design/icons';
import InputComponents from '../InputComponents/InputComponents';
import ButtonComponents from '../ButtonComponents/ButtonComponents';
const ButtonInputSearch = (props) => {
const {
  size,
  placeholder,
  textButton,
  bordered,
  backgroundColorInput='#fff',
  backgroundColorButton='rgb(0 255 217)',
  colorButton='#120e0e',
} =props
  return (
    <div style={{display:'flex',}}>
        <InputComponents 
          size={size} 
          placeholder={placeholder} 
          bordered={bordered}
          style={{backgroundColor:backgroundColorInput,borderRadius:'25px 0  0 25px'}}
        />
        <ButtonComponents 
          size={size} 
          icon={<SearchOutlined color={colorButton} style={{color:'black'}}/>}
          styleButton={{background:backgroundColorButton,border:!bordered&&'none',borderRadius:'0 25px 25px 0'}}
          textButton={textButton}
          styleTextButton={{color:colorButton}}
        />
           
    </div>
  )
}

export default ButtonInputSearch