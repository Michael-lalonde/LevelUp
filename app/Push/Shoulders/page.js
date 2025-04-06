import Link from "next/link";

export default function ShouldersPage() {
    return (
        <div className="flex justify-center pt-4">
            <Link 
                href="/" 
                className="bg-purple-600 hover:bg-purple-700 text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-lg w-[15%] text-center"
            >
                LEVEL UP
            </Link>
        </div>
    )
}
