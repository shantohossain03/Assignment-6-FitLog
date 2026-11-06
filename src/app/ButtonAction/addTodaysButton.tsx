'use client'

import React, { useContext } from 'react'
import { IExercise } from '@/app/type/type';
import { ExerciseContext } from '../context/exerContext';

function AddTodaysButton({ exercise }: { exercise: IExercise }) {

    const { addTodays, setAddTodays } = useContext(ExerciseContext);

    const handleAddTodays = (exercise: IExercise) => {
        if (addTodays.some((item) => item.id === exercise.id)) {
            alert("Already added!");
            return;
        }
        setAddTodays([...addTodays, exercise]);
        alert(`You've added ${exercise.name} to your today's plan!`);

        // console.log(addTodays, "now added");
    }

    return (
        <button className="bg-[#c6ff00] text-black font-bold text-xs px-5 py-3 rounded-lg hover:bg-[#b4eb00] transition"
            onClick={() => { handleAddTodays(exercise) }}>
            ▣ Add to today's plan
        </button>
    )
}

export default AddTodaysButton;