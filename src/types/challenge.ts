export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Challenge {
  id: string
  title: string
  difficulty: Difficulty
  estimatedMinutes?: number
  instructions: string
  solutionExplanation: string
  starterHtml: string
  starterCss: string
  solutionHtml: string
  solutionCss: string
}

export interface AnatomyBlock {
  label: string
  css: string
  caption: string
}

export interface PatternIntroduction {
  tagline: string
  overview: string
  howItWorks: string
  previewHtml: string
  previewCss: string
  previewCaption: string
  anatomyBlocks: AnatomyBlock[]
  anatomyExplanation: string
}

export interface Topic {
  id: string
  title: string
  challenges: Challenge[]
  patternIntro?: PatternIntroduction
}
