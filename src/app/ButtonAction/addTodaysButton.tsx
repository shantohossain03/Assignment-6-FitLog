'use client'

import React from 'react'
import { IExercise } from '@/app/type/type';
import { useExerciseContext } from '@/app/context/ExerContext';
import { toast } from 'react-toastify';

function AddTodaysButton({ exercise }: { exercise: IExercise }) {

    const { addTodays, setAddTodays } = useExerciseContext();

    const handleAddTodays = (exercise: IExercise) => {
        if (addTodays.some((item) => item.id === exercise.id)) {
            toast.warn("Already added!", { autoClose: 1500, position: "bottom-center" });
            return;
        }

        setAddTodays([...addTodays, exercise]);
        toast.success(`Added "${exercise.name}" to your Today's Plan!`, {
            autoClose: 2500,
            position: "top-center"
        });
    }

    return (
        <button
            className="bg-[#c6ff00] text-black font-bold text-[10px] sm:text-xs px-3 sm:px-5 py-2 sm:py-3 rounded-lg hover:bg-[#b4eb00] transition"
            onClick={() => handleAddTodays(exercise)}
        >
            ▣ Add to today's plan
        </button>
    )
}

export default AddTodaysButton;