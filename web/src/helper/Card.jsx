import { motion } from "framer-motion";
import { useEffect, useState } from "react";

let interval;

const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-full md:h-60 max-600:w-full">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-white h-60 w-full md:h-60 max-600:w-full rounded-3xl p-4 flex flex-col justify-between shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
            zIndex: cards.length - index, // decrease z-index for the cards that are behind
          }}
        >
          <div className="font-normal ">{card.content}</div>
          <div>
            <p className=" font-medium ">{card.name}</p>
            <p className="font-normal">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardStack;
