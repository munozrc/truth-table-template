import React, { FC } from 'react'
import InputColor from '../../../components/InputColor'
import useField from '../../../hooks/useField'
import styles from './styles.module.css'

const PanelOptions: FC<{}> = () => {
  const color = useField('color', '#04AA6D')
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h4 className={styles.header__title}>Opciones</h4>
      </header>
      <div className={styles.panel__wrapper}>
        <InputColor labelValue='Variables Iniciales' {...color} />
      </div>
    </section>
  )
}

export default PanelOptions
