import { FeedbackKeyType, FEEDBACK_TYPE } from '..'
import { CloseButton } from '../../CloseButton'

interface Props {
  onFeedbackChanged: (type: FeedbackKeyType) => void
}

export function FeedbackTypeStep({ onFeedbackChanged }: Props) {
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
            onClick={() => onFeedbackChanged(key as FeedbackKeyType)}
          >
            <img className="w-10 h-10" src={val.image.src} alt={val.image.alt} />
            <span>{val.title}</span>
          </button>
        ))}
      </div>
    </>
  )
}
