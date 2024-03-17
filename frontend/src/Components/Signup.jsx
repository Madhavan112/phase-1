
import { FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useContext } from "react";
import { GlobalText } from "../Context-Api/Global-Context";
function SignUp() {
  const {Details,setDetails} = useContext(GlobalText)
  function handleChange(e){
    const {name,value} = e.target
    setDetails((prev) =>( {...prev,[name]:value}))

  }
  return (
    <div className="flex  w-screen h-[60vh] flex-col justify-center items-center  bg-white">
      <form action="" className="box-shadow p-[20px] bg-white ">
        <div className="relative p-[20px]">
          <FaUser className="absolute top-[30px] left-[25px]" />
          <input
            type="text"
            placeholder=" Username"
            name="name"
            className="pl-[26px] border-gray border-[1px] rounded-lg py-[5px]  "
            value={Details.name}
            onChange={handleChange}
          />
        </div>
        <div className="relative p-[20px]">
          <MdMail className="absolute top-[30px] left-[25px]" />
          <input
            type="text"
            placeholder=" Email"
            name="email"
            className="pl-[26px] border-gray border-[1px] rounded-lg py-[5px]   "
            value={Details.email}
            onChange={handleChange}
          />
        </div>
        <div className="relative p-[20px]">
          <RiLockPasswordFill className="absolute top-[30px] left-[25px]"/>
          <input
            type="password"
            placeholder=" Password"
            className="pl-[26px] border-[1px] rounded-lg py-[5px]  border-gray  "
            name="password"
            value={Details.password}
            onChange={handleChange}
          />
        </div>
        <div className=" flex justify-center  items-centerflex-col ">
          <button type="submit" className="py-[2px] px-[10px] rounded-md  border border-black">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
