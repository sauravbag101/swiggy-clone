import React, { useState } from 'react'
import { PiCaretDownBold } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () =>{
    console.log("hi")
    setToggle(true)
    }

    const hideSideMenu =()=>{
    setToggle(false)  // close the slide menu
    }

    const iconsText = [
      {
        icon : <CiSearch/>,
        name : "Search"
      },
      {
        icon : <CiDiscount1/>,
        name : "Offers",
        miniText : "New",
      },
      {
        icon : <IoIosHelpCircleOutline />,
        name : "Help",
       
      },
      {
        icon : <CiUser />,
        name : "Sign-in"
      },
      {
        icon : <CiShoppingCart />,
        name : "Cart",
        miniText : '(0)',
      }
    ]

  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
        opacity : toggle ? 1 : 0,
        visibility : toggle ? "visible" : "hidden",
        zIndex:999    //for shadow
        
    }}>
      <div onClick={(e) => {
        e.stopPropagation();       //for stop white slider on click
      }} >
      <div className="w-[500px] bg-white h-full absolute duration-500" //for white slider
           style={{
            left: toggle ? '0%' : '-100%',
           }}>
             {/* Side Menu Content */}
             <div className="p-5">
                            <h2 className="font-bold text-center text-xl mb-4">Menu</h2>
                            <ul className="list-none text-center font-semibold ">
                                <li className="py-5 border-b-2 hover:text-[#fc8019]">Home</li>
                                <li className="py-5 border-b-2 hover:text-[#fc8019]">About</li>
                                <li className="py-5 border-b-2 hover:text-[#fc8019]">Services</li>
                                <li className="py-5 border-b-2 hover:text-[#fc8019]">Contact</li>
                                {/* Add more items as needed */}
                            </ul>
                        </div>
           </div>
      </div>
      <div></div>
    </div>
    <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[100]'>
        <div className=" flex items-center max-w-[1200px] mx-auto ">
          <div className='w-[100px]'>
            <img src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png" alt="" className='w-full'/>
          </div>
          <div className=''>
          <p><span className='font-bold border-b-[3px] border-[grey] pb-2'>Piru Vihar</span> Delhi, New Delhi <PiCaretDownBold onClick={showSideMenu}
          className='inline font-[20px] text-[orange] cursor-pointer'/></p>
          </div>
        

        <nav className='hidden md:flex list-none gap-4 ml-auto font-semibold'>

          {
            iconsText.map((iconsText,value)=>{
              return <li className='flex items-center gap-3  hover:text-[#fc8019]'>
             <span className="text-[22px] ">{iconsText.icon}</span>
              
              <span className=" ">{iconsText.name}</span>


              <sup className=''>{iconsText.miniText}</sup>
              
              </li>
            })
          }
         
          {/* <li>
            <CiDiscount1/>
            Offers
          </li>
          <li>
            <CiDiscount1/>
            Offers
          </li>
          <li>
            <CiDiscount1/>
            Offers
          </li>
          <li>
            <CiDiscount1/>
            Offers
          </li> */}
        </nav>
      </div>
    </header>
    </>
  )
}




