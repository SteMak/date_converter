import config from './config.js'
import counters from './counters.js'

const converter = (hidjra) => {
  let args = hidjra.split(' ')
  let year = parseInt(args.pop())
  let day = parseInt(args.shift())
  let month = counters.searchMonth(args.join(' '))
  if (isNaN(year) || isNaN(day)) {
    console.log('parse error: year and day should be an integer')
    return new Date()
  }
  if (month === false) {
    console.log('parse error: month should be right')
    return new Date()
  }

  return new Date(
    config.startPoint.getFullYear(),
    config.startPoint.getMonth(),
    config.startPoint.getDate() + counters.daysInYears(year - 1) + counters.daysInMonths(month - 1, year) + (day - 1)
  )
}

export default converter
