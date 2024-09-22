import React, { useEffect, useRef, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";
export default function DiliverData() {

  // Create a ref for the element you want to monitor
  const elementRef = useRef(null);
  
  // State to manage the class name
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        // Get the bounding rectangle of the element
        const rect = elementRef.current.getBoundingClientRect();

        // Check if the element is at the top of the viewport
        if (rect.top <= 0) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





      // Array of image data
  const images = [
    {
        url: "https://media.istockphoto.com/id/518528842/photo/jerk-chicken-with-corn.jpg?s=612x612&w=0&k=20&c=9Mjr1SvnFifpE4qXxX0E3IaP66ygiYNZrzduX5wpE8Q=",
        title: "Delhi Food",
        offer: "₹50 OFF ABOVE ₹199",
        title: "Chicken Tandoori",
        rating: 4.6,
        minTime: 20,
        maxTime: 40,
        name: "Tandoori",
        place: "New Laxmi nagar"
    },
    {
        url: "https://t3.ftcdn.net/jpg/01/79/62/74/360_F_179627467_6HL7vdabsl8AyuVoKfUUFDS8r4sP4ER0.jpg",
        title: "Mumbai Food",
        offer: "₹50 OFF ABOVE ₹100",
        title: "Great bhel Puri",
        rating: 4.0,
        minTime: 35,
        maxTime: 40,
        name: "Sweets, Salt Puri",
        place: "Shah Nagar"
    },
    {
        url: "https://www.sotc.in/blog/wp-content/uploads/2022/09/indian-famous-street-food-vada-pav.jpg",
        title: "Mumbai Food",
        offer: "₹25 OFF ABOVE ₹129",
        title: "Bada Pav chol",
        rating: 4.4,
        minTime: 35,
        maxTime: 40,
        name: "West India, Street food",
        place: "Sardar bazzar"
    },
    {
        url: "https://cdn.gutekueche.de/media/recipe/91915/conv/pakora-default.jpg",
        title: "Kolkata Food",
        offer: "₹30 OFF ABOVE ₹200",
        title: "Lalu lal Pakorawala",
        rating: 4.0,
        minTime: 20,
        maxTime: 35,
        name: "snacks, street food",
        place: "Chopwala Board"
    },
    {
        url: "https://myfoodstory.com/wp-content/uploads/2023/01/air-fryer-pasta-square-2.jpg",
        title: "Kolkata Food",
        offer: "₹1-5 OFF ABOVE ₹179",
        title: "The Good Bowl",
        rating: 4.2,
        minTime: 40,
        maxTime: 55,
        name: "Pasta, Taste of India",
        place: "Mukherjee Nagar"
    },
    {
        url: "https://blog.kitchenstuffplus.com/wp-content/uploads/2018/06/nice-cream-feature.png",
        title: "Kolkata Food",
        offer: "₹100 OFF ABOVE ₹499",
        title: "NIC Ice Creams",
        rating: 4.7,
        minTime: 25,
        maxTime: 30,
        name: "Desserts, Ice Cream",
        place: "Sardarpura"
    },
    {
        url: "https://vanitascorner.com/wp-content/uploads/2018/10/Ulli-Karam-Dosa.jpg",
        title: "Kolkata Food",
        offer: "Items under ₹159",
        title: "Dosa Place",
        rating: 4,
        minTime: 35,
        maxTime: 40,
        name: "South Indian",
        place: "Hari ram prasad wali gali"
    },
    {
        url: "https://hamariweb.com/recipes/images/recipeimages/3464.jpg",
        title: "Kolkata Food",
        offer: "Items under ₹399",
        title: "World Famous Biryani Center",
        rating: 4.6,
        minTime: 55,
        maxTime: 60,
        name: " Indian Dish",
        place: "Chorangi Road"
    },
    {
        url: "https://rachnas-kitchen.com/wp-content/uploads/2015/11/jalebi-instant.jpg",
        title: "Kolkata Food",
        offer: "Items at ₹109",
        title: "Jalebi Wala",
        rating: 4.1,
        minTime: 25,
        maxTime: 40,
        name: "Indian Best Dish",
        place: "Safari road, New Delhi"
    },
    
];
  return (
    <div >
      <div className='max-w-[1200px] mx-auto px-2' ref={elementRef}>
                <div className='flex mt-12 items-center justify-between '>
                    <div className='text-[25px] font-bold'>Restaurants with online food delivery in Delhi</div>
                    </div>
                    {/* filter input */}
                    <div  className={isAtTop ?  'fixed top-0 z-[400] bg-white w-full': ''}>
                       <div className='max-w-[1200px] mx-auto flex my-4 gap-3'>
                        <div className='flex items-center justify-center gap-2 p-3 rounded-full shadow'>Filter <BiBarChart /></div>
                        <div className='flex items-center justify-center gap-2 p-3 rounded-full shadow'>Sort <MdExpandMore /></div>
                        <div className='flex items-center justify-center gap-2 p-3 rounded-full shadow'>Fast Delivery</div>
                        <div className='flex items-center justify-center gap-2 p-3 rounded-full shadow'>New on Swiggy</div>
                        <div className='flex items-center justify-center gap-2 p-3 rounded-full shadow'>Ratings 4.0+ </div>
                        <div className='flex items-center justify-center gap-2 p-3 rounded-full shadow'>Pure Veg </div>
                        <div className='flex items-center justify-center gap-2 p-3 rounded-full shadow'>Rs. 300-Rs. 600 </div>
                        <div className='flex items-center justify-center gap-2 p-3 rounded-full shadow'>offers</div>
                        <div className='flex items-center justify-center gap-2 p-3 rounded-full shadow'>Less than Rs. 300 </div>




                       </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

                    {images.map((image, index) => (
      <div key={index} className=' pt-10 shrink-0 grow'>
        <div className=' group w-full md:w-[280px] h-[205px] rounded-lg overflow-hidden relative'>
            <img className='group-hover:scale-110 duration-150 object-cover w-full h-full' src={image.url} alt={image.title} />

            <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[16px] md:text-[20px] font-bold text-white tracking-tighter'> 
                {image.offer}</div>
        </div>
        <div className='mt-3 text-md md:text-xl font-bold'>{image.title}</div>

        {/* rating or icon */}
        <div className='flex gap-3'>
        <div className='text-white w-[28px] h-[28px] flex justify-center items-center bg-green-700 rounded-full'>
        <FaStar />
        </div>
        {image.rating}  .
        <span className='font-semibold'>{image.minTime} - {image.maxTime} min</span>
        
        </div>
        <div className='text-zinc-700'>{image.name} <br /> {image.place}</div>
      </div>
      
      ))}

                    </div>
                    </div>
    </div>
  )
}
