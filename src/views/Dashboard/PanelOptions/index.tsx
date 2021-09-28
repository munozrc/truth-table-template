import React, { FC } from 'react'
import InputSettings from './InputSettings'
import styles from './styles.module.css'

const PanelOptions: FC<{}> = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h4 className={styles.header__title}>Opciones</h4>
      </header>
      <div className={styles.panel__wrapper}>
        <InputSettings labelValue='Entradas Iniciales' name='stylesEntries' />
      </div>
    </section>
  )
}

export default PanelOptions
