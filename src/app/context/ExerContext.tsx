'use client'

import React, { createContext, ReactNode, useState } from 'react'
import { IExercise } from '../type/type';

export const ExerciseContext = createContext<any>({});

function ExerProvider({children}: {children: ReactNode}) {

  const [addTodays, setAddTodays] = useState<IExercise[]>([]); 
  const [saved, setSaved] = useState<IExercise[]>([]); 

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