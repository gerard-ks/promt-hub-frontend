import { Category } from './category.model'
import { Author } from './author.model'

export interface Prompt {
  id: number
  title: string
  content: string
  score: number
  createdAt: string
  category: Category
  author: Author
  userVote: null | 'up' | 'down'
}
