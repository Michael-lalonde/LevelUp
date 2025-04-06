import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="grid grid-cols-4 gap-8">
        <Link href="/Push"
          className="flex items-center justify-center p-8 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Push
        </Link>
        <Link
          href="/pull"
          className="flex items-center justify-center p-8 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition"
        >
          Pull
        </Link>
        <Link
          href="/legs"
          className="flex items-center justify-center p-8 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition"
        >
          Legs
        </Link>
        <Link
          href="/Mobility&Cardio"
          className="flex items-center justify-center p-8 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition"
        >
          Mobility & Cardio
        </Link>
      </div>
    </div>
  );
}