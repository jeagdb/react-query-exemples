import styled from 'styled-components'
import { useQueryClient } from 'react-query'
import { useState, useEffect } from 'react'
import { get, map, isNull, isEqual } from 'lodash'

import usePaginateStars, { fetchData } from '../../hooks/usePaginateStars'

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const Pagination = () => {
  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)

  const { data, status, error, isSuccess, isFetching, refetch } = usePaginateStars(page)

  useEffect(() => {
    if (!isNull(get(data, 'data.next'))) {
      queryClient.prefetchQuery(['stars', page + 1], () => {
        return fetchData(page + 1)
      }, {
        staleTime: 5 * 1000 * 60
      })
    }
  }, [data, page, queryClient])

  if (isEqual(status, 'loading')) {
    return (
      <p>Chargement...</p>
    )
  }

  return (
    <List>
      {error && <button onClick={refetch}>Erreur: réessayer</button>}
      {isSuccess && get(data, 'data') && map(get(data, 'data.results'), star => {
        return (
          <p>{get(star, 'name')}</p>
        )
      })}
      {isFetching && <p>Chargement...</p>}
      {!isNull(get(data, 'data.previous')) && <button onClick={() => setPage(page - 1)}>Précédent</button>}
      {!error && <button onClick={() => setPage(page + 1)}>Suivant</button>}
    </List>
  )
}

export default Pagination
