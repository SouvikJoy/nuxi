import { createClient } from '@supabase/supabase-js'

export default async(req, res) => {
  // eslint-disable-next-line node/no-deprecated-api
  const { SUPABASE_URL, SUPABASE_KEY } = process.env
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
    const { data } = await supabase.from('products').select('*')

    return data
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    res.writeHead(500, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(error))
    res.end()
  }
}
