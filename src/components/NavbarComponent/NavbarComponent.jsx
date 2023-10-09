import React from 'react'
import { WrapperContent, WrapperLableText, WrapperLableValue, WrapperTextPrice } from './style'
import { type } from '@testing-library/user-event/dist/type'
import { Checkbox, Col, Rate, Row } from 'antd'
const onChange=()=>{}
const NavbarComponent = () => {
    const renderContent =(type,options)=>{
        switch(type){
            case'text':
            return options.map((option)=>{
                return <WrapperLableValue>{option}</WrapperLableValue>
            })
            case'checkbox':
            return (
                <Checkbox.Group style={{ width: '100%' ,display:'flex',flexDirection:'column',gap:'12px'}} onChange={onChange}>          
                    {options.map((option)=>{
                        return (
                            <Checkbox value={option.value}>{option.lable}</Checkbox>
                        )                      
                    })}               
                </Checkbox.Group>
            )
            case'star':
            return options.map((option)=>{
                console.log('check','option')
                return(
                    <div style={{display:'flex',gap:'4px'}}>
                    <Rate style={{fontSize:'12px'}} disabled defaultValue={option} />
                    <span>
                         từ {option} sao
                    </span>
                    </div>
                )
            })
            case'price':
            return options.map((option)=>{
                return(
                    <WrapperTextPrice >
                        {option}
                    </WrapperTextPrice>
                )
            })                    
                   
            default:
                return{}
        }
    }

  return (
    <div>
        <WrapperLableText>DANH MỤC</WrapperLableText>
        <WrapperContent>
             {renderContent('text',['Quần tây','Áo sơ mi','Áo khoác'])}            
        </WrapperContent>

        {/* <WrapperLableText>ĐỊA ĐIỂM</WrapperLableText>
       <WrapperContent>
            {renderContent('checkbox',[
                    {value:'a',lable:'A'},
                    {value:'b',lable:'B'}
            ])}
       </WrapperContent>

       <WrapperLableText>ĐÁNH GIÁ</WrapperLableText>
       <WrapperContent>
            {renderContent('star',[5,4,3])}
       </WrapperContent>

       <WrapperLableText> GIÁ</WrapperLableText>
       <WrapperContent>
            {renderContent('price',['Dưới 40.000','Trên 200.000'])}
       </WrapperContent> */}
    </div>
   
  )
}

export default NavbarComponent