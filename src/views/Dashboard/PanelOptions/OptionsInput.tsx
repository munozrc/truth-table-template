import React, { FC, useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'
import HorizontalContainer from '../../../components/HorizontalContainer'
import Input from '../../../components/Input'
import InputColor from '../../../components/InputColor'
import useField from '../../../hooks/useField'
import useTable from '../../../hooks/useTable'
import { defaultValues } from '../../../config'

interface Props {
  labelValue?: string
  name: string
}
const OptionsInput: FC<Props> = ({ labelValue, name }) => {
  const { changeStyles, changeNumberEntries } = useTable()
  const numberItems = useField('number', '2')
  const bgColor = useField('color', (defaultValues as any)[name].bgColor)
  const color = useField('color', (defaultValues as any)[name].color)

  const changeHandler = (color: string, bgColor: string): void => {
    changeStyles(name, { color, bgColor })
  }

  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 300)
    , [])

  useEffect(() => {
    debouncedChangeHandler(color.value, bgColor.value)
  }, [color.value, bgColor.value])

  useEffect(() => {
    const normalizeValue = parseInt(numberItems.value)
    if (isNaN(normalizeValue)) return
    if (normalizeValue <= 0) return
    changeNumberEntries(parseInt(numberItems.value))
  }, [numberItems.value])

  return (
    <HorizontalContainer labelValue={labelValue}>
      <Input {...numberItems} max='6' min='2' />
      <InputColor {...bgColor} />
      <InputColor {...color} />
    </HorizontalContainer>
  )
}

export default OptionsInput
