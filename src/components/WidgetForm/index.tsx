import { useState } from 'react'
import { StepsName, WidgetFormStep } from './Steps'
import { FeedbackContextProvider } from './useFeedbackType'

export function WidgetForm() {
  const [activeStep, setActiveStep] = useState<StepsName>('ChoiceStep')

  return (
    <FeedbackContextProvider>
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem) md:w-auto]">
        <WidgetFormStep activeStep={activeStep} changeStep={stepName => setActiveStep(stepName)} />

        <footer className="text-xs text-neutral-400">
          Feito com 🤍 por{' '}
          <a className="underline underline-offset-2" href="https://github.com/ViniciusAudibert">
            Vinicius Audibert
          </a>
        </footer>
      </div>
    </FeedbackContextProvider>
  )
}
