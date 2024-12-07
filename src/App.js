import "./App.css";

import Navbar from "./Components/Navbar"; 
import Filter from "./Components/Filter"; 
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl , filterData } from "./data"; 
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import Testimonials from "./Components/Testimonials";
import reviews from "./data1";

function App() {

  const [courses , setCourses] = useState(null);

  const [loading , setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCourses(output.data);
    }
    catch(error) {
      toast.error("Network ma erroe ha..");  
    }

    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#4a4e69] min-h-screen overflow-hidden">

      <div>
        <Navbar/>
      </div>

      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap items-center min-h-[50vh] mb-16">
        {/* <Cards/> */}

        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />)
        }
      </div>

      <div className="w-[100vw] h-[100vh] bg-blue-200 flex justify-center items-center" >

      <div className="flex flex-col justify-center items-center">

        <h1 className="text-2xl sm:text-4xl font-bold ">Our Testimonials</h1>
        <div className="w-28 h-1 mt-1 bg-blue-400"></div>
        <Testimonials reviews={reviews} />

      </div>


    </div>

    </div>
  );
};

export default App;
