import { Input } from 'antd'
import React, { useState } from 'react'
import { WrappInputStyle } from './style'

const InputForm = (props) => {
    const [valueInput,setValueInput]=useState('')
    const {placeholder='Nhập text',...rests}=props
    return (    
        <WrappInputStyle placeholder={placeholder} valueInput={valueInput}{...rests}/>
    )
}

export default InputForm