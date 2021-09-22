import React, { FC } from 'react'
import InputColor from '../../../components/InputColor'
import styles from './styles.module.css'

const PanelOptions: FC<{}> = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h4 className={styles.header__title}>Opciones</h4>
      </header>
      <div className={styles.panel__wrapper}>
        <InputColor labelValue='Variables Iniciales' />
      </div>
    </section>
  )
}

export default PanelOptions
