import React, { forwardRef } from 'react'
import styles from './styles.module.css'

const Table = forwardRef<HTMLTableElement>((_props, ref) => {
  return (
    <table ref={ref} className={styles.table}>
      <tbody>
        <tr>
          <th className={styles.th}>A</th>
          <th className={styles.th}>B</th>
          <th className={styles.th} colSpan={2}>X</th>
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
