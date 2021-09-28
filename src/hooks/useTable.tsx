import { useCallback, useContext } from 'react'
import { entriesNames } from '../config'
import TableContext from '../contexts/TableContext'
import { styleProperties, TableData, TableSettings } from '../types'
import { generateArrayNumbersEmpty } from '../utils'

interface ReturnType {
  tableSettings: TableSettings
  tableData: TableData
  changeStyles: (element: string, values: styleProperties) => void
  changeNumberEntries: (value: number) => void
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

      const newValuesEntries: string[] = entriesNames.split('').filter((_letter, index) => index < value)
      return { initialEntries: newValuesEntries, outputs: { x: generateArrayNumbersEmpty(value) } }
    })
  }, [])

  return {
    tableSettings,
    tableData,
    changeStyles,
    changeNumberEntries
  }
}

export default useTable
