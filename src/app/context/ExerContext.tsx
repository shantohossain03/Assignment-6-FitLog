'use client'

import React, { createContext, ReactNode, useState } from 'react'
import { IExercise } from '../type/type';


interface IExerciseContext {
  addTodays: IExercise[];
  setAddTodays: React.Dispatch<React.SetStateAction<IExercise[]>>;
  saved: IExercise[];
  setSaved: React.Dispatch<React.SetStateAction<IExercise[]>>;
}



export const ExerciseContext = createContext<IExerciseContext | undefined>(undefined);

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