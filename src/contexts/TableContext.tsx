import React, { createContext, useState, FC, SetStateAction, Dispatch } from 'react'
import { initialTableData } from '../config'
import { TableData, TableSettings } from '../types'
import { loadTableSettings } from '../utils/TableMethods'

interface ITableContext {
  tableSettings: TableSettings
  tableData: TableData
  changeTableSettings: Dispatch<SetStateAction<TableSettings>>
  changeTableData: Dispatch<SetStateAction<TableData>>
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const TableContext = createContext({} as ITableContext)

const TableProvider: FC = ({ children }) => {
  const [tableSettings, changeTableSettings] = useState<TableSettings>(loadTableSettings())
  const [tableData, changeTableData] = useState<TableData>(initialTableData)
  return (
    <TableContext.Provider
      value={{
        tableSettings,
        tableData,
        changeTableSettings,
        changeTableData
      }}
    >
      {children}
    </TableContext.Provider>
  )
}

export { TableProvider }
export default TableContext
