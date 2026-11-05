'use client'

import React, { createContext, ReactNode, useState } from 'react'

export const ExerciseContext = createContext({});

function ExerProvider({children}: {children: ReactNode}) {

  const [addTodays, setAddTodays] = useState([]); 
  const [saved, setSaved] = useState([]); 

  const sharedData = {
    addTodays,
    setAddTodays,
    saved,
    setSaved
  }

  return (
    <ExerciseContext.Provider value={sharedData}>{children}</ExerciseContext.Provider>
  )
}

export default ExerProvider;