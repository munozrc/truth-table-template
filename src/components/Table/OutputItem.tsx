import React, { FC } from 'react'
import { styleProperties } from '../../types'
import styles from './styles.module.css'

interface Props {
  stylesOneValue: styleProperties
  stylesZeroValue: styleProperties
  value: number
}

const OutputItem: FC<Props> = (props) => {
  const { stylesOneValue, stylesZeroValue, value } = props
  const { color, bgColor } = value === 0 ? stylesZeroValue : stylesOneValue

  return (
    <>
      <td
        className={`${styles.td} ${styles.td__output}`}
        style={{ backgroundColor: bgColor, color: color }}
      >{value}
      </td>
      <td className={styles.td__expression} />
    </>
  )
}
export default OutputItem
