import { get } from 'lodash'
import { useNavigate, useParams } from 'react-router-dom'

import usePanda from '../../hooks/usePanda'
import useDeletePanda from '../../hooks/useDeletePanda'

const Panda = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const deletePanda = useDeletePanda()
  const { isLoading, isSuccess, data, error, refetch } = usePanda(id)

  const handleClose = () => {
    navigate('/')
  }

  const handleDelete = async (id) => {
    await deletePanda.mutateAsync(id)
    navigate('/')
  }

  return (
    <>
      {isLoading && <p>Spinner</p>}
      {error && <button onClick={refetch}>Relancer</button>}
      {isSuccess && data &&
        <div>
          <p>{get(data, 'name')}</p>
          <img src={get(data, 'image')} alt={get(data, 'name')} />
        </div>
      }
      <button onClick={handleClose}>Retour</button>
      <button onClick={() => handleDelete(get(data, 'key'))}>Supprime</button>
    </>
  )
}

export default Panda
