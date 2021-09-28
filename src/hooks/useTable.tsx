import { useCallback, useContext } from 'react'
import { defaultValues, entriesNames, initialTableData, outputsNames } from '../config'
import TableContext from '../contexts/TableContext'
import { styleProperties, TableData, TableSettings } from '../types'
import { generateArrayNumbersEmpty, saveDataLocalStorage } from '../utils'

interface ReturnType {
  tableSettings: TableSettings
  tableData: TableData
  changeStyles: (element: string, values: styleProperties) => void
  changeNumberEntries: (value: number) => void
  changeNumberOutputs: (value: number) => void
  changeOutputValue: (output: string, pos: number) => void
  resetSettingsAndAllData: () => void
}

function useTable (): ReturnType {
  const { tableSettings, tableData, changeTableSettings, changeTableData } = useContext(TableContext)

  const changeStyles = useCallback((element: string, values: styleProperties) => {
    changeTableSettings(prev => {
      const newSettings = { ...prev, [element]: values }
      saveDataLocalStorage(newSettings, 'TableSettingsTTT')
      return newSettings
    })
  }, [])

  const changeNumberEntries = useCallback((value: number) => {
    changeTableData(prev => {
      if (prev.initialEntries.length === value) return prev

      const outputs = Object.keys(prev.outputs)
      const newValuesEntries: string[] = entriesNames.split('').filter((_, i) => i < value)
      const newOutputs = prev.outputs

      outputs.forEach((output) => { newOutputs[output] = generateArrayNumbersEmpty(value) })
      const newData = { initialEntries: newValuesEntries, outputs: { ...newOutputs } }
      saveDataLocalStorage(newData, 'TableDataTTT')
      return newData
    })
  }, [])

  const changeNumberOutputs = useCallback((value: number) => {
    changeTableData(prev => {
      const outputs = Object.keys(prev.outputs)
      const newObj: {[key: string]: number[]} = {}
      const numberEntries = prev.initialEntries.length
      const arrayOfNames = outputsNames.split('')

      if (outputs.length === value) return prev

      const newNamesOutputs = arrayOfNames.filter((_, i) => i >= outputs.length && i < value)

      if (newNamesOutputs.length !== 0) {
        newNamesOutputs.forEach(name => { newObj[name] = generateArrayNumbersEmpty(numberEntries) })
        const newData = { ...prev, outputs: { ...prev.outputs, ...newObj } }
        saveDataLocalStorage(newData, 'TableDataTTT')
        return newData
      }

      outputs.forEach((output, i) => { if (i < value) newObj[output] = prev.outputs[output] })
      const newData = { ...prev, outputs: { ...newObj } }
      saveDataLocalStorage(newData, 'TableDataTTT')
      return newData
    })
  }, [])

  const changeOutputValue = useCallback((output: string, pos: number) => {
    console.log({ output, pos })
    changeTableData(prev => {
      const newOutput = prev.outputs[output].map((value, index) => {
        if (index === pos && value === 1) return 0
        if (index === pos && value === 0) return 1
        return value
      })
      const newObj = { ...prev.outputs, [output]: newOutput }
      const newData = { ...prev, outputs: newObj }
      saveDataLocalStorage(newData, 'TableDataTTT')
      return newData
    })
  }, [])

  const resetSettingsAndAllData = useCallback(() => {
    saveDataLocalStorage(defaultValues, 'TableSettingsTTT')
    saveDataLocalStorage(initialTableData, 'TableDataTTT')
    changeTableSettings(defaultValues)
    changeTableData(initialTableData)
  }, [])

  return {
    tableSettings,
    tableData,
    changeStyles,
    changeNumberEntries,
    changeNumberOutputs,
    changeOutputValue,
    resetSettingsAndAllData
  }
}

export default useTable
