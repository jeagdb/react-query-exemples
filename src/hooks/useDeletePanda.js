import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'

const useDeletePanda = () => {
  const queryClient = useQueryClient()

  return useMutation((id) =>
    axios.delete(`http://localhost:3004/pandas/${id}`), {
    onSuccess: () => {
      // refetch the pandas
      queryClient.invalidateQueries('pandas')
    }
  }
  )
}

export default useDeletePanda
