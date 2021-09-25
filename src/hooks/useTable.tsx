import { useCallback, useContext } from 'react'
import TableContext from '../contexts/TableContext'
import { styleProperties } from '../types'

interface ReturnType {
  styleInitialVariables: styleProperties
  changeStyles: (element: string, values: styleProperties) => void
}

function useTable (): ReturnType {
  const { tableSettings, changeTableSettings } = useContext(TableContext)
  const { styleInitialVariables } = tableSettings

  const changeStyles = useCallback((element: string, values: styleProperties) => {
    changeTableSettings(prev => {
      const newSettings = { ...prev, [element]: values }
      return newSettings
    })
  }, [])

  return { styleInitialVariables, changeStyles }
}

export default useTable
