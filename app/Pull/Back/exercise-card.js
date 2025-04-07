"use client"
import { useState } from "react";
export default function ExerciseCard({ name, type, equipment, difficulty, instructions }) {
    const [expanded, setExpanded] = useState(false)

    const getDifficultyColor = () => {
        switch (difficulty) {
            case 'beginner': return 'bg-green-100 text-green-800'
            case 'intermediate': return 'bg-yellow-100 text-yellow-800'
            case 'expert': return 'bg-red-100 text-red-800'
            default: return 
        }
    }

    return (
        <div 
            className="border-2 border-gray-300 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer text-black"
            onClick={() => setExpanded(!expanded)}
        >
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            
            <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-300 text-blue-800 px-2 py-1 rounded text-sm">
                    {type}
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                    {equipment}
                </span>
                <span className={`${getDifficultyColor()} px-2 py-1 rounded text-sm`}>
                    {difficulty}
                </span>
            </div>

            {expanded && (
                <div className="mt-3">
                    <h3 className="font-semibold text-black mb-1">Instructions:</h3>
                    <p className="text-black">{instructions}</p>
                </div>
            )}
        </div>
    )
}