'use strict'
import { Request, Response, Router } from 'express'
const Cattle = require('../models/Cattle')
const router = Router()
router.get('/', async (req: Request, res: Response) => {
  try {
    const data = await Cattle.find()
    res.json(data)
  } catch (error: any) {
    res.status(400).json({ message: error?.message })
  }
})
router.post('/', async (req: Request, res: Response) => {
  const data = new Cattle({
    name: req.body.name,
    nickname: req.body.nickname,
    date_of_birth: req.body.date_of_birth,
    sire: req.body.sire,
    dam: req.body.dam,
  })

  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  } catch (error: any) {
    res.status(400).json({ message: error?.message })
  }
})

module.exports = router
