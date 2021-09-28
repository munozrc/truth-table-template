import React, { FC, useRef } from 'react'
import { FiClipboard, FiInfo, FiTrash2 } from 'react-icons/fi'
import Button from '../../components/Button'
import useTable from '../../hooks/useTable'
import PanelOptions from './PanelOptions'
import PanelResult from './PanelResult'
import styles from './styles.module.css'

const Dashboard: FC<{}> = () => {
  const refTable = useRef<HTMLTableElement>(null)
  const { resetSettingsAndAllData } = useTable()

  const handleCopyTable = (): void => {
    if (refTable.current !== null && typeof refTable.current !== 'undefined') {
      const range = document.createRange()
      const selection = window.getSelection()

      selection?.removeAllRanges()
      range.selectNodeContents(refTable.current)
      selection?.addRange(range)
      document.execCommand('copy')
      selection?.removeAllRanges()
    }
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.wrapper__header}>
        <h1 className={styles.header__title}>😭Template</h1>
        <div className={styles.wrapper__toolbar}>
          <Button variant='flat' onClick={handleCopyTable}>
            <FiClipboard size='1.4em' color='#fafafa' />
          </Button>
          <Button variant='flat' onClick={resetSettingsAndAllData}>
            <FiTrash2 size='1.4em' color='#fafafa' />
          </Button>
          <Button variant='flat'><FiInfo size='1.4em' color='#fafafa' /></Button>
        </div>
      </header>
      <PanelResult refTable={refTable} />
      <PanelOptions />
    </div>
  )
}

export default Dashboard
