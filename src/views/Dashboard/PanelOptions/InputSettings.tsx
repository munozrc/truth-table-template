import React, { FC, useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'
import HorizontalContainer from '../../../components/HorizontalContainer'
import Input from '../../../components/Input'
import InputColor from '../../../components/InputColor'
import useField from '../../../hooks/useField'
import useTable from '../../../hooks/useTable'
import { initialValueInput } from '../../../utils/TableMethods'

interface Props {
  labelValue?: string
  name: string
  minValueInput: number
  maxValueInput: number
  isEntry?: boolean
  onlyInputColors?: boolean
}

const InputSettings: FC<Props> = (props) => {
  const { labelValue, name, minValueInput, maxValueInput, isEntry = false, onlyInputColors = false } = props
  const { tableSettings, tableData, changeStyles, changeNumberOutputs, changeNumberEntries } = useTable()
  const numberItems = useField('number', initialValueInput(tableData, isEntry))
  const bgColor = useField('color', (tableSettings as any)[name].bgColor)
  const color = useField('color', (tableSettings as any)[name].color)

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
    if (normalizeValue <= 0 || normalizeValue > maxValueInput) return
    if (isEntry) changeNumberEntries(parseInt(numberItems.value))
    else changeNumberOutputs(parseInt(numberItems.value))
  }, [numberItems.value])

  return (
    <HorizontalContainer labelValue={labelValue} center={onlyInputColors}>
      {!onlyInputColors && <Input {...numberItems} max={maxValueInput} min={minValueInput} />}
      <InputColor {...bgColor} />
      <InputColor {...color} />
    </HorizontalContainer>
  )
}

export default InputSettings
