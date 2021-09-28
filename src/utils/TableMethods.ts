import { loadDataLocalStorage } from '.'
import { defaultValues, initialTableData } from '../config'
import { TableData, TableSettings } from '../types'

export const loadTableSettings = (): TableSettings => {
  const data = loadDataLocalStorage('TableSettingsTTT')
  console.log(data)
  return data !== null ? data : defaultValues
}

export const loadTableData = (): TableData => {
  const data = loadDataLocalStorage('TableDataTTT')
  console.log(data)
  return data !== null ? data : initialTableData
}

export const initialValueInput = (data: TableData, isEntry: boolean): string => {
  if (isEntry) return data.initialEntries.length.toString(10)
  return Object.keys(data.outputs).length.toString(10)
}
