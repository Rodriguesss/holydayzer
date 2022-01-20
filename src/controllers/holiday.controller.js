export default function FindHoliday(holidays, id) {
    return holidays.filter(holiday => holiday.date.split("/")[0] === id)
}