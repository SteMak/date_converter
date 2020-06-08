const startPoint = new Date(622, 6, 18)

const cycleArabic = 30
const additionalDayArabic = [2, 5, 7, 10, 13, 16, 18, 21, 24, 26, 29]

// DECOMENT AND USE BELOW FOR TURKEY CYCLE OF "BIG YEARS"
// const cycleTurkey = 8
// const additionalDayTurkey = [2, 5, 7]

const cycle = cycleArabic
const additionalDay = additionalDayArabic

const monthsNames = [
  ['محـرّم‎'],
  ['صفـر‎'],
  ['ربـيع الأول‎'],
  ['ربـيع الآخر‎', 'ربـيع الـثاني‎'],
  ['جمادى الأولى‎'],
  ['جمادى الآخرة', '‎جمادى الـثاني‎'],
  ['رجب‎'],
  ['شعـبان‎'],
  ['رمضان‎'],
  ['شوّال‎'],
  ['ذو الـقـعـدة‎'],
  ['ذو الحجة‎'],
]
const monthsLength = {
  'standart': [30, 29, 30, 30, 29, 30, 29, 29, 30, 30, 29, 29],

  // YOU CAN ADD CUSTOM LENGTHS OF YEARS' MONGTH HERE
  // ALSO IT CAN BE USED FOR OVERWRITING "BIG YEARS" MISTAKES
  '1440': [29, 30, 29, 30, 30, 30, 29, 30, 29, 30, 29, 29],
  '1441': [30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 29],
  '1442': [29, 30, 29, 30, 29, 30, 29, 30, 30, 29, 30, 29],
  '1443': [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30],
  '1444': [29, 30, 29, 30, 30, 29, 29, 30, 29, 30, 29, 30],
}

export default {
  startPoint: startPoint,
  cycle: cycle,
  additionalDay: additionalDay,
  monthsNames: monthsNames,
  monthsLength: monthsLength,
}
