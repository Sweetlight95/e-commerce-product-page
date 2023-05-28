import avatar from "../images/image-avatar.png";
import logo from "../images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
    return (
        <>
            <div className='flex item-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto'>
     <div className='flex items-center justify-start gap-4'>
      <img src={logo} alt="" />

      <nav className='hidden'>
        <ul className='flex items-center justify-start gap-4'>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>

    </div>
    <div>
        <ul className='flex items-center justify-start gap-4'>
            <li>
               <button>
                <AiOutlineShoppingCart className='text-2xl text-slate-600'/> 
               </button></li>
            <li><img src={avatar} alt='' className='w-12' /></li>
        </ul>
    </div>   
   </div>

        </>
    )
}