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
        <InputSettings
          labelValue='Número de Entradas'
          name='stylesEntries'
          minValueInput={2}
          maxValueInput={6}
          isEntry
        />
        <InputSettings
          labelValue='Número de Salidas'
          name='stylesOutputs'
          minValueInput={1}
          maxValueInput={6}
        />
      </div>
    </section>
  )
}

export default PanelOptions
