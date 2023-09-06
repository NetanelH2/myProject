function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true
    } else {
        return false
    }
}

const yearToCheck = 2024 // Change this value to the year you want to check


if (isLeapYear(yearToCheck)) {
    console.log(`${yearToCheck} is a leap year.`)
} else {
    console.log(`${yearToCheck} is not a leap year.`)
}
