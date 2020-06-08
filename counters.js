import config from './config.js'

const daysInYear = (year) => {
  let currentMonthsLength = config.monthsLength[year]
  if (currentMonthsLength === undefined) {
    currentMonthsLength = config.monthsLength.standart
    return (
      currentMonthsLength.reduce((acc, cur) => {
        return acc + cur
      }, 0) + (config.additionalDay.includes(year % config.cycle) ? 1 : 0)
    )
  }

  return currentMonthsLength.reduce((acc, cur) => {
    return acc + cur
  }, 0)
}

const searchMonth = (month) => {
  return config.monthsNames.reduce((acc, cur, ind) => {
    return acc === false && cur.includes(month) ? ind + 1 : acc
  }, false)
}

const daysInYears = (year, acc = 0) => {
  if (year === 0) {
    return acc
  }

  return daysInYears(year - 1, acc + daysInYear(year))
}

const daysInMonths = (month, year) => {
  if (month === 0) {
    return 0
  }
  let currentMonthsLength = config.monthsLength[year]
  if (currentMonthsLength === undefined) {
    currentMonthsLength = config.monthsLength.standart
  }

  return currentMonthsLength[month - 1] + daysInMonths(month - 1, year)
}

export default {
  searchMonth: searchMonth,
  daysInYears: daysInYears,
  daysInMonths: daysInMonths,
}
