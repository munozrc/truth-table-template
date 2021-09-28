export interface styleProperties {
  color: string
  bgColor: string
}
export interface TableSettings {
  stylesEntries: styleProperties
  stylesOutputs: styleProperties
  stylesInputValueOne: styleProperties
  stylesInputValueZero: styleProperties
  stylesOutputValueOne: styleProperties
  stylesOutputValueZero: styleProperties
  zoom: number
}

export interface TableData {
  initialEntries: string[]
  outputs: {[key: string]: number[]}
}
