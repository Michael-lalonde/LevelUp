"use client"
import { useState } from "react";  
import ExerciseCard from "./exercise-card";
import bicepExercises from "./biceps.json";
import Link from "next/link";

export default function BackPage() { 
    const [exercises, setExercises] = useState(bicepExercises);
    const [sortBy, setSortBy] = useState("name");

    const sortByName = () => {
        const sorted = [...exercises].sort((a, b) => a.name.localeCompare(b.name));
        setExercises(sorted);
        setSortBy("name");
    };

    const sortByDifficulty = () => {
        const difficultyOrder = { beginner: 1, intermediate: 2, expert: 3 };
        const sorted = [...exercises].sort((a, b) => 
            difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
        );
        setExercises(sorted);
        setSortBy("difficulty");
    };

    return (
        <div className="min-h-screen bg-gray-900">
       
        <div className="flex justify-center pt-4">
            <Link 
                href="/" 
                className="bg-purple-600 hover:bg-purple-700 text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 w-[15%] text-center"
            >
                LEVEL UP
            </Link>
        </div>

        <div className="bg-gray-600">
            <h1 className="text-2xl font-bold mb-4">Bicep Exercises</h1>
            
            <div className="mb-6">
                <button 
                    className= "bg-orange-400 rounded-lg m-2 p-2"
                    onClick={sortByName}
                >
                    Sort by Name
                </button>
                <button 
                    className="bg-red-400 rounded-lg m-2 p-2"
                    onClick={sortByDifficulty}
                >
                    Sort by Difficulty
                </button>
            </div>
            
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exercises.map((exercise) => (
                    <ExerciseCard 
                        key={exercise.name}
                        name={exercise.name}
                        type={exercise.type}
                        equipment={exercise.equipment}
                        difficulty={exercise.difficulty}
                        image_url={exercise.image_url}
                    />
                ))}
                </div>
            </div>
        </div>
    );
}