import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import { get } from 'lodash'

export const fetchData = async (page) => {
  const res = await axios.get(`https://swapi.dev/api/planets/?page=${page}`)
  return { ...get(res, 'data'), page }
}

const useInfiniteStars = () => {
  return useInfiniteQuery(
    'infiniteStars',
    async ({ pageParam = 1 }) => {
      return await fetchData(pageParam)
    }, {
      select: (data) => {
        return {
          ...data,
          pages: get(data, 'pages')[0]
        }
      },
      getNextPageParam: (data) => get(data, 'page') + 1
    }
  )
}

export default useInfiniteStars
