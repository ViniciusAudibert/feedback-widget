import { FeedbackChoiceStep } from './FeedbackChoiceStep'
import { FeedbackFormStep } from './FeedbackFormStep'
import { FeedbackSuccessStep } from './FeedbackSuccessStep'

export type StepsName = 'ChoiceStep' | 'FormStep' | 'SuccessStep'

export interface StepsProps {
  changeStep: (type: StepsName) => void
}

interface Props extends StepsProps {
  activeStep: StepsName
}

export function WidgetFormStep({ activeStep, ...rest }: Props) {
  const steps: { [key in StepsName]: React.FC } = {
    ChoiceStep: () => <FeedbackChoiceStep {...rest} />,
    FormStep: () => <FeedbackFormStep {...rest} />,
    SuccessStep: () => <FeedbackSuccessStep {...rest} />,
  }

  const ActiveStepComponent = steps[activeStep]

  return <ActiveStepComponent />
}
