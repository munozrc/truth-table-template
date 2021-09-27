import React, { FC, RefObject } from 'react'
import Table from '../../../components/Table'
import useTable from '../../../hooks/useTable'
import styles from './styles.module.css'

interface Props {
  refTable: RefObject<HTMLTableElement>
}

const PanelResult: FC<Props> = ({ refTable }) => {
  const { stylesEntries, stylesOutputs, tableData } = useTable()
  return (
    <section className={styles.wrapper}>
      <Table
        ref={refTable}
        stylesEntries={stylesEntries}
        stylesOutputs={stylesOutputs}
        tableData={tableData}
      />
    </section>
  )
}

export default PanelResult
