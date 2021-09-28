import { loadDataLocalStorage } from '.'
import { defaultValues } from '../config'
import { TableSettings } from '../types'

export const loadTableSettings = (): TableSettings => {
  const data = loadDataLocalStorage('TableSettingsTTT')
  console.log(data)
  return data !== null ? data : defaultValues
}
