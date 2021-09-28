import { useCallback, useContext } from 'react'
import { entriesNames } from '../config'
import TableContext from '../contexts/TableContext'
import { styleProperties, TableData } from '../types'
import { generateArrayNumbersEmpty } from '../utils'

interface ReturnType {
  stylesEntries: styleProperties
  stylesInputValueOne: styleProperties
  stylesInputValueZero: styleProperties
  stylesOutputValueOne: styleProperties
  stylesOutputValueZero: styleProperties
  tableData: TableData
  changeStyles: (element: string, values: styleProperties) => void
  changeNumberEntries: (value: number) => void
}

function useTable (): ReturnType {
  const { tableSettings, tableData, changeTableSettings, changeTableData } = useContext(TableContext)
  const { stylesEntries, stylesInputValueOne, stylesInputValueZero, stylesOutputValueOne, stylesOutputValueZero } = tableSettings

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

      const newValuesEntries: string[] = entriesNames.split('').filter((_letter, index) => index < value)
      return { initialEntries: newValuesEntries, outputs: { x: generateArrayNumbersEmpty(value) } }
    })
  }, [])

  return {
    stylesEntries,
    stylesInputValueOne,
    stylesInputValueZero,
    stylesOutputValueOne,
    stylesOutputValueZero,
    tableData,
    changeStyles,
    changeNumberEntries
  }
}

export default useTable
