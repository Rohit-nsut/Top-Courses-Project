import React from "react";
import {FcLikePlaceholder , FcLike} from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
    let course = props.course;

    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {

        if(likedCourses.includes(course.id)){
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed");
        }

        else{
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev) => [...prev ,course.id]);
            }
            toast.success("Likes Successfully");
        }
    }

    return (
        <div className="flex flex-col w-[300px] bg-[#22223b] rounded overflow-hidden ">
            <div className="relative">
                <img src={course.image.url} className="rounded" alt="Not Fetched" />

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 top-36  flex justify-center items-center ">
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ?
                        <FcLike fontSize="1.6rem" /> :
                        <FcLikePlaceholder fontSize="1.4rem" />
                    }
                </button>
                </div>
            </div>

            <div>
                <h2 className="text-white text-lg pt-3 px-2 font-semibold">{course.title}</h2>
                <p className="text-white mt-2 px-2 pb-4">
                    {
                        course.description.length > 150 ?
                        (course.description.substr(0,150) + "...") :
                        (course.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;