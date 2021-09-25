import React, { createContext, useState, FC, SetStateAction, Dispatch } from 'react'
import { TableSettings } from '../types'

const defaultValues: TableSettings = {
  styleInitialVariables: { color: '#fafafa', bgColor: '#04aa6d' },
  styleOneValue: { color: '#fafafa', bgColor: '#04aa6d' },
  styleZeroValue: { color: '#fafafa', bgColor: '#04aa6d' },
  zoom: 1.4
}

interface ITableContext {
  tableSettings: TableSettings
  changeTableSettings: Dispatch<SetStateAction<TableSettings>>
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const TableContext = createContext({} as ITableContext)

const TableProvider: FC = ({ children }) => {
  const [tableSettings, changeTableSettings] = useState<TableSettings>(defaultValues)

  return (
    <TableContext.Provider
      value={{
        tableSettings,
        changeTableSettings
      }}
    >
      {children}
    </TableContext.Provider>
  )
}

export { TableProvider }
export default TableContext
