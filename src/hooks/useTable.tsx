import { useCallback, useContext } from 'react'
import TableContext from '../contexts/tableContext'
import { styleProperties } from '../types'

interface ReturnType {
  styleInitialVariables: styleProperties
  changeColor: (property: string, value: string) => void
}

function useTable (): ReturnType {
  const { tableSettings, changeTableSettings } = useContext(TableContext)
  const { styleInitialVariables } = tableSettings

  const changeColor = useCallback((property: string, value: string) => {
    changeTableSettings(prev => {
      const newSettings = { ...prev, [property]: value }
      return newSettings
    })
  }, [])

  return { styleInitialVariables, changeColor }
}

export default useTable
