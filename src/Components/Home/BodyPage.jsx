import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BodyPage() {
  const [imageBanner, setImageBanner] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:5000/api/food_provinces';

    axios.get(apiUrl)
      .then(response => {
        setImageBanner(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="mt-8 mb-20">
      <div className="">
        {imageBanner.length > 5 && (
          <p className='ml-10'>Brand's Product</p>
        
        )}

        <div className="flex max-w-full overflow-x-auto">
          {imageBanner.map((image) => (
            <div key={image.id}>
              <div className="border m-5 bg-yellow-100 rounded-3xl shadow-xl
               p-5" style={{ width: '400px', cursor: 'pointer' }}>
                <img
                  className="w-full h-40 mt-6 object-cover"
                  src={image.image}
                  alt={``}
                />
                <p className='font-dbc text-center mt-5 text-xl'>{image.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BodyPage;