import React from 'react'

const GetExercise = async (): Promise<IExercise[]> => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data;
}


const DetailsById = async ({ params }: { params: Promise<{ Id: string }> }) => {
  const { Id } = await params;
  const exercises = await GetExercise();

  const exercise = exercises.find((exercise) => exercise.id === Number(Id));

  console.log(exercises, "you tried this");
  return (
    <div className='p-20'>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

        {/* Left Side - Image */}
        <div className="w-full">
          <img
            src={exercise.image}
            alt={exercise.name}
            className="w-full h-[350px] lg:h-[550px] object-cover rounded-2xl"
          />
        </div>

        {/* Right Side - Details */}
        <div className="flex flex-col gap-5">

          {/* Title & Description */}
          <div>
            <h1 className="text-white text-3xl font-extrabold uppercase">
              {exercise.name}
            </h1>

            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              {exercise.description}
            </p>
          </div>

          {/* Muscle Groups */}
          <div className="flex gap-2 flex-wrap">
            {exercise.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="bg-[#c6ff00] text-black text-xs font-bold uppercase px-3 py-1 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="bg-[#15171d] border border-[#292d37] rounded-xl overflow-hidden">
            {[
              { label: 'EQUIPMENT', value: exercise.equipment },
              { label: 'DIFFICULTY', value: exercise.difficulty },
              { label: 'SETS', value: exercise.sets },
              { label: 'REPS', value: exercise.reps },
              { label: 'DURATION', value: `${exercise.duration} min` },
              { label: 'CALORIES', value: `${exercise.caloriesBurned} kcal` },
              { label: 'RATING', value: exercise.rating },
            ].map((spec, index) => (
              <div
                key={spec.label}
                className={`flex justify-between items-center px-4 py-4 text-sm ${index !== 6 ? 'border-b border-[#292d37]' : ''
                  }`}
              >
                <span className="text-gray-400 text-xs font-semibold">
                  {spec.label}
                </span>

                <span className="text-white">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-white font-bold text-sm mb-4">
              INSTRUCTIONS
            </h2>

            <ol className="space-y-3">
              {exercise.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-400 text-sm leading-relaxed"
                >
                  <span>{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-2">
            <button className="bg-[#c6ff00] text-black font-bold text-xs px-5 py-3 rounded-lg hover:bg-[#b4eb00] transition">
              ▣ Add to today's plan
            </button>

            <button className="border border-[#292d37] text-white font-medium text-xs px-5 py-3 rounded-lg hover:border-[#c6ff00] transition">
              ♧ Save for later
            </button>
          </div>

        </div>
      </div>

    </div>

  )
}

export default DetailsById;
