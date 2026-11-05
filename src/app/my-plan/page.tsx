"use client"

import React, { useContext } from 'react'
import { ExerciseContext } from '../context/exerContext';
import { IExercise } from '../type/type';
import Link from 'next/link';

function MyPlanPage() {

    const { addTodays, saved } = useContext(ExerciseContext);
    console.log("TODAY'S PLAN:", addTodays);
    console.log("SAVED:", saved);

    return (
        <div className='container mx-auto my-10 flex flex-col gap-10'>
            {/* Headings */}
            <div>
                <h1 className='font-bold text-3xl'>MY PLAN</h1>
                <p className='text-sm'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            {/* Number box  */}
            <div className='grid grid-cols-3 gap-5 h-25 items-center bg-[#15171d] border border-[#292d37] rounded-xl overflow-hidden p-5 text-center' >
                <div>
                    <h1>Exercises</h1>
                    <h1 className='font-bold text-3xl'> {addTodays.length + saved.length} </h1>
                </div>
                <div>
                    <h1>Minutes</h1>
                    <h1 className='font-bold text-3xl'> {addTodays.reduce((total, exercise) => total + exercise.duration, 0)} </h1>
                </div>
                <div>
                    <h1>Calories</h1>
                    <h1 className='font-bold text-3xl'> {addTodays.reduce((total, exercise) => total + exercise.caloriesBurned, 0)} </h1>
                </div>
            </div>

            {/* Exercise list */}

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box">


                {/* Add today´s Tab */}
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan" />
                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {addTodays.length ?
                        addTodays.map((exercise: IExercise, index: number) => (
                            <div
                                key={`${exercise.id}-${index}`}
                                className="flex items-center justify-between gap-5 p-3 rounded-xl border border-[#292d37] bg-[#15171d]"
                            >

                                {/* Image */}
                                <img
                                    src={exercise.image}
                                    alt={exercise.name}
                                    className="w-28 h-20 object-cover rounded-lg"
                                />

                                {/* Exercise Information */}
                                <div className="flex-1 flex flex-col gap-1">
                                    <h2 className="font-bold uppercase text-sm">
                                        {exercise.name}
                                    </h2>

                                    <p className="text-xs text-gray-400">
                                        {exercise.equipment}
                                    </p>

                                    <div className="flex items-center gap-4 text-xs text-gray-300 mt-1">
                                        <span>◷ {exercise.duration} min</span>
                                        <span>🔥 {exercise.caloriesBurned} kcal</span>
                                        <span>⭐ {exercise.rating}</span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3">
                                    <Link href={`/details-card/${exercise.id}`}>
                                        <button className="btn btn-sm btn-outline rounded-full">
                                            View Details
                                        </button>
                                    </Link>

                                    <button className="btn btn-sm bg-lime-400 text-black border-none rounded-full">
                                        ✓ Mark as Done
                                    </button>

                                    <button className="btn btn-ghost btn-sm text-gray-400">
                                        ✕
                                    </button>
                                </div>

                            </div>
                        ))

                        : <div className='border border-dashed p-20 items-center text-center'>
                            <h1 className='font-bold text-2xl'>NOTHING HERE YET</h1>
                            <p>Browse the library and add a lift to get today moving.</p>
                            <Link href="/"><button className='btn bg-[#aaff2b] text-black font-bold rounded-3xl mt-10'>Go to workouts</button></Link>
                        </div>}
                </div>


                {/* Saved Tab */}
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">

                    {saved.length ? saved.map((exercise: IExercise, index: number) => (
                        <div
                            key={`${exercise.id}-${index}`}
                            className="flex items-center justify-between gap-5 p-3 rounded-xl border border-[#292d37] bg-[#15171d]"
                        >

                            {/* Image */}
                            <img
                                src={exercise.image}
                                alt={exercise.name}
                                className="w-28 h-20 object-cover rounded-lg"
                            />

                            {/* Exercise Information */}
                            <div className="flex-1 flex flex-col gap-1">
                                <h2 className="font-bold uppercase text-sm">
                                    {exercise.name}
                                </h2>

                                <p className="text-xs text-gray-400">
                                    {exercise.equipment}
                                </p>

                                <div className="flex items-center gap-4 text-xs text-gray-300 mt-1">
                                    <span>◷ {exercise.duration} min</span>
                                    <span>🔥 {exercise.caloriesBurned} kcal</span>
                                    <span>⭐ {exercise.rating}</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-3">
                                <Link href={`/details-card/${exercise.id}`}>
                                    <button className="btn btn-sm btn-outline rounded-full">
                                        View Details
                                    </button>
                                </Link>



                                <button className="btn btn-ghost btn-sm text-gray-400">
                                    ✕
                                </button>
                            </div>

                        </div>
                    ))
                        : <div className='border border-dashed p-20 items-center text-center'>
                            <h1 className='font-bold text-2xl'>NOTHING HERE YET</h1>
                            <p>Browse the library and add a lift to get today moving.</p>
                            <Link href="/"><button className='btn bg-[#aaff2b] text-black font-bold rounded-3xl mt-10'>Go to workouts</button></Link>
                        </div>}
                </div>
            </div>

        </div>
    )
}

export default MyPlanPage;