import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
 
  return (
    <div className='text-center font-semibold text-blue-400 flex flex-col items-center justify-center'>
        <h3 className='font-semibold text-4xl text-center m-5 max-md:text-2xl'>Just Few Days To Minting!</h3>
        <div className='text-8xl text-blue-200 flex flex-row gap-2 relative m-10 max-md:m-0 transform max-md:scale-50'>
            <div className='absolute -top-5 left-7 flex flex-row gap-[75px]'>
                <div className='flex flex-row gap-16'>
                    <div className='h-8 w-4 bg-gradient-to-l from-blue-500 to-blue-900 rounded-full'></div>
                    <div className='h-8 w-4 bg-gradient-to-l from-blue-500 to-blue-900 rounded-full'></div>
                </div>
                <div className='flex flex-row gap-16'>
                    <div className='h-8 w-4 bg-gradient-to-l from-blue-500 to-blue-900 rounded-full'></div>
                    <div className='h-8 w-4 bg-gradient-to-l from-blue-500 to-blue-900 rounded-full'></div>
                </div>
                <div className='flex flex-row gap-16'>
                    <div className='h-8 w-4 bg-gradient-to-l from-blue-500 to-blue-900 rounded-full'></div>
                    <div className='h-8 w-4 bg-gradient-to-l from-blue-500 to-blue-900 rounded-full'></div>
                </div>
                <div className='flex flex-row gap-16'>
                    <div className='h-8 w-4 bg-gradient-to-l from-blue-500 to-blue-900 rounded-full'></div>
                    <div className='h-8 w-4 bg-gradient-to-l from-blue-500 to-blue-900 rounded-full'></div>
                </div>
            </div>
            <div className='w-40 text-center bg-gradient-to-br from-slate-900 to-blue-900 pt-8 rounded-lg'>{days.toLocaleString('en-US', { minimumIntegerDigits: 2 })} <div className='bg-gradient-to-l from-blue-300 to-blue-500 h-10 mt-5 rounded-b-lg text-2xl font-bold flex items-center justify-center text-blue-900'>DAYS</div></div>
            <div className='w-40 text-center bg-gradient-to-br from-slate-900 to-blue-900 pt-8 rounded-lg'>{hours.toLocaleString('en-US', { minimumIntegerDigits: 2 })} <div className='bg-gradient-to-l from-blue-300 to-blue-500 h-10 mt-5 rounded-b-lg text-2xl font-bold flex items-center justify-center text-blue-900'>HOURS</div></div>
            <div className='w-40 text-center bg-gradient-to-br from-slate-900 to-blue-900 pt-8 rounded-lg'>{minutes.toLocaleString('en-US', { minimumIntegerDigits: 2 })} <div className='bg-gradient-to-l from-blue-300 to-blue-500 h-10 mt-5 rounded-b-lg text-2xl font-bold flex items-center justify-center text-blue-900'>MINUTES</div></div>
            <div className='w-40 text-center bg-gradient-to-br from-slate-900 to-blue-900 pt-8 rounded-lg'>{seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 })} <div className='bg-gradient-to-l from-blue-300 to-blue-500 h-10 mt-5 rounded-b-lg text-2xl font-bold flex items-center justify-center text-blue-900'>SECONDS</div></div>
        </div>
      <div className='font-semibold text-2xl text-slate-200 text-center m-5'>Minting Starts on <br /> <div className='text-4xl p-2 bg-blue-400/20 rounded-lg text-blue-400'> 20 / 05 / 2023 </div></div>
    </div>
  );
}

export default function MintingTimer() {
  const expiryDate = new Date('2023-05-20');
  const currentTime = new Date();

  // Calculate the time remaining from the current time to the expiry date
  const timeRemaining = expiryDate.getTime() - currentTime.getTime();

  // Set the expiry timestamp by adding the time remaining to the current time
  const expiryTimestamp = new Date(currentTime.getTime() + timeRemaining);

  return (
    <div className='h-[100vh] w-full flex items-center justify-center bg-gradient-to-b from-black to-slate-800'>
      <MyTimer expiryTimestamp={expiryTimestamp} />
    </div>
  );
}
