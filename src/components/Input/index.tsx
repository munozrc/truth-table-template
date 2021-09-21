import React, { InputHTMLAttributes, useState } from 'react'
import styles from './styles.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelValue: string
}

function Input({ labelValue, ...props }: Props) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{labelValue}</label>
      <input className={styles.element} spellCheck="false" {...props} />
    </div>
  )
}

export default Input