import { useEffect, useState } from 'react';
import CardItem from './CardItem';
import axios from 'axios';

const DashUploaded = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchdata = async (req, res) => {
      try {
        const resp = await axios.get(`http://localhost:4000/v1/list`);
        setList(resp.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <div className="flex bg-gray-100  mx-auto justify-center items-center  flex-wrap  w-full gap-4 ">
      {list.map((item) => (
        <CardItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default DashUploaded;
