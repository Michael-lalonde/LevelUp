import Link from "next/link";

export default function Push() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* LEVEL UP Button - Centered at top */}
      <div className="flex justify-center pt-4">
        <Link 
          href="/" 
          className="bg-purple-600 hover:bg-purple-700 text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 w-[15%] text-center"
        >
          LEVEL UP
        </Link>
      </div>

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center text-white pt-8">
        <h1 className="text-4xl font-bold mb-8">Push Exercises</h1>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/Push/Chest" 
            className="p-4 rounded-lg bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition w-64 text-center"
          >
            Chest Exercises
          </Link>

          <Link 
            href="/Push/Shoulders" 
            className="p-4 rounded-lg bg-green-500 text-white shadow-lg hover:bg-green-600 transition w-64 text-center"
          >
            Shoulder Exercises
          </Link>
          
          <Link 
            href="/Push/Triceps" 
            className="p-4 rounded-lg bg-red-500 text-white shadow-lg hover:bg-red-600 transition w-64 text-center"
          >
            Tricep Exercises  
          </Link>
        </div>
      </div>
    </div>
  );
}