import axios from 'axios'
import { useQuery } from 'react-query'
// import { map, get } from 'lodash'

const usePandas = () => {
  // return useQuery('pandas', async () => {
  //   const { data } = await axios.get('http://localhost:3004/pandas')
  //   return data
  // })

  // staletime (milliseconds) option
  return useQuery('pandas', async () => {
    const { data } = await axios.get('http://localhost:3004/pandas')
    return data
  }, {
    staleTime: 60 * 1000 * 5
  })

  // select option
  // return useQuery('pandas', async () => {
  //   const { data } = await axios.get('http://localhost:3004/pandas')
  //   return data
  // }, {
  //   staleTime: 60 * 1000 * 5,
  //   select: (data) => {
  //     return map(data, panda => ({
  //       ...panda,
  //       name: `Nom: ${get(panda, 'name')}`
  //     }))
  //   }
  // })
}

export default usePandas
