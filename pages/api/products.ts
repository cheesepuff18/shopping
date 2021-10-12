import { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../models/product'
import fs from 'fs'
import path from 'path'

const fullPath = path.join(process.cwd(), 'data/products.json')

// Pulls product data from products.json file
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Product>>
) {
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  res.status(200).json(fileContents);
}
