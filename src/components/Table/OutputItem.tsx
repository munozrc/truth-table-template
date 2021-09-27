import React, { FC } from 'react'
import styles from './styles.module.css'

const OutputItem: FC<{}> = () => {
  return (
    <>
      <td className={styles.td}>0</td>
      <td className={styles.td__expression} />
    </>
  )
}
export default OutputItem
