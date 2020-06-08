import converter from './converter.js'

const equal = (testDate, rigthDate) => {
  return [
    testDate.getFullYear() === rigthDate.getFullYear() ? true : testDate.getFullYear(),
    testDate.getMonth() === rigthDate.getMonth() ? true : testDate.getMonth(),
    testDate.getDate() === rigthDate.getDate() ? true : testDate.getDate(),
  ]
}

console.log(equal(converter('1 ' + 'محـرّم‎' + ' 1'), new Date(622, 6, 18)))
console.log(equal(converter('14 ' + 'محـرّم‎' + ' 1'), new Date(622, 6, 31)))
console.log(equal(converter('15 ' + 'صفـر‎' + ' 1'), new Date(622, 7, 31)))
console.log(equal(converter('26 ' + 'صفـر‎' + ' 2'), new Date(623, 7, 31)))
console.log(equal(converter('27 ' + 'رمضان‎' + ' 21'), new Date(642, 7, 31)))
console.log(equal(converter('5 ' + 'ربـيع الآخر‎' + ' 81'), new Date(700, 5, 1)))
console.log(equal(converter('5 ' + 'ربـيع الـثاني‎' + ' 81'), new Date(700, 5, 1)))
console.log(equal(converter('1 ' + 'محـرّم‎' + ' 1440'), new Date(2018, 8, 11)))
console.log(equal(converter('1 ' + 'محـرّم‎' + ' 1441'), new Date(2019, 7, 31)))
console.log(equal(converter('16 ' + 'شوّال‎' + ' 1441'), new Date(2020, 5, 8)))
console.log(equal(converter('16 ' + 'جمادى الأولى‎' + ' 1442'), new Date(2020, 11, 31)))
console.log(equal(converter('10 ' + 'صفـر‎' + ' 1443'), new Date(2021, 8, 17)))
console.log(equal(converter('17 ' + 'شعـبان‎' + ' 1444'), new Date(2023, 2, 9)))
