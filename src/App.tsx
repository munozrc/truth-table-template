import React, { FC } from 'react'
import { TableProvider } from './contexts/tableContext'
import Dashboard from './views/Dashboard'

const App: FC<{}> = () => {
  return (
    <main className='container'>
      <TableProvider>
        <Dashboard />
      </TableProvider>
    </main>
  )
}

export default App
