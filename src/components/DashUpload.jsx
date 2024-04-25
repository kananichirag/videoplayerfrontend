import axios from 'axios';
import { Button, FileInput, Label, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const DashUpload = () => {
  const [formdata, setFormdata] = useState({
    video: '',
    name: '',
    image: '',
  });
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!formdata.image || !formdata.video) {
        toast.error('Please select both an image and a video.');
        return;
      }
      const resp = await axios.post(
        `http://localhost:4000/v1/video_uplode`,
        formdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (resp.data.status == true) {
        toast.success(resp.data.message);
        setPost(resp.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="max-w-xl mx-auto p-5 mb-5 w-full">
      <h1 className="text-center text-3xl my-7 font-semibold">Upload Video</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Label className="text-xl">Enter title for video</Label>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title..."
            required
            id="name"
            name="name"
            onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
            className="flex-1"
          />
        </div>

        <Label className="text-lg">Upload Video here</Label>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            typeof="file"
            name="video"
            onChange={(e) =>
              setFormdata({ ...formdata, video: e.target.files[0] })
            }
          />
        </div>

        <Label className="text-lg mt-5">Upload Image here</Label>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            typeof="file"
            name="image"
            accept="image/*"
            onChange={(e) =>
              setFormdata({ ...formdata, image: e.target.files[0] })
            }
          />
        </div>

        <Button type="submit" className="mt-5" gradientDuoTone="purpleToPink">
          {loading ? 'Uploading...' : 'Upload'}
        </Button>
      </form>

      {post.result && post.result.image && (
        <div className="bg-gray-100 mt-5 p-5 rounded">
          <div>
            <Label className="text-xl  ml-5">Uploaded Image :</Label>
            <div className="relative mt-3 mb-3 overflow-hidden rounded drop-shadow ">
              <img
                className="w-[450px] h-[250px] mx-auto object-cover"
                src={`http://localhost:4000/images/${post.result.image}`}
              />
            </div>
            <div className="mb-3 ">
              <Label className="text-xl m-5 ">URL :</Label>
              <a href={post.url} target="_blank" className="font-bold">
                {post.url}
              </a>
            </div>

            <div className="flex items-center">
              <Label className="text-xl m-5 ">Video title :</Label>
              <h1 className="text-xl font-bold">{post.result.name}</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashUpload;
