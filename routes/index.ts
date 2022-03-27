'use strict'

import { Router } from 'express'
const cattle = require('./cattle')
const semen = require('./semen')
const router = Router()

router.get('/', (req, res) => {
  res.json([
    { method: 'GET', path: '/api/cattle' },
    { method: 'POST', path: '/api/cattle' },
    { method: 'GET', path: '/api/semen ' },
    { method: 'POST', path: '/api/semen ' },
  ])
})

router.use('/cattle', cattle)
router.use('/semen', semen)

module.exports = router
