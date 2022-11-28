const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
}

const formatDate = (date) => {
    let temp = String(date)
    let unit = 'th'
    if (temp.at(-1) === '1' && temp !== '11' ) {
        unit = 'st'
    }
    if (temp.at(-1) === '2' && temp.at(0) !== '1') {
        unit = 'nd'
    }
    if (temp.at(-1) === '3' && temp.at(0) !== '1') {
        unit = 'rd'
    }
    return `${date}${unit}`
}


const formatTime = (time) => {
    let unit = 'pm';
    if (time < 12) {
        unit = 'am'
    }
    return `${time > 12 ? time % 12 : time}:00 ${unit}`
}

const formatMonth = (month) => {
    return months[month]
}

export { formatTime, formatDate, formatMonth }
