import React from 'react'

export default function Modal() {
  return (
    <div className="relative bg-white rounded-lg shadow px-3 w-72 h-44 border-2 border-sky-400">
        <div className="flex flex-row items-center">
            <div className="p-2 mt-2 w-1/2">
                <h3 className="text-xs first:mb-0.5 font-medium">Título: </h3>
                <h3 className="mb-0.5 text-xs font-normal">Descripción: </h3>
                <h3 className="mb-0.5 text-xs font-normal">Año: </h3>
            </div>
            <div className="p-2 mt-2 w-1/2">
                <img src="" alt="" /> 
                <label className="mb-0.5 text-xs font-normal">Url: </label>
            </div>
        </div>
    </div>
 
  )
}

