import React, { FC } from 'react'
import styles from './styles.module.css'

interface Props {
  labelValue?: string
  center?: boolean
}

const HorizontalContainer: FC<Props> = ({ labelValue = '', center = false, children }) => {
  return (
    <section className={`${styles.wrapper} ${center ? styles.center : ''}`}>
      <label className={styles.label}>{labelValue}</label>
      <div className={styles.inputs}>
        {children}
      </div>
    </section>
  )
}

export default HorizontalContainer
