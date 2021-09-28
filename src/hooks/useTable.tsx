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
  changeOutputValue: (output: string, pos: number) => void
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
      if (prev.initialEntries.length === value) return prev

      const outputs = Object.keys(prev.outputs)
      const newValuesEntries: string[] = entriesNames.split('').filter((_, i) => i < value)
      const newOutputs = prev.outputs

      outputs.forEach((output) => { newOutputs[output] = generateArrayNumbersEmpty(value) })
      return { initialEntries: newValuesEntries, outputs: { ...newOutputs } }
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
        return { ...prev, outputs: { ...prev.outputs, ...newObj } }
      }

      outputs.forEach((output, i) => { if (i < value) newObj[output] = prev.outputs[output] })
      return { ...prev, outputs: { ...newObj } }
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
      return { ...prev, outputs: newObj }
    })
  }, [])

  return {
    tableSettings,
    tableData,
    changeStyles,
    changeNumberEntries,
    changeNumberOutputs,
    changeOutputValue
  }
}

export default useTable
