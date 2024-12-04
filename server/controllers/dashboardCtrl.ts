import { Request, Response, NextFunction } from 'express'
import pool from '../config/connectDB'
import * as FormData from 'form-data'
import * as dotenv from "dotenv"
dotenv.config()

import Mailgun from 'mailgun.js'
const mailgun = new Mailgun(FormData)
const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY || "" })

const getData = async (req: Request, res: Response) => {
    const connection = await pool.getConnection()
    try {
        const [data, fields] = await connection.execute('SELECT * FROM all_companies LIMIT 10')
        res.send({ status: true, data })
    } catch(err){
        console.log("Error")
        res.status(500).json({ message: err })
    } finally {
        connection.release()
    }
}

const getDataById = async (req: Request, res: Response) => {
  const connection = await pool.getConnection()
  const { id } = req.params
  try {
    const [data, fields] = await connection.execute(`SELECT * FROM all_companies WHERE ID = ${id}`)
    const companies:any = data
    if(companies.length > 0){
      res.send({ status:true, data })
    } else {
      res.send({ status: false, data, message: "No data found with the id"  })
    }
  } catch(err){
    console.log("Error")
    res.status(500).json({ message: err })
  } finally {
    connection.release()
  }
}

const sendEmail = (req: Request, res: Response) => {
  const { id } = req.body
  try {
    mg.messages.create('sandbox-123.mailgun.org', {
      from: "Excited User <mailgun@sandbox-123.mailgun.org>",
      to: ["hemanth.83329@gmail.com"],
      subject: "Hello",
      text: "Testing some Mailgun awesomness!",
      html: "<h1>Testing some Mailgun awesomness!</h1>"
    })
    .then(msg => console.log(msg)) // logs response data
    .catch(err => console.error(err)); // logs any error
    res.send({ id, message: "Email sent" })
  } catch(err){
    console.log(err)
  }
}

export { getData, getDataById, sendEmail }
