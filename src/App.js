import "./App.css";

import Navbar from "./Components/Navbar"; 
import Filter from "./Components/Filter"; 
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl , filterData } from "./data"; 
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

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

    </div>
  );
};

export default App;
