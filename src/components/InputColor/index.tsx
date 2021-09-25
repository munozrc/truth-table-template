import React, { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.css'

const InputColor: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.element} {...props} type='color' />
    </div>
  )
}

export default InputColor
