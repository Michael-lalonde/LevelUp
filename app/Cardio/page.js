import Link from "next/link";
export default function Cardio() {
    return (
      <div>
      <br></br>
        <Link
          href="/Mobility&Cardio"
          className="p-4 rounded-lg m-4 bg-pink-300 w-48"
        >
          Back to Mobility & Cardio Page
        </Link>
        <br></br>
        <br></br>
      <h3 style={{ fontFamily: 'Lucida Console' }}>Mountain Climbers</h3>
      <img src="https://www.verywellfit.com/thmb/gU9IUPsxNOrqK_DhbjqWmOs0f7k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4-MountainClimb-56fac9f65f9b582986736c50.jpg" alt="Photo of woman doing the exercise"></img>
      <Link
          href="https://www.verywellfit.com/thmb/gU9IUPsxNOrqK_DhbjqWmOs0f7k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4-MountainClimb-56fac9f65f9b582986736c50.jpg"
        >
          Image Source
        </Link>
      <h4 style={{ fontFamily: 'Courier New' }}>1. Begin in a push-up position on your hands and toes, back flat, and abs engaged.</h4>
      <h4 style={{ fontFamily: 'Courier New' }}>2. Bring your right knee toward your chest with your opposite foot on the floor.</h4>
      <h4 style={{ fontFamily: 'Courier New' }}>3. Jump up and switch feet in the air, bringing the left foot in and the right foot back.</h4>
      <h4 style={{ fontFamily: 'Courier New' }}>4. Continue alternating the feet for 30 to 60 seconds.</h4>
      <br></br>
        <Link
          href="https://www.verywellfit.com/step-by-step-cardio-exercises-for-home-workouts-1230827"
          className="p-4 rounded-lg m-4 bg-green-300 w-48"
        >
          Source of Exercise
        </Link>
        <br></br>
        <br></br>
        <button className="p-4 rounded-lg m-4 bg-blue-300 w-48">Add Exercise to Your Routine</button>
      </div>
    );
  }

//https://www.verywellfit.com/step-by-step-cardio-exercises-for-home-workouts-1230827
