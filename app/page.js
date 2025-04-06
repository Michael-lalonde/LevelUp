import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
     
      <div className="flex flex-col items-center justify-center pt-16 pb-8">
        <h1 className="text-4xl font-bold text-white mb-8">Level Up</h1>
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <Link 
            href="/Push"
            className="flex items-center justify-center p-8 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
          >
            Push
          </Link>
          <Link
            href="/pull"
            className="flex items-center justify-center p-8 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition transform hover:scale-105"
          >
            Pull
          </Link>
          <Link
            href="/legs"
            className="flex items-center justify-center p-8 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition transform hover:scale-105"
          >
            Legs
          </Link>
          <Link
            href="/Mobility&Cardio"
            className="flex items-center justify-center p-8 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition transform hover:scale-105"
          >
            Mobility & Cardio
          </Link>
        </div>
      </div>
    </div>
  );
}