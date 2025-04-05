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
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Exercises For Leg Day 🦵
    </h1>
    <BackSquat/>
    <BulgarianSplitSquat/>
    <GluteBridges/>
    <GobletSquat/>
    <HipThrust/>
    <LateralLunges/>
    <RomanianDeadlift/>
    <SingleLegDeadlift/>
    <StepUp/>
    <WalkingLunges/>
    </div>
  );
}