"use client"

import React, { useContext, useState } from 'react'
import { ExerciseContext } from '../context/exerContext';
import { IExercise } from '../type/type';
import Link from 'next/link';
import { toast } from 'react-toastify';

function MyPlanPage() {

    const { addTodays, setAddTodays, saved, setSaved } = useContext(ExerciseContext);
    const [doneExercises, setDoneExercises] = useState<string[]>([]);;
    const [activeTab, setActiveTab] = useState("saved");
    const [sortBy, setSortBy] = useState("Duration");

    const sortedExercises = [...saved].sort((a, b) => {
        if (sortBy === "Duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "Calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        if (sortBy === "Rating") {
            return b.rating - a.rating;
        }
    });


    const sortedTodays = [...addTodays].sort((a, b) => {
        if (sortBy === "Duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "Calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        if (sortBy === "Rating") {
            return b.rating - a.rating;
        }
    });

    // console.log("TODAY'S PLAN:", addTodays);
    // console.log("SAVED:", saved);

    return (
        <div className='container mx-auto my-10 flex flex-col gap-10'>
            {/* Headings */}
            <div>
                <h1 className='font-bold text-3xl'>MY PLAN</h1>
                <p className='text-sm'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>



            {/* Number box....... [ ]  */}

            <div className='grid grid-cols-3 gap-2 sm:gap-5 min-h-25 items-center bg-[#15171d] border border-[#292d37] rounded-xl p-3 sm:p-5 text-center' >
                <div>
                    <h1>Exercises</h1>
                    <h1 className='font-bold text-xl sm:text-3xl'> {activeTab === "today" ? addTodays.length : saved.length} </h1>
                </div>
                <div>
                    <h1>Minutes</h1>
                    <h1 className='font-bold text-xl sm:text-3xl'> {activeTab === "today"
                        ? addTodays.reduce((total, exercise) => total + exercise.duration, 0)
                        : saved.reduce((total, exercise) => total + exercise.duration, 0)} </h1>
                </div>
                <div>
                    <h1>Calories</h1>
                    <h1 className='font-bold text-xl sm:text-3xl'> {activeTab === "today"
                        ? addTodays.reduce((total, exercise) => total + exercise.caloriesBurned, 0)
                        : saved.reduce((total, exercise) => total + exercise.caloriesBurned, 0)} </h1>
                </div>
            </div>





            {/* Sorting */}

            <div className='flex flex-row justify-end items-center gap-3 mt-10 mb-[-20px]'>
                <div className='whitespace-nowrap'>
                    <h1>Sort by</h1>
                </div>

                <select
                    className="select [&::picker(select)]:max-h-26 w-50"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >

                    <option>Duration</option>
                    <option>Calories</option>
                    <option>Rating</option>
                </select>
            </div>



            {/* Exercise list */}

            <div className="tabs tabs-box">


                {/* Add today´s Tab */}

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan" onChange={() => setActiveTab("today")} />
                <div className="tab-content bg-base-100 border-base-300 p-2 sm:p-6">

                    {addTodays.length ?
                        sortedTodays.map((exercise: IExercise, index: number) => (
                            <div
                                key={`${exercise.id}-${index}`}
                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5 p-3 rounded-xl border border-[#292d37] bg-[#15171d]"
                            >

                                {/* Image */}
                                <img
                                    src={exercise.image}
                                    alt={exercise.name}
                                    className="w-full sm:w-28 h-40 sm:h-20 object-cover rounded-lg"
                                />

                                {/* Exercise Information */}
                                <div className="flex-1 flex flex-col gap-1">
                                    <h2 className="font-bold uppercase text-sm">
                                        {exercise.name}
                                    </h2>

                                    <p className="text-xs text-gray-400">
                                        {exercise.equipment}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-gray-300 mt-1">
                                        <span>◷ {exercise.duration} min</span>
                                        <span>🔥 {exercise.caloriesBurned} kcal</span>
                                        <span>⭐ {exercise.rating}</span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                                    <Link href={`/details-card/${exercise.id}`}>
                                        <button className="btn btn-sm btn-outline rounded-full">
                                            View Details
                                        </button>
                                    </Link>

                                    <button className="btn btn-sm bg-lime-400 text-black border-none rounded-full"
                                        disabled={doneExercises.includes(exercise.id)}
                                        onClick={() => {
                                            setDoneExercises([...doneExercises, exercise.id]);

                                            toast.success(`${exercise.name} marked as done!`, {
                                                position: "top-center",
                                                autoClose: 2500,
                                            });
                                        }}

                                    >
                                        ✓ {doneExercises.includes(exercise.id) ? "Completed" : "Mark as Done"}
                                    </button>

                                    <button className="btn btn-ghost btn-sm text-gray-400"
                                        onClick={() => {
                                            setAddTodays(addTodays.filter((_, i) => i !== index));
                                            toast.error(`"${exercise.name}" Removed from your Today's Plan Item!`,
                                                {
                                                    position: "top-center",
                                                    autoClose: 2500,
                                                }
                                            )
                                        }}>
                                        ✕
                                    </button>
                                </div>

                            </div>
                        ))

                        : <div className='border border-dashed p-6 sm:p-20 text-center'>
                            <h1 className='font-bold text-2xl'>NOTHING HERE YET</h1>
                            <p>Browse the library and add a lift to get today moving.</p>
                            <Link href="/"><button className='btn bg-[#aaff2b] text-black font-bold rounded-3xl mt-10'>Go to workouts</button></Link>
                        </div>}
                </div>


                {/* Saved Tab */}
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" defaultChecked
                    onChange={() => setActiveTab("saved")} />
                <div className="tab-content bg-base-100 border-base-300 p-2 sm:p-6">

                    {saved.length ? sortedExercises.map((exercise: IExercise, index: number) => (
                        <div
                            key={`${exercise.id}-${index}`}
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5 p-3 rounded-xl border border-[#292d37] bg-[#15171d]"
                        >

                            {/* Image */}
                            <img
                                src={exercise.image}
                                alt={exercise.name}
                                className="w-full sm:w-28 h-40 sm:h-20 object-cover rounded-lg"
                            />

                            {/* Exercise Information */}
                            <div className="flex-1 flex flex-col gap-1">
                                <h2 className="font-bold uppercase text-sm">
                                    {exercise.name}
                                </h2>

                                <p className="text-xs text-gray-400">
                                    {exercise.equipment}
                                </p>

                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-gray-300 mt-1">
                                    <span>◷ {exercise.duration} min</span>
                                    <span>🔥 {exercise.caloriesBurned} kcal</span>
                                    <span>⭐ {exercise.rating}</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                                <Link href={`/details-card/${exercise.id}`}>
                                    <button className="btn btn-sm btn-outline rounded-full">
                                        View Details
                                    </button>
                                </Link>



                                <button className="btn btn-ghost btn-sm text-gray-400"
                                    onClick={() => {
                                        setSaved(saved.filter((_, i) => i !== index));
                                        toast.error(`"${exercise.name}" Removed from your Saved Item!`,
                                            {
                                                position: "top-center",
                                                autoClose: 2500,
                                            }
                                        )
                                    }}>
                                    ✕
                                </button>
                            </div>

                        </div>
                    ))
                        : <div className='border border-dashed p-6 sm:p-20 text-center'>
                            <h1 className='font-bold text-2xl'>NOTHING HERE YET</h1>
                            <p>Browse the library and add a lift to get today moving.</p>
                            <Link href="/"><button className='btn bg-[#aaff2b] text-black font-bold rounded-3xl mt-10'>Go to workouts</button></Link>
                        </div>}
                </div>

            </div>


        </div >
    )
}

export default MyPlanPage;