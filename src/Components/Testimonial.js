import React, { useState } from "react";
import { FaQuoteLeft , FaQuoteRight , FaChevronRight , FaChevronLeft } from "react-icons/fa";


function Testimonial (props) {

    let reviews = props.reviews;

    const [review , setreview] = useState(reviews[0]);

    const [rightClick,setrightClick] = useState(0);

    function rightClickHandler(review) {
        let val = rightClick;
        if(val === 4)
            val = 0;
        else
        val++;

        setrightClick(val);
        setreview(reviews[val]);

    }

    function leftClickHandler() {
        let val = rightClick;
        if(val === 0)
            val = 4;
        else
        val--;
    
        setrightClick(val);
        setreview(reviews[val]);
    }

    function surpriseHandler() {
        let val = Math.floor(5*Math.random());
        setreview(reviews[val]);
    }

    return (
        <div className="w-[20rem] sm:w-[38rem] mx-auto mt-8 bg-white flex justify-center items-center rounded-md hover:shadow-lg transition-all duration-500">
            
            <div className="flex flex-col justify-center items-center relative gap-5 mt-7">

                <div className="absolute left-[-1rem] top-[-5rem] sm:left-0 sm:top-[-4rem] bg-purple-600 rounded-full ">
                  <img src={review.image} className="w-[5.5rem]  h-[5.5rem] sm:w-32 sm:h-32 rounded-full pr-1 sm:pr-2 " alt=""/>
                </div>

                <div>
                    <p className="text-2xl font-bold tracking-widest">{review.name} </p>
                    <p className="text-center uppercase text-sm text-purple-400 pt-1">{review.job} </p>
                </div>

                <div>
                    <FaQuoteLeft className="text-purple-400" />
                </div>

                <div className="text-center text-gray-500 ">
                    <p className="px-2">{review.text} </p>
                </div>

                <div>
                    <FaQuoteRight className="text-purple-400" />
                </div>

                <div className="space-x-8 mt-2 ">
                    <button onClick={leftClickHandler} ><FaChevronLeft fontSize="1.2rem" className="text-purple-400 hover:text-purple-500" /></button>
                    <button onClick={rightClickHandler} ><FaChevronRight fontSize="1.2rem" className="text-purple-400 hover:text-purple-500" /></button>
                </div>

                <div onClick={surpriseHandler} className="bg-purple-400 px-10 py-2 rounded-md mt-[-5px] mb-3 cursor-pointer hover:bg-purple-500">
                    <button  className="text-white font-bold text-lg ">Surprise me</button>
                </div>
                    
                
            </div>

        </div>
    );
}

export default Testimonial;