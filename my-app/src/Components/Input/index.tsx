import React from 'react'

export function Input({label,placeholder,type,register}){
  return (
    <div className='divInput'>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} {...register} />
    </div>
  )
}
