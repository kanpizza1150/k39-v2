'use strict'
import { Request, Response, Router } from 'express'
const Semen = require('../models/Semen')
const router = Router()
router.get('/', async (req: Request, res: Response) => {
  try {
    const data = await Semen.find()
    res.json(data)
  } catch (error: any) {
    res.status(400).json({ message: error?.message })
  }
})
router.post('/', async (req: Request, res: Response) => {
  const data = new Semen({
    title: req.body.title,
    doses: req.body.doses,
  })
  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  } catch (error: any) {
    res.status(400).json({ message: error?.message })
  }
})

module.exports = router
