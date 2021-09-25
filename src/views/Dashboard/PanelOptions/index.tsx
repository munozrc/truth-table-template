import React, { FC } from 'react'
import OptionsInput from './OptionsInput'
import styles from './styles.module.css'

const PanelOptions: FC<{}> = () => {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h4 className={styles.header__title}>Opciones</h4>
      </header>
      <div className={styles.panel__wrapper}>
        <OptionsInput labelValue='Entradas Iniciales' name='styleInitialVariables' />
      </div>
    </section>
  )
}

export default PanelOptions
