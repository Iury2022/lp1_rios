
import { RiverReading } from '../models/RiverReading'
import { toTimestampString } from './date_utils'

import { writeFileSync } from 'fs'

export const saveToCsvFile = (readings: RiverReading[], fileName: string) => {
  let csvContent = 'Código da estação,Nome do rio,Data e hora,Nível,Vazão,Chuva\n'
  
  readings = readings.reverse()
  
  readings.forEach((r) => {
    const line = `${r.stationCode},${r.riverName},${toTimestampString(r.dateTime)},${r.level},${r.flow},${r.rain}\n`
    //csvContent = csvContent + line
    //csvContent += line
    csvContent = `${csvContent}${line}`
  })

  writeFileSync(fileName, csvContent)
}
