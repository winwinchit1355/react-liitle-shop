import React from 'react'

const AdItem = ({ side, title, info, icon }) => {
    return (
        <div className="flex items-center justify-center gap-4 w-full">
            {side === 'right' ? (
                <>
                    {icon}
                    <div className="w-1/2">
                        <h4 className="text-xl font-bold">{title}</h4>
                        <p className='line-clamp-2'>{info}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="w-1/2">
                        <h4 className="text-xl font-bold text-right">{title}</h4>
                        <p className='text-right line-clamp-2'>{info}</p>
                    </div>
                    {icon}
                </>
            )}
        </div>
    )
}

export default AdItem