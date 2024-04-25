import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async (req, res) => {
      try {
        const resp = await axios.get(`http://localhost:4000/v1/post/${id}`);
        setPost(resp.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [id]);
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className="max-w-4xl mx-auto py-8 px-4 ">
        <div className="mb-5 text-center">
          <h2 className="text-4xl  bg-slate-400 p-2 rounded font-semibold text-white">
            {post.name}
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

export default PostPage;
