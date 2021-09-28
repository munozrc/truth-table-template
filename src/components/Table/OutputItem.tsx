import React, { FC } from 'react'
import { styleProperties } from '../../types'
import styles from './styles.module.css'

interface Props {
  index: number
  outputName: string
  stylesOneValue: styleProperties
  stylesZeroValue: styleProperties
  value: number
  changeOutputValue: (output: string, pos: number) => void
}

const OutputItem: FC<Props> = (props) => {
  const { index, outputName, stylesOneValue, stylesZeroValue, value, changeOutputValue } = props
  const { color, bgColor } = value === 0 ? stylesZeroValue : stylesOneValue

  return (
    <>
      <td
        className={`${styles.td} ${styles.td__output}`}
        style={{ backgroundColor: bgColor, color: color }}
        onClick={() => changeOutputValue(outputName, index)}
      >{value}
      </td>
      <td className={styles.td__expression} />
    </>
  )
}
export default OutputItem
