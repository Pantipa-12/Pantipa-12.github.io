import React,{useState} from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Carousel = ({ children: Images }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => 
        setCurr((curr) => (curr === 0 ? Images.length - 1 : curr -1))

    const next = () => 
        setCurr((curr) => (curr === Images.length - 1 ? 0 : curr + 1 ))

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out
      duration-1000" style={{transform: `translateX(-${curr * 100}%)`}}>
        {Images}
      </div>

      <div className="flex justify-between absolute inset-0 p-3 items-center">
        <button  onClick={prev} className="npButton">
            <ChevronLeft />
        </button>
        <button onClick={next} className="npButton">
            <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
