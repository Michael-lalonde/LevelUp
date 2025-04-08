import Link from "next/link";

export default function MobilityCardio() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <br></br>
      <Link
          href="/Stretching"
          className="p-4 rounded-lg m-4 bg-orange-300 w-48"
        >
          Stretching Exercises
      </Link>
      <Link
          href="/Abs"
          className="p-4 rounded-lg m-4 bg-red-300 w-48"
        >
          Abs Exercises
      </Link>
      <Link
          href="/Cardio"
          className="p-4 rounded-lg m-4 bg-yellow-500 w-48"
        >
          Cardio Exercises
      </Link>
    </div>
  );
}
//https://www.w3schools.com/TAGS/tag_br.asp
