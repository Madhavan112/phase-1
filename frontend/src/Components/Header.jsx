import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="flex w-[80vw] justify-between p-[10px] mx-auto mb-[60px] max-md-[40px]">
      <div>
         <Link to="/"><h1 className="text-2xl font-sans font-bold ">Blog</h1>
      </Link> 
      </div> 
      <div>
        <Link to="/login" className="relative top-[10px] font-sans font-medium px-[6px]">Login</Link>
        <Link to="/signup" className="relative top-[10px] font-sans font-medium">Register </Link>
      </div>
    </div>
  )
}

export default Header