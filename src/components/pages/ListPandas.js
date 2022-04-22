import { useNavigate } from 'react-router-dom'
import { get, map } from 'lodash'

import usePandas from '../../hooks/usePandas'

const ListPandas = () => {
  const navigate = useNavigate()
  const { isLoading, isSuccess, data, error, refetch } = usePandas()

  const handleDetails = (id) => {
    navigate(`/${id}`)
  }

  return (
    <div>
      {isLoading && <p>Chargement</p>}
      {error && <button onClick={refetch}>Relancer</button>}
      {isSuccess && data && map(data, panda => {
        return <button key={get(panda, 'key')} onClick={() => handleDetails(get(panda, 'key'))}>{get(panda, 'name')}</button>
      })}
    </div>
  )
}

export default ListPandas
