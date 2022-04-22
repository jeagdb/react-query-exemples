import axios from 'axios'
import { useQuery } from 'react-query'
// import { map, get } from 'lodash'

export const fetchData = async (page) => {
  return await axios.get(`https://swapi.dev/api/planets/?page=${page}`)
}

const usePaginateStars = (page) => {
  return useQuery(['stars', page], async () => {
    return await fetchData(page)
  }, {
    staleTime: 60 * 1000 * 5
  })
}

export default usePaginateStars
