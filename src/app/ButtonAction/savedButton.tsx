'use client'

import React, { useContext } from 'react'
import { IExercise } from '@/app/type/type';
import { ExerciseContext } from '@/app/context/ExerContext';
import { toast } from 'react-toastify';

function SavedButton({ exercise }: { exercise: IExercise }) {

    const { saved, setSaved } = useContext(ExerciseContext);

    const handleSaved = (exercise: IExercise) => {
        if (saved.some((item) => item.id === exercise.id)) {
            toast.warn("Already saved!", {autoClose: 1500, position: "bottom-center"});
            return;
        }
        setSaved([...saved, exercise]);
        toast.success(`Added "${exercise.name}" to your Saved Plan!`, { autoClose: 2500, position: "top-center"});

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