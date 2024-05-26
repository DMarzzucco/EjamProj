import clariFonLogo from '../../public/img/600a41c73b670a97ae1d4f47_Clarifion_Logo.png';
import vec1Logo from "../assets/Vector/vec1.png";
import vec2Logo from "../assets/Vector/vec2.png";
import vec3Logo from "../assets/Vector/vec3.png";
import vec4Logo from "../assets/Vector/vec4.png";
import McLog from  "../assets/McAfree.png";
import NortonLogo from  "../assets/norton-antivirus-logo 1.png";

import { HeaderItems } from '../items/items';
function Header() {
    return (
        <header>
            <div className="bg-hf px-20 text-white flex flex-row justify-between items-center h-50">
                <HeaderItems src={vec1Logo} text={"30-DAY SATISFACTION GUARANTEE"}/>
                <HeaderItems src={vec2Logo} text={"FREE DELIVERY ON ORDERS OVER $40.00"}/>
                <HeaderItems src={vec3Logo} text={"50.000+ HAPPY CUSTOMERS"}/>
                <HeaderItems src={vec4Logo} text={"100% MONEY BACK GUARANTEE "}/>
            </div>
            <div className='flex justify-between items-center p-3'>
                <div className='flex justify-center items-center w-full'>
                    <img width={192} height={36} src={clariFonLogo} alt="" />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <img className='mr-9' width={88} height={32} src={McLog} alt="" />
                    <img width={82} height={32} src={NortonLogo} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header;