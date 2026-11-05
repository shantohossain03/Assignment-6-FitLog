'use client'

import React, { useContext } from 'react'
import { IExercise } from '@/app/type/type';
import { ExerciseContext } from '../context/exerContext';

function SavedButton({ exercise }: { exercise: IExercise }) {

    const { saved, setSaved } = useContext(ExerciseContext);

    const handleSaved = (exercise: IExercise) => {
        setSaved([...saved, exercise]);
        alert(`You've saved ${exercise.name} to your today's plan!`);

        // console.log(saved, "now saved");
    }

    return (
        <button className="border border-[#292d37] text-white font-medium text-xs px-5 py-3 rounded-lg hover:border-[#c6ff00] transition"
            onClick={() => { handleSaved(exercise) }}>
            ♧ Save for later
        </button>
    )
}

export default SavedButton;