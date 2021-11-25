import { createClient } from '@supabase/supabase-js'

export default async() => {
  // eslint-disable-next-line node/no-deprecated-api
  const { SUPABASE_URL, SUPABASE_KEY } = process.env
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
  const { data } = await supabase.from('products').select('*')
  return { products: data }
}
