import React, { FC } from 'react'
import styles from './styles.module.css'

const Table: FC<{}> = () => {
  return (
    <table className={styles.table}>
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
          <td className={styles.td}>A'B</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
