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
  minValueInput: string
  maxValueInput: string
  isEntry?: boolean
}

const InputSettings: FC<Props> = (props) => {
  const { labelValue, name, minValueInput, maxValueInput, isEntry = false } = props
  const { changeStyles, changeNumberOutputs, changeNumberEntries } = useTable()
  const numberItems = useField('number', minValueInput)
  const bgColor = useField('color', (defaultValues as any)[name].bgColor)
  const color = useField('color', (defaultValues as any)[name].color)

  const changeHandler = (color: string, bgColor: string): void => {
    changeStyles(name, { color, bgColor })
  }

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), [])

  useEffect(() => {
    debouncedChangeHandler(color.value, bgColor.value)
  }, [color.value, bgColor.value])

  useEffect(() => {
    const normalizeValue = parseInt(numberItems.value)
    if (isNaN(normalizeValue)) return
    if (normalizeValue <= 0) return
    if (isEntry) changeNumberEntries(parseInt(numberItems.value))
    else changeNumberOutputs(parseInt(numberItems.value))
  }, [numberItems.value])

  return (
    <HorizontalContainer labelValue={labelValue}>
      <Input {...numberItems} max={maxValueInput} min={minValueInput} />
      <InputColor {...bgColor} />
      <InputColor {...color} />
    </HorizontalContainer>
  )
}

export default InputSettings
