import React, { FC } from 'react'
import styles from './styles.module.css'

const Dashboard: FC<{}> = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.panel__result} />
      <section className={styles.panel__options} />
    </div>
  )
}

export default Dashboard
