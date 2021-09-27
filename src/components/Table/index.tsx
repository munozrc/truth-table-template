import React, { forwardRef } from 'react'
import { styleProperties, TableData } from '../../types'
import { generateArrayNumbers, parseBinary } from '../../utils'
import OutputItem from './OutputItem'
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
          generateArrayNumbers(tableData.initialEntries.length).map(value => {
            const binaryNumber = parseBinary(value, tableData.initialEntries.length)
            console.log({ binaryNumber, value })
            return (
              <tr key={`row-${value}`}>
                {
                  binaryNumber.map((digit, index) => (
                    <td key={`number-${index}-${digit}`} className={styles.td}>{digit}</td>
                  ))
                }
                {
                  Object.keys(tableData.outputs).map((output) => (
                    <OutputItem key={`hey-${output}`} />
                  ))
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
})

export default Table
