import { TableData, TableSettings } from './types'
import { generateArrayNumbers } from './utils'

export const entriesNames = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const initialTableData: TableData = {
  initialEntries: ['A', 'B'],
  outputs: { x: generateArrayNumbers(2) }
}

export const defaultValues: TableSettings = {
  stylesEntries: { color: '#fafafa', bgColor: '#04aa6d' },
  stylesOutputs: { color: '#fafafa', bgColor: '#04aa6d' },
  stylesOneValue: { color: '#fafafa', bgColor: '#04aa6d' },
  stylesZeroValue: { color: '#fafafa', bgColor: '#04aa6d' },
  zoom: 1.4
}
