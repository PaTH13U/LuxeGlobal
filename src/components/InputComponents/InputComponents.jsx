import { Input } from 'antd'
import React from 'react'

const InputComponents = ({size,placeholder,style,bordered, ...rests}) => {
  return (
    <Input
    size={size} 
    placeholder={placeholder} 
    style={style}
    bordered={bordered}
    {... rests}
  />
  )
}

export default InputComponents