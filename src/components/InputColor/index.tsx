import React, { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelValue: string
}

const InputColor: FC<Props> = ({ labelValue, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{labelValue}</label>
      <input className={styles.element} spellCheck='false' {...props} type='color' />
    </div>
  )
}

export default InputColor
