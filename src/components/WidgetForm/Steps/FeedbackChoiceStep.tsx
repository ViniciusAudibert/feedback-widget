import { CloseButton } from '../../CloseButton'

import bugSvg from '../../../assets/bug.svg'
import ideaSvg from '../../../assets/idea.svg'
import thoughtSvg from '../../../assets/thought.svg'
import { StepsProps } from '.'
import { useFeedbackType } from '../useFeedbackType'

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

export function FeedbackChoiceStep({ changeStep }: StepsProps) {
  const { selectFeedbackType } = useFeedbackType()

  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(FEEDBACK_TYPE).map(([key, val]) => (
          <button
            key={key}
            type="button"
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => {
              selectFeedbackType(key as FeedbackKeyType)
              changeStep('FormStep')
            }}
          >
            <img className="w-10 h-10" src={val.image.src} alt={val.image.alt} />
            <span>{val.title}</span>
          </button>
        ))}
      </div>
    </>
  )
}
