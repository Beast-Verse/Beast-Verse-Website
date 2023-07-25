import React, { useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

const Faq = () => {
  const faqData = [
    {
      question: "What is Beast Verse?",
      answer:
        "A free-to-play NFT Game built on the Polygon Blockchain delivering a PvP Multiplayer gaming experience. It's all about skills and strategy!",
    },
    {
      question: "Is the Game Live?",
      answer:
        "Our main game ie Beast Verse is not live and we plan on releasing the first test version by December 2023.",
    },
    {
      question: "What happens till then?",
      answer:
        "Though the main game is far, that doesn't mean we are stagnant now! We continue to bring new and exciting products for the Community to be able to gain something back from their investments.",
    },
    {
      question: "What are the Eggs?",
      answer:
        "The Eggs are your early access pass to the Beast Verse! Though the game will be free to play, it will be available only to our holders for the first 6 months of release obviously to give a upperhand to our holders in terms of profile building and progress.",
    },
    {
      question: "What if I don't mint the Eggs?",
      answer:
        "No issues! You would still be able to enjoy the game when it goes live for all people.",
    },
    {
      question: "What are Beast Verse Runes?",
      answer:
      "These are powerful in-game items you can use to power up your Beasts in the game. For now they are just like a bunch of beautiful gems in your collection."
    }
  ];

  const [openQuestion, setOpenQuestion] = useState(null);

  const handleButtonClick = (index) => {
    setOpenQuestion((prevOpenQuestion) => (prevOpenQuestion === index ? null : index));
  };

  return (
    <>
      <div className='flex flex-col bg-slate-900'>
        <h2 className='text-[12vw] md:text-6xl font-bold font-Montserrat text-blue-500 pt-20 text-center mb-10'>
          FAQ
        </h2>
        <div className='flex flex-col justify-center items-center mb-10'>
          {faqData.map((item, index) => (
            <div className='border-b-2 border-gray-600  flex flex-col gap-5 w-[65%] mx-auto' key={index}>
              <div className='flex justify-between items-center p-4' onClick={() => handleButtonClick(index)}>
                <p className='font-bold text-gray-200 text-[4vw] md:text-xl'>{item.question}</p>
                {openQuestion === index ? <BiSolidUpArrow size={10} className='text-gray-100' /> : <BiSolidDownArrow size={10} className='text-gray-100'/>}
              </div>
              {openQuestion === index && <p className='mb-5 font-semibold text-gray-300 text-[3vw] md:text-lg'>{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;