import React, { forwardRef } from 'react'
import { styleProperties, TableData } from '../../types'
import styles from './styles.module.css'

export interface PropsTable {
  stylesEntries: styleProperties
  stylesOutputs: styleProperties
  tableData: TableData
}

const Table = forwardRef<HTMLTableElement, PropsTable>((props, ref) => {
  const { stylesEntries } = props
  return (
    <table ref={ref} className={styles.table}>
      <tbody>
        <tr>
          <th
            className={styles.th}
            style={{ backgroundColor: stylesEntries.bgColor, color: stylesEntries.color }}
          >A
          </th>
          <th
            className={styles.th}
            style={{ backgroundColor: stylesEntries.bgColor, color: stylesEntries.color }}
          >B
          </th>
          <th
            className={styles.th}
            style={{ backgroundColor: stylesEntries.bgColor, color: stylesEntries.color }}
            colSpan={2}
          >X
          </th>
        </tr>
        <tr>
          <td className={styles.td}>0</td>
          <td className={styles.td}>1</td>
          <td className={styles.td}>1</td>
          <td className={styles.td__expression}>A'B</td>
        </tr>
      </tbody>
    </table>
  )
})

export default Table
