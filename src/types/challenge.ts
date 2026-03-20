export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Challenge {
  id: string
  title: string
  difficulty: Difficulty
  instructions: string
  starterHtml: string
  starterCss: string
  solutionHtml: string
  solutionCss: string
}

export interface Topic {
  id: string
  title: string
  challenges: Challenge[]
}
