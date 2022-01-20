export default function CheckHolidays(holidays) {
    const today = new Date()
    let objectHoliday = {isHoliday: false, name: ""}

    function setHoliday(name) {
        objectHoliday.isHoliday = true
        objectHoliday.name = name
    }

    holidays.forEach(holiday => {
        holiday.date === today.toLocaleDateString() && setHoliday(holiday.name)
    })

    return objectHoliday.isHoliday ? 
        `Sim hoje é ${objectHoliday.name}` 
        : `Não, hoje não é feriado`
}
