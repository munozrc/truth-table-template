import React, { InputHTMLAttributes, useState } from 'react'
import './styles.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelValue: string
}

function Input({ labelValue, ...props }: Props) {
  return (
    <div className="input">
      <label className="input__label">{labelValue}</label>
      <input className="input__element" spellCheck="false" {...props} />
    </div>
  )
}

export default Input