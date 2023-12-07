import {React, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../Images/LOgo.png'

const Nav = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <>
    <div className=' select-none flex justify-between items-center h-16 max-w-6xl mx-auto px-4 text-base  font-thin
     first-letter text-textClrLight dark:text-textClrDark active:text-primaryClr'>
      <div><img src={Logo} alt="it is a logo" /></div>
      <ul className='hidden md:flex'>
        {/* <li className='p-4'>Home</li> */}
        <li className='p-4 w-32' > <a href='#about' className=' font-thin hover:no-underline text-xs hover:text-primaryClr hover:text-[15px]'> About me </a></li>
        {/* <li className='p-4'>Service</li> */}
        <li className='p-4'><a href='#contact' className=' text-base hover:no-underline hover:text-primaryClr hover:text-[15px]'> Contact </a></li>
        <li className='p-4'><a href='#projects' className=' hover:no-underline hover:text-primaryClr hover:text-[15px]'> Projects </a></li>
        <li className='p-4'><a href='#skills' className=' hover:no-underline hover:text-primaryClr hover:text-[15px]'> Skills </a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu className='cursor-pointer' size={25} /> : <AiOutlineClose className='cursor-pointer' size={25} />}

      </div>
      <div className={nav ? 'fixed right-0 top-0 w-[60%] h-full  bg-[#fcfbfb] mt-16 ease-in-out duration-500 md:hidden text-[#18102b] couraor' : 'fixed left-[-500px]'}>
        <ul className=''>
          {/* <li className='p-4'>Home</li> */}
           <li className='p-4 w-32' > <a href='#about' className=' hover:no-underline hover:text-primaryClr hover:text-[15px]'> About me </a></li>
        {/* <li className='p-4'>Service</li> */}
        <li className='p-4'><a href='#Contact' className=' hover:no-underline hover:text-primaryClr hover:text-[15px]'> Contact </a></li>
        <li className='p-4'><a href='#Project' className=' hover:no-underline hover:text-primaryClr hover:text-[15px]'> Projects </a></li>
                <li className='p-4'><a href='#skills' className=' hover:no-underline hover:text-primaryClr hover:text-[15px]'> Skills </a></li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default Nav
