import Link from "next/link";

export default function Pull() {
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

      
      <div className="flex flex-col items-center justify-center text-white pt-8">
        <h1 className="text-4xl font-bold mb-8">Pull Exercises</h1>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/Pull/Back" 
            className="p-4 rounded-lg bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition w-64 text-center"
          >
            Back Exercises
          </Link>

          <Link 
            href="/Pull/Biceps" 
            className="p-4 rounded-lg bg-green-500 text-white shadow-lg hover:bg-green-600 transition w-64 text-center"
          >
            Bicep Exercises
          </Link>
          
          <Link 
            href="/Pull/Lats" 
            className="p-4 rounded-lg bg-red-500 text-white shadow-lg hover:bg-red-600 transition w-64 text-center"
          >
            Lat Exercises  
          </Link>
        </div>
      </div>
    </div>
  );
}