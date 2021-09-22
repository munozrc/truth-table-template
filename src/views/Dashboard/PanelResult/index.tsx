import React, { FC } from 'react'
import Table from '../../../components/Table'
import styles from './styles.module.css'

const PanelResult: FC<{}> = () => {
  return (
    <section className={styles.wrapper}>
      <Table />
    </section>
  )
}

export default PanelResult
