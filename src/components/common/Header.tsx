import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss"
import { HeaderItems, NextBoton, PrevBoton } from '../asset/items';
import { clariFonLogo, McLog, NortonLogo, vec1Logo, vec2Logo, vec3Logo, vec4Logo } from "../../assets/img";

const Header: React.FC = () => {
    const Setting: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextBoton />,
        prevArrow: <PrevBoton />,
    }

    return (
        <header>
            <div className="bg-hf px-20 ResB:px-0 text-white w-full flex justify-center items-center h-50">
                <div className="flex ResB:hidden flex-row justify-between items-center w-full">
                    <HeaderItems src={vec1Logo} text={"30-DAY SATISFACTION GUARANTEE"} />
                    <HeaderItems src={vec2Logo} text={"FREE DELIVERY ON ORDERS OVER $40.00"} />
                    <HeaderItems src={vec3Logo} text={"50.000+ HAPPY CUSTOMERS"} />
                    <HeaderItems src={vec4Logo} text={"100% MONEY BACK GUARANTEE "} />
                </div>
                <div className="hidden ResB:block justify-center items-center w-full">
                    <Slider className="flex w-full justify-center items-center" {...Setting}>
                        <HeaderItems src={vec1Logo} text={"30-DAY SATISFACTION GUARANTEE"} />
                        <HeaderItems src={vec2Logo} text={"FREE DELIVERY ON ORDERS OVER $40.00"} />
                        <HeaderItems src={vec3Logo} text={"50.000+ HAPPY CUSTOMERS"} />
                        <HeaderItems src={vec4Logo} text={"100% MONEY BACK GUARANTEE "} />
                    </Slider>
                </div>
            </div>
            <div className='flex justify-between items-center py-3'>
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