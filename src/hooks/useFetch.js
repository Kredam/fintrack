import { useInfiniteQuery, useQueries, useQuery, useSuspenseInfiniteQuery, useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query'
import { isArray, get } from 'lodash'
import { useCallback, useEffect, useMemo } from 'react'

import { baseApi } from '../api/http-common'

import { queryClient } from '..'

import useAxios from './useAxios'

const useFetch = ({ api = baseApi, id, key, services, combine, queryOptions = {}, auth = false, infinite = false, suspense = false }) => {
  const isParallel = isArray(services)
  const instance = useAxios(api, auth)
  const queryKey = isArray(id) ? id : [id]
  const queries = useMemo(() => {
    if (isParallel) {
      services.map((request) => {
        const queryKey = get(request, key)
        return ({
          queryKey: [...id, queryKey],
          queryFn: () => fetchApi(request)
        })
      })
    }
    return services
  }, [services, isParallel, key, id])

  const fetchApi = useCallback(async ({ request = services, signal }) => {
    console.log(signal)
    const response = await instance.request({ ...request, signal })
    return response.data
  }, [services, instance])

  useEffect(() => {
    return () => {
      queryClient.cancelQueries(queryKey)
    }
  }, [])

  if (infinite && suspense) {
    return { query: useSuspenseInfiniteQuery({ queryKey, queryFn: fetchApi, ...queryOptions }), fn: fetchApi }
  }
  if (infinite) {
    return { query: useInfiniteQuery({ queryKey, queryFn: fetchApi, ...queryOptions }), fn: fetchApi }
  }
  if (suspense) {
    if (isParallel) {
      return useSuspenseQueries({ queries, combine })
    }
    return { query: useSuspenseQuery({ queryKey, queryFn: fetchApi, ...queryOptions }), fn: fetchApi }
  }
  if (isParallel) {
    return useQueries({ queries, combine })
  }
  return { query: useQuery({ queryKey, queryFn: fetchApi, ...queryOptions }), fn: fetchApi }
}

export default useFetch
