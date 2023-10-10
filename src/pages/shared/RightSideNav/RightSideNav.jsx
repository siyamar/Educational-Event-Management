import { useEffect, useState } from "react";
import { FaGithub, FaGoogle, FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const RightSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/public/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      <div className='space-y-6'>
            <h2 className='text-2xl font-bold ml-7'>All Categories</h2>
            {
                categories.map(category=><NavLink 
                className='block ml-4 text-lg font-semibold px-4' 
                to={`/eventDetails/${category.id}`}
                key={category.id}>{category.name}</NavLink>)
            }
        </div>
    </div>
  );
};

export default RightSideNav;
