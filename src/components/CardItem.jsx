import { Button, Card, Label } from 'flowbite-react';
import { Link } from 'react-router-dom';
import CpoyButton from './CpoyButton';

const CardItem = ({ item }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-5 m-5">
      <div className="relative overflow-hidden rounded drop-shadow ">
        <img
          className="object-cover w-[350px] h-[290px] transition duration-300 ease-in-out hover:scale-110" // Adjust the height as needed
          src={`http://localhost:4000/images/${item.image}`}
          alt=""
        />
      </div>
      <div className="p-3">
        <h5 className="mb-2 text-2xl text-center font-serif font-ca font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
      </div>
      <div className="flex flex-col p-3 mb-3">
        <Label className="text-xl font-semibold mb-2">Link :</Label>
        <a
          href={`${item.url}`}
          target="_blank"
          className="mb-2 text-md font-ca font-bold tracking-tight cursor-pointer text-gray-900 "
        >
          {item.url}
        </a>
        <CpoyButton text={item.url} />
      </div>
      <Link to={`/post/${item._id}`}>
        <div className="flex justify-center ">
          <Button gradientDuoTone="purpleToBlue" className="w-full" outline>
            Play
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
