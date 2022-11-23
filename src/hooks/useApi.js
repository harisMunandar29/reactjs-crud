import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useApi() {
    const getProvinsi = async () =>{
        const data = await axios.get('http://34.101.172.140:3005/api/propinsi/list')
        return data
    }
    const {data , isLoading , isError, refetch} = useQuery(['dataprovinsi'],getProvinsi,{
        staleTime : 60000
    })
  return {fetchData : data, fetchLoading : isLoading, fetchUlang: refetch}
}

