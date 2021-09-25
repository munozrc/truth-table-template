import React, { FC, RefObject } from 'react'
import Table from '../../../components/Table'
import styles from './styles.module.css'

interface Props {
  refTable: RefObject<any>
}

const PanelResult: FC<Props> = ({ refTable }) => {
  return (
    <section className={styles.wrapper}>
      <Table ref={refTable} />
    </section>
  )
}

export default PanelResult
