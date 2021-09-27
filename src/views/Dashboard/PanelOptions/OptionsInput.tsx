import React, { FC, useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'
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

  const changeHandler = (color: string, bgColor: string): void => {
    changeStyles(name, { color, bgColor })
  }

  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 300)
    , [])

  useEffect(() => {
    debouncedChangeHandler(color.value, bgColor.value)
  }, [color.value, bgColor.value])

  return (
    <GroupInputs labelValue={labelValue}>
      <Input {...value} />
      <InputColor {...bgColor} />
      <InputColor {...color} />
    </GroupInputs>
  )
}

export default OptionsInput
