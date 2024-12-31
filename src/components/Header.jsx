import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { StoreContext } from '../context/StoreContext';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const {setShowSearchBar, getTotalCartItems} = useContext(StoreContext);
    const totalItems = getTotalCartItems();

  return (
    <section className='flex items-center justify-between py-5 px-4 lg:px-12'>
        <Link to="/">
            <img src="https://cdn.pixabay.com/photo/2016/08/25/07/30/red-1618916_1280.png" alt="logo"
                 className='w-16 h-16'/>
        </Link>
        <ul className='hidden sm:flex gap-5 poppins-regular text-sm text-[#0D0D0D]'>
            <NavLink to="/" className="flex flex-col items-center gap-1">
                <p>HOME</p>
                <hr className='w-2/3  h-[3px] bg-[#1F818C] hidden'/>
            </NavLink>
            <NavLink to="/collection" className="flex flex-col items-center gap-1">
                <p>COLLECTION</p>
                <hr className='w-2/3  h-[3px] bg-[#1F818C] hidden'/>
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
                <p>ABOUT</p>
                <hr className='w-2/3  h-[3px] bg-[#1F818C] hidden'/>
            </NavLink>
            <NavLink to="/policy" className="flex flex-col items-center gap-1">
                <p>POLICY</p>
                <hr className='w-2/3  h-[3px] bg-[#1F818C] hidden'/>
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center gap-1">
                <p>CONTACT</p>
                <hr className='w-2/3  h-[3px] bg-[#1F818C] hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center justify-center gap-6'>
            <IoIosSearch className='w-8 h-8 cursor-pointer text-[#0D0D0D]'
                        onClick={()=> setShowSearchBar(true)}/>
            <div className='group relative z-10'>
                <CgProfile className='w-6 h-6 cursor-pointer text-[#0D0D0D]'/>
            </div>
            <Link to="/cart" className='relative flex items-center justify-center'>
                <BsCart2 className='w-6 h-6 cursor-pointer text-[#0D0D0D]' onClick={getTotalCartItems}/>
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center 
                              leading-4 bg-[#1F818C] text-[#F2F2EB] aspect-square rounded-full text-[10px]' >{totalItems}</p>
            </Link>
            <RxHamburgerMenu onClick={()=> setShowMenu(true)}
                             className='sm:hidden w-8 h-8 cursor-pointer text-[#1F818C]'/>
        </div>

        {/* Side Bar Menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#fff] transition-all 
                        ${showMenu ? 'w-full' : 'w-0'} z-20`}>
            <div className='flex flex-col poppins-regular text-sm text-[#0D0D0D]'>
                <div onClick={()=> setShowMenu(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <MdOutlineKeyboardArrowLeft className='w-8 h-8  text-[#1F818C]'/>
                    <p>Back</p>
                </div>
                    <NavLink onClick={()=> setShowMenu(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
                    <NavLink onClick={()=> setShowMenu(false)} className="py-2 pl-6 border" to="/collection">COLLECTION</NavLink>
                    <NavLink onClick={()=> setShowMenu(false)} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
                    <NavLink onClick={()=> setShowMenu(false)} className="py-2 pl-6 border" to="/policy">POLICY</NavLink>
                    <NavLink onClick={()=> setShowMenu(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
            </div>             
        </div>
    </section>
  )
}

export default Header