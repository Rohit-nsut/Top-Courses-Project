import React from "react";

function Filter(props) {

    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    const ClickHandler = (title) => {
         setCategory(title);
    }

    return (
        <div className="flex flex-wrap justify-center items-center gap-4 my-4">
            {
                filterData.map( (data) => (
                    <button key={data.id} className={`text-white text-2xl font-semibold bg-black px-2 py-1 rounded-md hover:bg-opacity-50 border-2 transition-all duration-300 ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`}  onClick={() => ClickHandler(data.title)} >{data.title}</button>
                ))
            }
        </div>
    );
};

export default Filter;