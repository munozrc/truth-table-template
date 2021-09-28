import { TableData, TableSettings } from './types'
import { generateArrayNumbersEmpty } from './utils'

export const entriesNames = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const initialTableData: TableData = {
  initialEntries: ['A', 'B'],
  outputs: { x: generateArrayNumbersEmpty(2) }
}

export const defaultValues: TableSettings = {
  stylesEntries: { color: '#fafafa', bgColor: '#121212' },
  stylesInputValueOne: { color: '#fafafa', bgColor: '#0059ff' },
  stylesInputValueZero: { color: '#fafafa', bgColor: '#3d3d3d' },
  stylesOutputValueOne: { color: '#121212', bgColor: '#ffdd00' },
  stylesOutputValueZero: { color: '#fafafa', bgColor: '#a63636' },
  zoom: 1.4
}
