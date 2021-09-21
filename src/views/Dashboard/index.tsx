import React, { FC } from 'react'
import Button from '../../components/Button'
import styles from './styles.module.css'

const Dashboard: FC<{}> = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.panel__result}>
        <Button style={{ maxWidth: '220px' }}>Generar</Button>
      </section>
      <section className={styles.panel__options} />
    </div>
  )
}

export default Dashboard
