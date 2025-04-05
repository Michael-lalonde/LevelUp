import Link from "next/link";
export default function Abs() {
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
        <h3 style={{ fontFamily: 'Lucida Console' }}>Lying Leg Raise</h3>
        <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/lying-leg-raises.gif?resize=600%2C600&ssl=1" alt="Gif of woman doing the exercise"></img>
        <Link
          href="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/lying-leg-raises.gif?resize=600%2C600&ssl=1"
        >
          Image Source
        </Link>
        <h4 style={{ fontFamily: 'Courier New' }}>1. Lie down with your back on the floor, and your arms at your sides.</h4>
        <h4 style={{ fontFamily: 'Courier New' }}>2. With straight legs, lift your legs until they are pointing straight up.</h4>
        <h4 style={{ fontFamily: 'Courier New' }}>3. Lower your legs again, with control.</h4>
        <h4 style={{ fontFamily: 'Courier New' }}>4. Repeat the movement for your desired number of repetitions.</h4>
        <br></br>
        <Link
          href="https://www.strengthlog.com/ab-exercises/"
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
//https://www.strengthlog.com/ab-exercises/
