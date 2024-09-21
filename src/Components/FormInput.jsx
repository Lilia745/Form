import React, { useState } from 'react'

function FormInput(props) {
  const [focused,setFocused] = useState(false)
  const {label,errorMessage,onChange,id,...inputProps} = props
  const handleFocus = ()=>{
    setFocused(true)
  }
  return (
    <div className="flex flex-col w-[300px]">
        <label className="text-[15px] text-gray">{label}</label>
        <input 
        className="p-[5px] border my-[5px] rounded-[10px]"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={()=> inputProps.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
        />
        <span className="text-[14px] p-[3px] text-[#ca4747] flex-none">{errorMessage}</span>
    </div>
  )
}

export default FormInput