import React, { FC, RefObject } from 'react'
import Table from '../../../components/Table'
import useTable from '../../../hooks/useTable'
import styles from './styles.module.css'

interface Props {
  refTable: RefObject<HTMLTableElement>
}

const PanelResult: FC<Props> = ({ refTable }) => {
  const {
    stylesEntries,
    stylesInputValueZero,
    stylesInputValueOne,
    stylesOutputValueZero,
    stylesOutputValueOne,
    tableData
  } = useTable()
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__table}>
        <div className={styles.wrapper_inset}>
          <Table
            ref={refTable}
            stylesEntries={stylesEntries}
            stylesInputValueZero={stylesInputValueZero}
            stylesInputValueOne={stylesInputValueOne}
            stylesOutputValueZero={stylesOutputValueZero}
            stylesOutputValueOne={stylesOutputValueOne}
            tableData={tableData}
          />
        </div>
      </div>
    </section>
  )
}

export default PanelResult
