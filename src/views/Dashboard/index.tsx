import React, { FC } from 'react'
import PanelOptions from './PanelOptions'
import PanelResult from './PanelResult'
import styles from './styles.module.css'

const Dashboard: FC<{}> = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.wrapper__header}>
        <h1 className={styles.header__title}>😭Template</h1>
      </header>
      <PanelResult />
      <PanelOptions />
    </div>
  )
}

export default Dashboard
