import clariFonLogo from '../../public/img/600a41c73b670a97ae1d4f47_Clarifion_Logo.png';
import vec1Logo from "../assets/Vector/vec1.png";
import vec2Logo from "../assets/Vector/vec2.png";
import vec3Logo from "../assets/Vector/vec3.png";
import vec4Logo from "../assets/Vector/vec4.png";
import McLog from "../assets/McAfree.png";
import NortonLogo from "../assets/norton-antivirus-logo 1.png";

import { HeaderItems } from '../items/items';
function Header() {
    return (
        <header>
            <div className="bg-hf px-20 text-white flex flex-row justify-between items-center h-50">
                <HeaderItems src={vec1Logo} text={"30-DAY SATISFACTION GUARANTEE"} />
                <HeaderItems src={vec2Logo} text={"FREE DELIVERY ON ORDERS OVER $40.00"} />
                <HeaderItems src={vec3Logo} text={"50.000+ HAPPY CUSTOMERS"} />
                <HeaderItems src={vec4Logo} text={"100% MONEY BACK GUARANTEE "} />
            </div>
            <div className='flex justify-between items-center p-3'>
                <div className='flex justify-center items-center w-full'>
                    <img className='w-192 h-36 Res0.1:w-106 Res0.1:h-20' src={clariFonLogo} alt="" />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <img className='mr-9 w-88 h-32 Res0.1:w-44 Res0.1:h-16' src={McLog} alt="" />
                    <img className='w-82 h-32 Res0.1:w-41 Res0.1:h-16' src={NortonLogo} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header;