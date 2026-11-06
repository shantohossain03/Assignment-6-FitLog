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
  console.log(exercises, "this is our exercise pages result")
  return (
    <div className='container mx-auto my-10'>
      <h1 className='text-2xl font-bold'>THE LIBRARY</h1>
      <p>Twelve lifts covering every major muscle group.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
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