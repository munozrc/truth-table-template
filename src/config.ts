import { TableData, TableSettings } from './types'

export const initialTableData: TableData = {
  initialEntries: ['A', 'B'],
  outputs: { x: [0, 0, 0, 0] }
}

export const defaultValues: TableSettings = {
  stylesEntries: { color: '#fafafa', bgColor: '#04aa6d' },
  stylesOutputs: { color: '#fafafa', bgColor: '#04aa6d' },
  stylesOneValue: { color: '#fafafa', bgColor: '#04aa6d' },
  stylesZeroValue: { color: '#fafafa', bgColor: '#04aa6d' },
  zoom: 1.4
}
