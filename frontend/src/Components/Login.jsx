import { MdMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
function SignUp() {
  return (
    <div className="flex  w-screen h-[60vh] flex-col justify-center items-center  bg-white">
      <form action="" className="box-shadow p-[20px] bg-white ">
        <div className="relative p-[20px]">
          <MdMail className="absolute top-[30px] left-[25px]" />
          <input
            type="text"
            placeholder=" Email"
            className="pl-[26px] border-gray border-[1px] rounded-lg py-[5px]   "
          />
        </div>
        <div className="relative p-[20px]">
          <RiLockPasswordFill className="absolute top-[30px] left-[25px]" />
          <input
            type="text"
            placeholder=" Password"
            className="pl-[26px] border-[1px] rounded-lg py-[5px]  border-gray  "
          />
        </div>
        <div className=" flex justify-center items-center flex-col ">
          <button
            type="submit"
            className="py-[2px] px-[10px] rounded-md  border border-black"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
