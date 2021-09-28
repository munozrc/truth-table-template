import { useCallback, useContext } from 'react'
import { entriesNames, outputsNames } from '../config'
import TableContext from '../contexts/TableContext'
import { styleProperties, TableData, TableSettings } from '../types'
import { generateArrayNumbersEmpty } from '../utils'

interface ReturnType {
  tableSettings: TableSettings
  tableData: TableData
  changeStyles: (element: string, values: styleProperties) => void
  changeNumberEntries: (value: number) => void
  changeNumberOutputs: (value: number) => void
}

function useTable (): ReturnType {
  const { tableSettings, tableData, changeTableSettings, changeTableData } = useContext(TableContext)

  const changeStyles = useCallback((element: string, values: styleProperties) => {
    changeTableSettings(prev => {
      const newSettings = { ...prev, [element]: values }
      return newSettings
    })
  }, [])

  const changeNumberEntries = useCallback((value: number) => {
    changeTableData(prev => {
      const isEqualToOldValue = prev.initialEntries.length === value
      if (isEqualToOldValue) return prev

      const newValuesEntries: string[] = entriesNames.split('').filter((_, i) => i < value)
      return { initialEntries: newValuesEntries, outputs: { x: generateArrayNumbersEmpty(value) } }
    })
  }, [])

  const changeNumberOutputs = useCallback((value: number) => {
    changeTableData(prev => {
      const outputs = Object.keys(prev.outputs)
      const newObj: {[key: string]: number[]} = {}
      const numberEntries = prev.initialEntries.length
      const arrayOfNames = outputsNames.split('')

      const isEqualToOldValue = outputs.length === value
      if (isEqualToOldValue) return prev

      const newNamesOutputs = arrayOfNames.filter((_, i) => i >= outputs.length && i < value)

      if (newNamesOutputs.length !== 0) {
        newNamesOutputs.forEach(name => { newObj[name] = generateArrayNumbersEmpty(numberEntries) })
        return { ...prev, outputs: { ...prev.outputs, ...newObj } }
      }

      outputs.forEach((output, i) => { if (i < value) newObj[output] = prev.outputs[output] })
      return { ...prev, outputs: { ...newObj } }
    })
  }, [])

  return {
    tableSettings,
    tableData,
    changeStyles,
    changeNumberEntries,
    changeNumberOutputs
  }
}

export default useTable
