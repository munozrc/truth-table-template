export const parseBinary = (value: number, lenght: number): string[] => {
  const decimalToBinary = value.toString(2).padStart(lenght, '0')
  const getDigits = decimalToBinary.split('')
  return getDigits
}

export const generateArrayNumbers = (maxValue: number): number[] => {
  return Array.from(Array(Math.pow(2, maxValue)).keys())
}

export const generateArrayNumbersEmpty = (maxValue: number): number[] => {
  return new Array(Math.pow(2, maxValue)).fill(0)
}
