import { useCallback, useContext } from 'react'
import TableContext from '../contexts/TableContext'
import { styleProperties, TableData } from '../types'

interface ReturnType {
  stylesEntries: styleProperties
  stylesOutputs: styleProperties
  tableData: TableData
  changeStyles: (element: string, values: styleProperties) => void
}

function useTable (): ReturnType {
  const { tableSettings, tableData, changeTableSettings } = useContext(TableContext)
  const { stylesEntries, stylesOutputs } = tableSettings

  const changeStyles = useCallback((element: string, values: styleProperties) => {
    changeTableSettings(prev => {
      const newSettings = { ...prev, [element]: values }
      return newSettings
    })
  }, [])

  return { stylesEntries, stylesOutputs, tableData, changeStyles }
}

export default useTable
