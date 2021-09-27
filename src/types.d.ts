export interface styleProperties {
  color: string
  bgColor: string
}
export interface TableSettings {
  styleInitialVariables: styleProperties
  styleOneValue: styleProperties
  styleZeroValue: styleProperties
  zoom: number
}

export interface TableData {
  initialEntries: number
  outputs: {[key: string]: number[]}
}
