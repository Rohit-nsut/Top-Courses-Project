import React from "react";
import Testimonial from "./Testimonial";

function Testimonials(props) {

    let reviews = props.reviews;

    return (
        <div>
            <Testimonial reviews ={reviews} />
        </div>
    );
}

export default Testimonials;