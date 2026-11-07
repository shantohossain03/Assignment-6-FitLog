import { IExercise } from '@/app/type/type';
import React from 'react'
import ExerciseCard from './ExerciseCard';

const GetExercise = async (): Promise<IExercise[]> => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data;
}

const Exercise = async () => {
  const exercises = await GetExercise();

  return (
    <div className='container mx-auto my-5 sm:my-10 px-3 sm:px-4'>
      <h1 className='text-xl sm:text-2xl font-bold'>
        THE LIBRARY
      </h1>

      <p className='text-xs sm:text-base mt-1'>
        Twelve lifts covering every major muscle group.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mt-5 sm:mt-8'>
        {
          exercises.map((exercise, ind) => (
            <ExerciseCard key={ind} exercise={exercise} />
          ))
        }
      </div>
    </div>
  )
}

export default Exercise;