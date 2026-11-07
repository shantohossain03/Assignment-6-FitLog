
"use client"

import React, { useContext, useState } from 'react'
import { ExerciseContext } from '@/app/context/ExerContext';
import { IExercise } from '../type/type';
import Link from 'next/link';
import { toast } from 'react-toastify';

function MyPlanPage() {

    const exerciseContext = useContext(ExerciseContext);

    if (!exerciseContext) {
        throw new Error("MyPlanPage must be inside ExerProvider");
    }

    const { addTodays, setAddTodays, saved, setSaved } = exerciseContext;

    const [doneExercises, setDoneExercises] = useState<(string | number)[]>([]);
    const [activeTab, setActiveTab] = useState("saved");
    const [sortBy, setSortBy] = useState("Duration");

    const sortedExercises = [...saved].sort((a, b) => {
        if (sortBy === "Duration") return a.duration - b.duration;
        if (sortBy === "Calories") return a.caloriesBurned - b.caloriesBurned;
        if (sortBy === "Rating") return b.rating - a.rating;
        return 0;
    });

    const sortedTodays = [...addTodays].sort((a, b) => {
        if (sortBy === "Duration") return a.duration - b.duration;
        if (sortBy === "Calories") return a.caloriesBurned - b.caloriesBurned;
        if (sortBy === "Rating") return b.rating - a.rating;
        return 0;
    });

    return (
        <div className='container mx-auto my-5 sm:my-10 px-3 sm:px-4 flex flex-col gap-5 sm:gap-10'>

            {/* Headings */}
            <div>
                <h1 className='font-bold text-2xl sm:text-3xl'>MY PLAN</h1>
                <p className='text-xs sm:text-sm mt-1'>
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Number box */}
            <div className='grid grid-cols-3 gap-2 sm:gap-5 min-h-20 sm:min-h-25 items-center bg-[#15171d] border border-[#292d37] rounded-xl p-2 sm:p-5 text-center'>
                <div>
                    <h1 className='text-[11px] sm:text-base'>Exercises</h1>
                    <h1 className='font-bold text-xl sm:text-3xl'>
                        {activeTab === "today" ? addTodays.length : saved.length}
                    </h1>
                </div>

                <div>
                    <h1 className='text-[11px] sm:text-base'>Minutes</h1>
                    <h1 className='font-bold text-xl sm:text-3xl'>
                        {activeTab === "today"
                            ? addTodays.reduce((total, exercise) => total + exercise.duration, 0)
                            : saved.reduce((total, exercise) => total + exercise.duration, 0)}
                    </h1>
                </div>

                <div>
                    <h1 className='text-[11px] sm:text-base'>Calories</h1>
                    <h1 className='font-bold text-xl sm:text-3xl'>
                        {activeTab === "today"
                            ? addTodays.reduce((total, exercise) => total + exercise.caloriesBurned, 0)
                            : saved.reduce((total, exercise) => total + exercise.caloriesBurned, 0)}
                    </h1>
                </div>
            </div>

            {/* Sorting */}
            <div className='flex flex-row justify-end items-center gap-2 sm:gap-3 mt-2 sm:mt-10 mb-[-10px] sm:mb-[-20px]'>
                <div className='whitespace-nowrap'>
                    <h1 className='text-xs sm:text-base'>Sort by</h1>
                </div>

                <select
                    className="select select-sm sm:select-md [&::picker(select)]:max-h-26 w-32 sm:w-50 text-xs sm:text-base"
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

                {/* Today's Plan Tab */}
                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab text-xs sm:text-base"
                    aria-label="Today's Plan"
                    onChange={() => setActiveTab("today")}
                />

                <div className="tab-content bg-base-100 border-base-300 p-2 sm:p-6">

                    {addTodays.length ?
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {sortedTodays.map((exercise: IExercise, index: number) => (
                                <div
                                    key={`${exercise.id}-${index}`}
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5 p-2.5 sm:p-3 rounded-xl border border-[#292d37] bg-[#15171d]"
                                >

                                    {/* Image */}
                                    <img
                                        src={exercise.image}
                                        alt={exercise.name}
                                        className="w-full sm:w-28 h-32 sm:h-20 object-cover rounded-lg"
                                    />

                                    {/* Exercise Information */}
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h2 className="font-bold uppercase text-xs sm:text-sm">
                                            {exercise.name}
                                        </h2>

                                        <p className="text-[10px] sm:text-xs text-gray-400">
                                            {exercise.equipment}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-gray-300 mt-1">
                                            <span>◷ {exercise.duration} min</span>
                                            <span>🔥 {exercise.caloriesBurned} kcal</span>
                                            <span>⭐ {exercise.rating}</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 w-full sm:w-auto">
                                        <Link href={`/details-card/${exercise.id}`}>
                                            <button className="btn btn-xs sm:btn-sm btn-outline rounded-full">
                                                View Details
                                            </button>
                                        </Link>

                                        <button
                                            className="btn btn-xs sm:btn-sm bg-lime-400 text-black border-none rounded-full"
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

                                        <button
                                            className="btn btn-ghost btn-xs sm:btn-sm text-gray-400"
                                            onClick={() => {
                                                setAddTodays(addTodays.filter((item) => item.id !== exercise.id));
                                                toast.error(`"${exercise.name}" Removed from your Today's Plan Item!`, {
                                                    position: "top-center",
                                                    autoClose: 2500,
                                                });
                                            }}
                                        >
                                            ✕
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>

                        : <div className='border border-dashed p-5 sm:p-20 text-center'>
                            <h1 className='font-bold text-xl sm:text-2xl'>NOTHING HERE YET</h1>
                            <p className='text-xs sm:text-base mt-1'>Browse the library and add a lift to get today moving.</p>
                            <Link href="/">
                                <button className='btn btn-sm sm:btn-md bg-[#aaff2b] text-black font-bold rounded-3xl mt-5 sm:mt-10'>
                                    Go to workouts
                                </button>
                            </Link>
                        </div>}
                </div>

                {/* Saved Tab */}
                <input
                    type="radio"
                    name="my_tabs_6"
                    className="tab text-xs sm:text-base"
                    aria-label="Saved"
                    defaultChecked
                    onChange={() => setActiveTab("saved")}
                />

                <div className="tab-content bg-base-100 border-base-300 p-2 sm:p-6">

                    {saved.length ?
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {sortedExercises.map((exercise: IExercise, index: number) => (
                                <div
                                    key={`${exercise.id}-${index}`}
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5 p-2.5 sm:p-3 rounded-xl border border-[#292d37] bg-[#15171d]"
                                >

                                    {/* Image */}
                                    <img
                                        src={exercise.image}
                                        alt={exercise.name}
                                        className="w-full sm:w-28 h-32 sm:h-20 object-cover rounded-lg"
                                    />

                                    {/* Exercise Information */}
                                    <div className="flex-1 flex flex-col gap-1">
                                        <h2 className="font-bold uppercase text-xs sm:text-sm">
                                            {exercise.name}
                                        </h2>

                                        <p className="text-[10px] sm:text-xs text-gray-400">
                                            {exercise.equipment}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-gray-300 mt-1">
                                            <span>◷ {exercise.duration} min</span>
                                            <span>🔥 {exercise.caloriesBurned} kcal</span>
                                            <span>⭐ {exercise.rating}</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 w-full sm:w-auto">
                                        <Link href={`/details-card/${exercise.id}`}>
                                            <button className="btn btn-xs sm:btn-sm btn-outline rounded-full">
                                                View Details
                                            </button>
                                        </Link>

                                        <button
                                            className="btn btn-ghost btn-xs sm:btn-sm text-gray-400"
                                            onClick={() => {
                                                setSaved(saved.filter((item) => item.id !== exercise.id));
                                                toast.error(`"${exercise.name}" Removed from your Saved Item!`, {
                                                    position: "top-center",
                                                    autoClose: 2500,
                                                });
                                            }}
                                        >
                                            ✕
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>

                        : <div className='border border-dashed p-5 sm:p-20 text-center'>
                            <h1 className='font-bold text-xl sm:text-2xl'>NOTHING HERE YET</h1>
                            <p className='text-xs sm:text-base mt-1'>Browse the library and add a lift to get today moving.</p>
                            <Link href="/">
                                <button className='btn btn-sm sm:btn-md bg-[#aaff2b] text-black font-bold rounded-3xl mt-5 sm:mt-10'>
                                    Go to workouts
                                </button>
                            </Link>
                        </div>}
                </div>

            </div>
        </div>
    )
}

export default MyPlanPage;
