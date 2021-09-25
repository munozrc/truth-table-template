import React, { FC } from 'react'
import { FiClipboard, FiInfo, FiTrash2 } from 'react-icons/fi'
import Button from '../../components/Button'
import PanelOptions from './PanelOptions'
import PanelResult from './PanelResult'
import styles from './styles.module.css'

const Dashboard: FC<{}> = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.wrapper__header}>
        <h1 className={styles.header__title}>😭Template</h1>
        <div className={styles.wrapper__toolbar}>
          <Button variant='flat'><FiClipboard size='1.4em' color='#fafafa' /></Button>
          <Button variant='flat'><FiTrash2 size='1.4em' color='#fafafa' /></Button>
          <Button variant='flat'><FiInfo size='1.4em' color='#fafafa' /></Button>
        </div>
      </header>
      <PanelResult />
      <PanelOptions />
    </div>
  )
}

export default Dashboard
