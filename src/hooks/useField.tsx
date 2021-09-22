import { ChangeEvent, useState } from 'react'

interface ReturnType {
  type: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function useField (type: string, initValue?: string): ReturnType {
  const [value, setValue] = useState<string>(initValue ?? '')

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  return { type, value, onChange }
}

export default useField
