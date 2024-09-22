import React from 'react'
import { FaStar } from "react-icons/fa";
export default function Cart(props) {



  // Array of image data
  const images = [
    {
        url: "https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/cake-blog-23/famous-food-of-delhi.jpg",
        title: "Delhi Food",
        offer: "Items at ₹179",
        title: "Pizza Hut",
        rating: 4.2,
        minTime: 30,
        maxTime: 40,
        name: "Pizzas",
        place: "New Jodhpur"
    },
    {
        url: "https://womensfitness.co.uk/wp-content/uploads/sites/3/2022/11/Shutterstock_1675475479.jpg?w=900",
        title: "Mumbai Food",
        offer: "₹50 OFF ABOVE ₹199",
        title: "Janta Sweet Home",
        rating: 4.5,
        minTime: 35,
        maxTime: 40,
        name: "Sweets, South Indian",
        place: "Shastri Nagar"
    },
    {
        url: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg",
        title: "Kolkata Food",
        offer: "₹85 OFF ABOVE ₹149",
        title: "Parihaar Bhojnalay",
        rating: 4.3,
        minTime: 35,
        maxTime: 40,
        name: "North India, Thalis",
        place: "Sardarpura"
    },
    {
        url: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202312/MIT_Food-Diabetes-01_0.jpg?itok=Mp8FVJkC",
        title: "Kolkata Food",
        offer: "₹70 OFF ABOVE ₹149",
        title: "Kwality Walls Frozen",
        rating: 4.5,
        minTime: 25,
        maxTime: 25,
        name: "Desserts, Ice Cream",
        place: "Chopsani Housing Board"
    },
    {
        url: "https://www.eatright.org/-/media/images/eatright-landing-pages/foodgroupslp_804x482.jpg?as=0&w=967&rev=d0d1ce321d944bbe82024fff81c938e7&hash=E6474C8EFC5BE5F0DA9C32D4A797D10D",
        title: "Kolkata Food",
        offer: "₹1-5 OFF ABOVE ₹179",
        title: "The Good Bowl",
        rating: 4.4,
        minTime: 30,
        maxTime: 35,
        name: "Biryani, North India",
        place: "Shastri Nagar"
    },
    {
        url: "https://media.istockphoto.com/id/1058224486/photo/caribbean-grilled-chicken-drumstick-with-lime-and-onions-closeup-on-a-plate-horizontal-top.jpg?s=612x612&w=0&k=20&c=XX6XWGdIPw1SEvj9Frn2my-vyzD1lt8CPMP1d7MWfrg=",
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
        url: "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg",
        title: "Kolkata Food",
        offer: "Items at ₹109",
        title: "Dosh Center",
        rating: 4,
        minTime: 35,
        maxTime: 40,
        name: "South Indian",
        place: "Chopsani Housing Board"
    },
    // Add more images here
];


  return (
    <>
     {images.map((image, index) => (
      <div key={index} className=' pt-10 shrink-0 grow px-2'>
        <div className='group w-full md:w-[300px] h-[205px] rounded-lg overflow-hidden relative'>
            <img className='group-hover:scale-110 duration-150 object-cover w-full h-full' src={image.url} alt={image.title} />

            <div className='image-overlay absolute w-full h-full top-0 flex items-end p-2 text-[20px] font-bold text-white tracking-tighter'> 
                {image.offer}</div>
        </div>
        <div className='mt-3 text-xl font-bold'>{image.title}</div>

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
      
    </>
  )
}
