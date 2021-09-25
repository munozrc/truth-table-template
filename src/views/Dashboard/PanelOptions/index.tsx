import React, { FC } from 'react'
import Input from '../../../components/Input'
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
        <Input labelValue='Variables Iniciales' />
        <InputColor labelValue='Background' {...color} />
        <InputColor labelValue='Foreground' {...color} />
      </div>
    </section>
  )
}

export default PanelOptions
