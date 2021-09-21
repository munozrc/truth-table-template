import React, { FC } from 'react'
import PanelOptions from './PanelOptions'
import PanelResult from './PanelResult'
import styles from './styles.module.css'

const Dashboard: FC<{}> = () => {
  return (
    <div className={styles.wrapper}>
      <PanelResult />
      <PanelOptions />
    </div>
  )
}

export default Dashboard
