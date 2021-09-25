import React, { FC, useEffect } from 'react'
import GroupInputs from '../../../components/GroupInputs'
import Input from '../../../components/Input'
import InputColor from '../../../components/InputColor'
import useField from '../../../hooks/useField'
import useTable from '../../../hooks/useTable'

interface Props {
  labelValue?: string
  name: string
}

const OptionsInput: FC<Props> = ({ labelValue, name }) => {
  const { changeStyles } = useTable()
  const value = useField('number', '2')
  const bgColor = useField('color', '#04aa6d')
  const color = useField('color', '#fafafa')

  useEffect(() => {
    changeStyles(name, { color: color.value, bgColor: bgColor.value })
  }, [bgColor.value, color.value])

  return (
    <GroupInputs labelValue={labelValue}>
      <Input {...value} />
      <InputColor {...bgColor} />
      <InputColor {...color} />
    </GroupInputs>
  )
}

export default OptionsInput
