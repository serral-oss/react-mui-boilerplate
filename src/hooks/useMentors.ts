import { useEffect, useState } from 'react'

import { fetchMentor, fetchMentors } from '@/lib/mentors'
import { Mentor, MentorFilters } from '@/types'

interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

const useAsync = <T>(load: () => Promise<T>, deps: unknown[]): AsyncState<T> => {
  const [state, setState] = useState<AsyncState<T>>({ data: null, loading: true, error: null })

  useEffect(() => {
    let active = true
    setState(prev => ({ ...prev, loading: true, error: null }))

    load()
      .then(data => active && setState({ data, loading: false, error: null }))
      .catch((error: Error) => active && setState({ data: null, loading: false, error: error.message }))

    return () => {
      active = false
    }
  }, deps)

  return state
}

export const useMentors = ({ search = '', skill = '' }: Partial<MentorFilters> = {}) =>
  useAsync<Mentor[]>(() => fetchMentors({ search, skill }), [search, skill])

export const useMentor = (id: string) => useAsync<Mentor>(() => fetchMentor(id), [id])
