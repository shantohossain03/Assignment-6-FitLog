import { IExercise } from '@/app/type/type';
import Link from 'next/link';
import React from 'react'

function ExerciseCard({ exercise }: { exercise: IExercise }) {
  return (
    <Link href={`/details-card/${exercise.id}`}>
      <div className="hover:border-yellow-300 card bg-[#15171d] border border-[#292d37] rounded-2xl overflow-hidden w-full min-h-[420px] shadow-xl transition-all duration-300 ease-in-out
      hover:scale-102">

        {/* Image */}
        <figure className="w-full h-48 overflow-hidden">
          <img
            src={exercise.image}
            alt={exercise.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center calc(50% + 80px)" }}
          />
        </figure>

        {/* Content */}
        <div className="card-body p-5 gap-3">

          {/* Muscle Groups */}
          <div className="flex gap-2 flex-wrap">
            {exercise.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="bg-[#c6ff00] text-black text-[10px] font-bold uppercase px-3 py-1 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Exercise Name */}
          <div>
            <h2 className="text-white text-lg font-extrabold uppercase">
              {exercise.name}
            </h2>

            <p className="text-gray-400 text-xs mt-1">
              {exercise.equipment}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-[#292d37]"></div>

          {/* Exercise Details */}
          <div className="flex items-center justify-between text-gray-400 text-xs">
            <span>◷ {exercise.duration} min</span>
            <span>● {exercise.caloriesBurned} kcal</span>
            <span>☆ {exercise.rating}</span>
          </div>

        </div>
      </div>
    </Link>
  )
}

export default ExerciseCard;