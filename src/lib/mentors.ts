import { MENTORS } from '@/constants/mentors'
import { Mentor, MentorFilters } from '@/types'

// Mock API backed by demo data. To use a real backend, replace each body with
// apiRequest from './axios', e.g. apiRequest<Mentor[]>({ url: '/mentors', params: filters, errorMessage: '...' })

const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms))

export const fetchMentors = async ({ search, skill }: Partial<MentorFilters> = {}): Promise<Mentor[]> => {
  await delay()
  const query = search?.trim().toLowerCase() ?? ''

  return MENTORS.filter(mentor => {
    const matchesSkill = !skill || mentor.skills.includes(skill)
    const matchesSearch =
      !query ||
      [mentor.name, mentor.title, mentor.company, ...mentor.skills].some(value => value.toLowerCase().includes(query))

    return matchesSkill && matchesSearch
  })
}

export const fetchMentor = async (id: string): Promise<Mentor> => {
  await delay()
  const mentor = MENTORS.find(item => item.id === id)
  if (!mentor) throw new Error('Mentor not found')

  return mentor
}
