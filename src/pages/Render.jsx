import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Render = () => {
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchdata = async (e) => {
      try {
        const res = await axios.get(
          'http://localhost:4000/v1/video/662a3c8cbf75b3396867c281'
        );

        setPost(res.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto py-8 px-4 ">
        <div className="mb-5 text-center">
          <h2 className="text-4xl  bg-slate-400 p-2 rounded font-semibold text-white">
            Welcome
          </h2>
        </div>
        {post && post.video && (
          <div className="bg-white shadow-md rounded-lg drop-shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <video className="object-cover w-full h-full" controls>
                <source
                  src={`http://localhost:4000/images/${post.video}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Render;
