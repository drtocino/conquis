import React from 'react';

function Dashboard() {
    return (
        <div className=''>
            <h1 className='text-2xl'>Dashboard</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-2'>
                <div className='bg-slate-100 dark:bg-slate-800 rounded p-2'>
                    a
                </div>
                <div className='bg-slate-100 dark:bg-slate-800 rounded p-2'>
                    b
                </div>
                <div className='bg-slate-100 dark:bg-slate-800 rounded p-2'>
                    c
                </div>
            </div>
        </div>
    )
}

export default Dashboard;