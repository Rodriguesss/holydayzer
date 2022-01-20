export default function FindHoliday(holidays, id) {
    const month = []

    holidays.forEach(holiday => holiday.date.split("/")[0] === id && month.push(holiday))

    return month
}