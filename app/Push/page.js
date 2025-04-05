import Link from "next/link";

export default function Push() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Push Exercises</h1>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/Push/Chest" className="p-4 rounded-lg bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition w-64 text-center">
          Chest Exercises
        </Link>
      </div>
    </div>
  );
}