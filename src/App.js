

// function App() {
//   const calculateTimeLeft = () => {
//     let year = new Date().getFullYear();
//     const difference = +new Date(`${year}-10-1`) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
//   const [year] = useState(new Date().getFullYear());

//   useEffect(() => {
//     setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//   });

//   const timerComponents = [];

//   Object.keys(timeLeft).forEach((interval) => {
//     if (!timeLeft[interval]) {
//       return;
//     }

//     timerComponents.push(
//       <span className='font-bold flex flex-row text-2xl justify-center'>
//         {timeLeft[interval]} {interval}{" "}
//       </span>
//     );
//   });
//  
//       <h1>HacktoberFest {year} Countdown</h1>
//       <h2>With React Hooks!</h2>
//       {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
//       <Timer />
//     </div>
//   );
// }

// 

 import React, { useEffect, useState } from "react";
//  import Timer from "./component/timer"; 
import Homepage from "./homepage";
 function App() {
  return (
    <div>
      <Homepage />
    </div>

  )}



export default App;


