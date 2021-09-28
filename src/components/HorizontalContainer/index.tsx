import React, { FC } from 'react'
import styles from './styles.module.css'

interface Props {
  labelValue?: string
}

const HorizontalContainer: FC<Props> = ({ labelValue = '', children }) => {
  return (
    <section className={styles.wrapper}>
      <label className={styles.label}>{labelValue}</label>
      <div className={styles.inputs}>
        {children}
      </div>
    </section>
  )
}

export default HorizontalContainer
