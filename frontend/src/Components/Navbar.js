import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { BsHandbagFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { debounce } from 'lodash'

const Navbar = () => {
  const [data, setData] = useState({ user_name: "Rahul" });
  const [navbarData, setNavbarData] = useState({
    office: {
      Top: '/top',
      Tunic: '/tunic',
      Skirt: '/skirt',
      Shirt: '/shirt',
      Plazzo: '/plazzo',
      Pant: '/pant',
      Kurta: '/kurta',
      Jacket: '/jacket',
    },
    bridal: {
      Top: '/top',
      Tunic: '/tunic',
      Skirt: '/skirt',
      Shirt: '/shirt',
    },
    ethnic: {
      Top: '/top',
      Tunic: '/tunic',
      Skirt: '/skirt',
      Shirt: '/shirt',
      Plazzo: '/plazzo',
      Pant: '/pant',
      Kurta: '/kurta',
      Jacket: '/jacket',
    }
  });
  const [displayedLinks, setDisplayedLinks] = useState([]);
  
  function handleDisplay(category) {
    const categoryData = navbarData[category];
    if (categoryData) {
      setDisplayedLinks(Object.entries(categoryData));
    } else {
      setDisplayedLinks([]);
    }
  }

  function handleMouseOut() {
    setDisplayedLinks([]);
  }

  const handleLocation = debounce((e) => {
    const navigationElement = document.getElementById('navigation');

    if (navigationElement) {
      const { left, right } = navigationElement.getBoundingClientRect();

      if (e.clientX < left || e.clientX > right) {
        setDisplayedLinks([]);
      }
    }
  }, 100)
  
  



  return (
    <>
      <nav className="flex justify-around bg-black text-white py-3 items-center relative">
        <div className="flex space-x-2">
          <div>
            <img src="" alt="JANI-LOGO" />
          </div>
          <div>JANI</div>
        </div>
        <div className="flex space-x-8 items-center" id="navigation" onMouseOut={handleLocation}>
          <div onMouseOver={() => handleDisplay('office')}>Office</div>
          <div onMouseOver={() => handleDisplay('bridal')}>Bridal</div>
          <div onMouseOver={() => handleDisplay('ethnic')}>Ethnic</div>
        </div>
        <div className="flex space-x-6 items-center">
          <div>
            <FaRegHeart size={22} />
          </div>
          <div>
            <BsHandbagFill size={22} />
          </div>
          <div className="flex items-center space-x-1">
            <div>{data.user_name}</div>
            <CgProfile size={22} />
          </div>
        </div>
      </nav>
      {displayedLinks.length > 0 && (
        <div className="min-h-[30vh] w-full bg-white absolute  grid grid-cols-2 shadow-xl"
         onMouseLeave={handleMouseOut} 
        >
          {displayedLinks.map(([item, link]) => (
            <Link className="flex justify-center mt-10" key={item} to={link}>
              {item}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
