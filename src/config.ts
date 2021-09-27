import { TableData, TableSettings } from './types'

export const initialTableData: TableData = {
  initialEntries: 2,
  outputs: { x: [0, 0, 0, 0] }
}

export const defaultValues: TableSettings = {
  styleInitialVariables: { color: '#fafafa', bgColor: '#04aa6d' },
  styleOneValue: { color: '#fafafa', bgColor: '#04aa6d' },
  styleZeroValue: { color: '#fafafa', bgColor: '#04aa6d' },
  zoom: 1.4
}
