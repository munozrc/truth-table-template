import React, { FC, RefObject } from 'react'
import Table from '../../../components/Table'
import styles from './styles.module.css'

interface Props {
  refTable: RefObject<HTMLTableElement>
}

const PanelResult: FC<Props> = ({ refTable }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__table}>
        <div className={styles.wrapper_inset}>
          <Table ref={refTable} />
        </div>
      </div>
    </section>
  )
}

export default PanelResult
