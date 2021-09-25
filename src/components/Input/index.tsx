import React, { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelValue?: string
}

const Input: FC<Props> = ({ labelValue = '', ...props }) => {
  return (
    <div className={styles.wrapper}>
      {labelValue !== '' && <label className={styles.label}>{labelValue}</label>}
      <input className={styles.element} spellCheck='false' {...props} />
    </div>
  )
}

export default Input
