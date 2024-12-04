import { Request, Response } from "express"
import pool from "../config/connectDB"

const getReportById = async (req: Request, res: Response) => {
  const { country, company } = req.params
  const connection = await pool.getConnection()
  try {
    const [data, fields] = await connection.execute(`SELECT * FROM tera_src_data WHERE lower(Country)="${country.toLowerCase()}" AND lower(company_name)="${company.toLowerCase()}"`)
    res.send({ status: true,  message: "Data fetched sucessfully.", data })
  } catch(err){
    console.log(err)
    res.status(500).json({ status: false, message: err, data:[] })
  } finally {
    connection.release()
  }
}

export { getReportById }
