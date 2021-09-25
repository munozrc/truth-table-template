import React, { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelValue: string
}

const InputColor: FC<Props> = ({ labelValue, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__input}>
        <input className={styles.element} {...props} type='color' />
        <label className={styles.label}>{labelValue}</label>
      </div>
    </div>
  )
}

export default InputColor
