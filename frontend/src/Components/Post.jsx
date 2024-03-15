import img from '../assets/img.jpg';

function Post() {
  return (
    <div className="flex flex-col md:flex-row w-[80vw] mx-auto gap-5  ">
      <div className="grid grid-cols-[0.8fr,1.2fr] max-md:flex flex-col gap-4">
        <div className='object-contain'>
      <img src={img} alt="" className='w-11/12 h-64  max-md:w-full' />

      </div>
      <div className="md: flex mx-auto flex-col p-[5px]">
        <h1 className="text-2xl font-bold font-sans">Title</h1>
        <div className="flex flex-row justify-between">
          <p>Name</p>
          <p>Date</p>
        </div>
        <p className="text-xl mt-[10px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id neque
          mollitia cum aspernatur nobis eaque rem, dolores necessitatibus,
          tenetur, at asperiores! Eos odio deserunt eum in possimus! Voluptate,
          magnam unde.
        </p>
      </div>
      </div>
    </div>
  );
}

export default Post;
