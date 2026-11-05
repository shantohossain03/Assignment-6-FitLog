import React from 'react'

function MyPlanPage() {
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
                    <h1 className='font-bold text-3xl'> { } </h1>
                </div>
                <div>
                    <h1>Minutes</h1>
                    <h1 className='font-bold text-3xl'> { } </h1>
                </div>
                <div>
                    <h1>Calories</h1>
                    <h1 className='font-bold text-3xl'> { } </h1>
                </div>
            </div>

            {/* Exercise list */}

            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan" />
                <div className="tab-content bg-base-100 border-base-300 p-6">  </div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">  </div>
            </div>
        </div>
    )
}

export default MyPlanPage;