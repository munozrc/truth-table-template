import React, { forwardRef } from 'react'
import useTable from '../../hooks/useTable'
import { styleProperties } from '../../types'
import { generateArrayNumbers, parseBinary } from '../../utils'
import OutputItem from './OutputItem'
import styles from './styles.module.css'

const Table = forwardRef<HTMLTableElement>((_props, ref) => {
  const { tableSettings, tableData, changeOutputValue } = useTable()
  const { stylesEntries, stylesOutputs, stylesInputValueOne, stylesInputValueZero, stylesOutputValueOne, stylesOutputValueZero } = tableSettings
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
                style={{ backgroundColor: stylesOutputs.bgColor, color: stylesOutputs.color }}
                colSpan={2}
              >{output.toUpperCase()}
              </th>
            ))
          }
        </tr>
        {
          generateArrayNumbers(tableData.initialEntries.length).map(value => {
            const binaryNumber = parseBinary(value, tableData.initialEntries.length)
            const isZero = (value: string): styleProperties => parseInt(value) === 0 ? stylesInputValueZero : stylesInputValueOne
            return (
              <tr key={`row-${value}`}>
                {
                  binaryNumber.map((digit, index) => (
                    <td
                      key={`number-${index}-${digit}`}
                      className={styles.td}
                      style={{ backgroundColor: isZero(digit).bgColor, color: isZero(digit).color }}
                    >
                      {digit}
                    </td>
                  ))
                }
                {
                  Object.keys(tableData.outputs).map((output) => (
                    <OutputItem
                      key={`hey-${output}`}
                      index={value}
                      outputName={output}
                      stylesOneValue={stylesOutputValueOne}
                      stylesZeroValue={stylesOutputValueZero}
                      value={tableData.outputs[output][value]}
                      changeOutputValue={changeOutputValue}
                    />
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
