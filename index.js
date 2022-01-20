import express from 'express'

import { holidays } from './data/data.js'

import FindHoliday from './src/controllers/holiday.controller.js'

import CheckHolidays from './utils/check_holidays.js'

const app = express()
const port = 5000

app.get('/holidays', (req, res) => {
    res.send(holidays)
})

app.get('/is-today-holiday', (req, res) => {
    res.send(CheckHolidays(holidays))
})

app.get('/holiday/:id', (req, res) => {
    res.send(FindHoliday(holidays, req.params.id))
})

app.listen(port, () => {
    console.log(`Servidor ON - porta: ${port}`)
})