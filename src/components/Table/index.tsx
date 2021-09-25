import React, { forwardRef } from 'react'
import useTable from '../../hooks/useTable'
import styles from './styles.module.css'

const Table = forwardRef<HTMLTableElement>((_props, ref) => {
  const { styleInitialVariables } = useTable()
  return (
    <table ref={ref} className={styles.table}>
      <tbody>
        <tr>
          <th
            className={styles.th}
            style={{ backgroundColor: styleInitialVariables.bgColor, color: styleInitialVariables.color }}
          >A
          </th>
          <th
            className={styles.th}
            style={{ backgroundColor: styleInitialVariables.bgColor, color: styleInitialVariables.color }}
          >B
          </th>
          <th
            className={styles.th}
            style={{ backgroundColor: styleInitialVariables.bgColor, color: styleInitialVariables.color }}
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
