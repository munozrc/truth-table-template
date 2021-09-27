import React, { forwardRef } from 'react'
import { styleProperties, TableData } from '../../types'
import styles from './styles.module.css'

export interface PropsTable {
  stylesEntries: styleProperties
  stylesOutputs: styleProperties
  tableData: TableData
}

const Table = forwardRef<HTMLTableElement, PropsTable>((props, ref) => {
  const { stylesEntries, tableData } = props
  return (
    <table ref={ref} className={styles.table}>
      <tbody>
        <tr>
          {
            tableData.initialEntries.map(entry => (
              <th
                key={entry}
                className={styles.th}
                style={{ backgroundColor: stylesEntries.bgColor, color: stylesEntries.color }}
              >{entry}
              </th>
            ))
          }
          {
            Object.keys(tableData.outputs).map((output, index) => (
              <th
                key={`th-${index}`}
                className={styles.th}
                style={{ backgroundColor: stylesEntries.bgColor, color: stylesEntries.color }}
                colSpan={2}
              >{output.toUpperCase()}
              </th>
            ))
          }
        </tr>
        {
          Object.keys(tableData.outputs).map((output) => (
            tableData.outputs[output].map((value, index) => (
              <tr key={`${output}-${index}`}>
                <td className={styles.td}>0</td>
                <td className={styles.td}>1</td>
                <td className={styles.td}>{value}</td>
                <td className={styles.td__expression} />
              </tr>
            ))
          ))
        }
      </tbody>
    </table>
  )
})

export default Table
