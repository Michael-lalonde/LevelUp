'use client';

import Link from "next/link";
import BackSquat from "./back-squat";
import BulgarianSplitSquat from "./bulgarian-split-squat";
import GluteBridges from "./glute-bridges";
import GobletSquat from "./goblet-squat";
import HipThrust from "./hip-thrust";
import LateralLunges from "./lateral-lunge";
import RomanianDeadlift from "./Romanian-deadlift";
import SingleLegDeadlift from "./single-leg-deadlift";
import StepUp from "./stepup";
import WalkingLunges from "./walking-lunges";

export default function Legs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* Top Navigation Button */}
      <div className="flex justify-center pt-4">
        <Link 
          href="/" 
          className="bg-purple-600 hover:bg-purple-700 text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 w-[15%] text-center"
        >
          LEVEL UP
        </Link>
      </div>

      {/*Heading and Links */}
      <div className="flex flex-col items-center justify-center pt-8">
        <h1 className="text-4xl font-bold mb-8">Leg Exercises</h1>
        
        <div className="flex flex-wrap justify-center gap-4 text-center">
          <a href="#back-squat" className="p-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition w-64">Back Squat</a>
          <a href="#bulgarian-split-squat" className="p-4 rounded-lg bg-green-500 hover:bg-green-600 transition w-64">Bulgarian Split Squat</a>
          <a href="#glute-bridges" className="p-4 rounded-lg bg-red-500 hover:bg-red-600 transition w-64">Glute Bridges</a>
          <a href="#goblet-squat" className="p-4 rounded-lg bg-yellow-500 hover:bg-yellow-600 transition w-64">Goblet Squat</a>
          <a href="#hip-thrust" className="p-4 rounded-lg bg-pink-500 hover:bg-pink-600 transition w-64">Hip Thrust</a>
          <a href="#lateral-lunge" className="p-4 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition w-64">Lateral Lunges</a>
          <a href="#romanian-deadlift" className="p-4 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition w-64">Romanian Deadlift</a>
          <a href="#single-leg-deadlift" className="p-4 rounded-lg bg-orange-500 hover:bg-orange-600 transition w-64">Single Leg Deadlift</a>
          <a href="#stepup" className="p-4 rounded-lg bg-teal-500 hover:bg-teal-600 transition w-64">Step Up</a>
          <a href="#walking-lunges" className="p-4 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-600 transition w-64">Walking Lunges</a>
        </div>
      </div>

      {/* Exercise Components */}
      <div className="px-4 md:px-12 lg:px-32 py-12 space-y-16">
        <div id="back-squat"><BackSquat /></div>
        <div id="bulgarian-split-squat"><BulgarianSplitSquat /></div>
        <div id="glute-bridges"><GluteBridges /></div>
        <div id="goblet-squat"><GobletSquat /></div>
        <div id="hip-thrust"><HipThrust /></div>
        <div id="lateral-lunge"><LateralLunges /></div>
        <div id="romanian-deadlift"><RomanianDeadlift /></div>
        <div id="single-leg-deadlift"><SingleLegDeadlift /></div>
        <div id="stepup"><StepUp /></div>
        <div id="walking-lunges"><WalkingLunges /></div>
      </div>
    </div>
  );
}
