import axios from 'axios'
import { useQuery } from 'react-query'

const usePanda = (id) => {
  return useQuery(['pandas', id], async () => {
    const { data } = await axios.get(`http://localhost:3004/pandas/${id}`)
    return data
  }, {
    staleTime: 5 * 1000 * 60
  })
}

export default usePanda
