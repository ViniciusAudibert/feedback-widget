import React, { useContext, useState } from 'react'
import { FeedbackKeyType } from './Steps/FeedbackChoiceStep'

interface FeedbackState {
  selectedFeedbackType: FeedbackKeyType | null
  selectFeedbackType: (feedbackType: FeedbackKeyType) => void
}

const Context = React.createContext<FeedbackState>({
  selectedFeedbackType: null,
  selectFeedbackType: () => {},
})

export function useFeedbackType() {
  return useContext(Context)
}

export function FeedbackContextProvider({ children }: { children: React.ReactNode }) {
  const [selectedFeedbackType, selectFeedbackType] = useState<FeedbackKeyType | null>(null)

  return (
    <Context.Provider
      value={{
        selectedFeedbackType,
        selectFeedbackType,
      }}
    >
      {children}
    </Context.Provider>
  )
}
