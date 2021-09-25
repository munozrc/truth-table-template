import React, { FC } from 'react'
import GroupInputs from '../../../components/GroupInputs'
import Input from '../../../components/Input'
import InputColor from '../../../components/InputColor'
import useField from '../../../hooks/useField'
import styles from './styles.module.css'

const PanelOptions: FC<{}> = () => {
  const color = useField('color', '#fafafa')
  const bgColor = useField('color', '#04aa6d')

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h4 className={styles.header__title}>Opciones</h4>
      </header>
      <div className={styles.panel__wrapper}>
        <GroupInputs labelValue='Variables Iniciales'>
          <Input type='number' />
          <InputColor {...bgColor} />
          <InputColor {...color} />
        </GroupInputs>
      </div>
    </section>
  )
}

export default PanelOptions
