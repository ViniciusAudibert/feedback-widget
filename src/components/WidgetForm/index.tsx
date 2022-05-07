import { useState } from 'react'

import bugSvg from '../../assets/bug.svg'
import ideaSvg from '../../assets/idea.svg'
import thoughtSvg from '../../assets/thought.svg'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'

export const FEEDBACK_TYPE = {
  BUG: {
    title: 'Problema',
    image: {
      src: bugSvg,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      src: ideaSvg,
      alt: 'Imagem de uma lampada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      src: thoughtSvg,
      alt: 'Imagem de um balão de pensamento',
    },
  },
}

export type FeedbackKeyType = keyof typeof FEEDBACK_TYPE

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackKeyType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem) md:w-auto]">
      {feedbackType ? (
        <FeedbackContentStep feedbackType={feedbackType} onBack={() => setFeedbackType(null)} />
      ) : (
        <FeedbackTypeStep onFeedbackChanged={setFeedbackType} />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com 🤍 por{' '}
        <a className="underline underline-offset-2" href="https://github.com/ViniciusAudibert">
          Vinicius Audibert
        </a>
      </footer>
    </div>
  )
}
