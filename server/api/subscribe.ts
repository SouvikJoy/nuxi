import * as url from 'url'
import { createClient } from '@supabase/supabase-js'

export default async(req, res) => {
  // eslint-disable-next-line node/no-deprecated-api
  const queryObject = url.parse(req.url, true).query
  const { SUPABASE_URL, SUPABASE_KEY } = process.env
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

    let response
    const { email } = queryObject
    if (email) {
      const { data } = await supabase.from('subscribers').upsert({
        email,
      })
      response = data
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(response))
    res.end()
  }
  catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(error))
    res.end()
  }
}
