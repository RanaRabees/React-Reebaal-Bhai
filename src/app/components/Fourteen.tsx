// "use client"
// import { useState, useEffect, useRef } from 'react';

// function Welcome() {
//     const ref = useRef(null);

//     useEffect(() => {
//         const duration = 3000;
//         const node = ref.current;

//         let startTime = performance.now();
//         let frameId: any = null;

//         function onFrame(now: any) {
//             const timePassed = now - startTime;
//             const progress = Math.min(timePassed / duration, 1);
//             onProgress(progress);
//             if (progress < 1) {
//                 // We still have more frames to paint
//                 frameId = requestAnimationFrame(onFrame);
//             }
//         }

//         function onProgress(progress: any) {
//             node.style.opacity = progress;
//         }

//         function start() {
//             onProgress(0);
//             startTime = performance.now();
//             frameId = requestAnimationFrame(onFrame);
//         }

//         function stop() {
//             cancelAnimationFrame(frameId);
//             startTime = null;
//             frameId = null;
//         }

//         start();
//         return () => stop();
//     }, []);

//     return (
//         <div className="text-9xl w-full bg-clip-text font-bold text-center">
//             <h1 className='shadow-2xl' ref={ref}>
//                 Welcome
//             </h1>
//         </div>
//     );
// }

// export default function Fourteen() {
//     const [show, setShow] = useState(false);
//     return (
//         <>
//             <div className="text-2xl font-bold text-center">
//                 <button onClick={() => setShow(!show)}>
//                     {show ? 'Remove' : 'Show'}
//                 </button>
//                 <hr />
//                 {show && <Welcome />}
//             </div>
//         </>
//     );
// }
