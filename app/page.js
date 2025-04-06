import Link from "next/link";

export default function HomePage() {
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

      {/* Workout Grid */}
      <div className="grid grid-cols-4 h-[calc(100vh-80px)]"> {/* Adjusted height to account for button */}
        {/* Push - Far Left */}
        <Link 
          href="/Push"
          className="relative group overflow-hidden transition-all hover:opacity-90"
        >
          <img 
            src="https://onnitacademy.imgix.net/wp-content/uploads/2020/06/sizzlchestBIG-1333x1000.jpg" 
            alt="Chest exercise"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-500 bg-opacity-40 flex items-center justify-center">
            <span className="text-white text-4xl font-bold tracking-wider drop-shadow-lg">Push</span>
          </div>
        </Link>

        {/* Pull - Middle Left */}
        <Link
          href="/pull"
          className="relative group overflow-hidden transition-all hover:opacity-90"
        >  
          <img
            src="https://www.challengerstrength.com/uploads/8/8/8/0/88808850/published/upper-back.jpeg?1489707955"
            alt="Pull exercise"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-500 bg-opacity-40 flex items-center justify-center">
            <span className="text-white text-4xl font-bold tracking-wider drop-shadow-lg">Pull</span>
          </div>
        </Link>

        {/* Legs - Middle Right */}
        <Link
          href="/legs"
          className="relative group overflow-hidden transition-all hover:opacity-90"
        >
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/determined-female-athlete-stretching-her-leg-during-royalty-free-image-1732643759.jpg?crop=0.668xw:1.00xh;0.207xw,0&resize=1200:*"
            alt="Legs exercise"
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-red-500 bg-opacity-40 flex items-center justify-center">
            <span className="text-white text-4xl font-bold tracking-wider drop-shadow-lg">Legs</span>
          </div>
        </Link>

        {/* Mobility & Cardio - Far Right */}
        <Link
          href="/Mobility&Cardio"
          className="relative group overflow-hidden transition-all hover:opacity-90"
        >
          <img
            src="https://www.setforset.com/cdn/shop/articles/cardio_workout_at_the_gym_2000x.jpg?v=1708999197"
            alt="Mobility & Cardio exercise"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-yellow-500 bg-opacity-40 flex items-center justify-center">
            <span className="text-white text-4xl font-bold tracking-wider drop-shadow-lg">Mobility & Cardio</span>
          </div>
        </Link>
      </div>
    </div>
  );
}