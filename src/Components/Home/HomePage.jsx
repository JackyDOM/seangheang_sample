import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import BodyPage from './BodyPage';

function HomePage() {
  const [imageBanner, setImageBanner] = useState([]);
  const texts = ['CeraVe Product', 'The Ordinary Product', 'La Roche-Posay Product', 'Neutrogena Product', 'Drunk Elephant Product', 'Glossier Product'];

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:5000/api/banner_provinces';

    axios.get(apiUrl)
      .then(response => {
        setImageBanner(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className='mb-20'>
      <Slider {...settings}>
        {imageBanner.map((province, index) => (
          <div key={province.id} className="relative group z-30">
            <img
              className='w-[1800px] object-cover h-[500px] mt-3 pl-5 pr-5 shadow-lg'
              src={province.image}
              alt={`banner-${index}`}
            />
            <div className="absolute inset-0 flex items-center justify-center 
              opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
              <div className="text-white text-center font-abc">
                <p className="text-6xl font-semibold cursor-pointer">{texts[index]}</p>
              </div>
            </div>
          </div>
        ))}

        
      </Slider>
      <BodyPage />
    </div>
  );
}

export default HomePage;