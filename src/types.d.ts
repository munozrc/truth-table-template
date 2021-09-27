export interface styleProperties {
  color: string
  bgColor: string
}
export interface TableSettings {
  stylesEntries: styleProperties
  stylesOutputs: styleProperties
  stylesOneValue: styleProperties
  stylesZeroValue: styleProperties
  zoom: number
}

export interface TableData {
  initialEntries: number
  outputs: {[key: string]: number[]}
}
