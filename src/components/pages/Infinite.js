import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { get, map, isNull } from 'lodash'

import useInfiniteStars from '../../hooks/useInfiniteStars'

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const Infinite = () => {
  const { ref, inView } = useInView()

  const {
    status,
    data,
    isSuccess,
    isFetching,
    isFetchingNextPage,
    fetchNextPage
  } = useInfiniteStars()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  console.log('DAT', data)

  return (
    <List>
      <h1>Infinite Loading</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'error' && <p>Error</p>}

      {isSuccess &&
        <>
          <div>
            {map(get(data, 'pages.results'), star => {
              return <p>{get(star, 'name')}</p>
            })}
            <button
              ref={ref}
              onClick={() => fetchNextPage()}
              disabled={!isNull(get(data, 'data.next')) || isFetchingNextPage}>
              {isFetchingNextPage
                ? 'Loading more...'
                : !isNull(get(data, 'data.next'))
                    ? 'Load Newer'
                    : 'Nothing more to load'}
            </button>
          </div>
          <div>
            {isFetching && !isFetchingNextPage
              ? 'Background Updating...'
              : null}
          </div>
        </>
      }
    </List>
  )
}

export default Infinite
