import ProfileImage from "../../public/Rectangle 1127.png"
import StartLogo from "../assets/Vector/Start.png";
import VerifyLogo from "../assets/Vector/verify 1.png";
import ArrowPrev from "../assets/Vector/Arrow1.png";
import ArrowNext from "../assets/Vector/Arrow2.png";
import Comp5Item from "../assets/Comp5.png";
import TirkLogo from "../assets/Vector/tick-circle.png";
import { ArrowsProps, HeaderProps, ListProps, Size } from "../Interfaces/Interfaces";
import { Link } from "react-router-dom";
import { ArrowBtn, CardsComp, LockDark } from "../assets/Img";

// comp1
export const HeaderItems: React.FC<HeaderProps> = ({ src, text }) => {
    return (
        <div className="h-auto w-full flex flex-row justify-center items-center">
            <img height={22} width={22} src={src} alt="" />
            <span className="m-2 text-12">{text}</span>
        </div>
    )
}
// comp2
export const FooterItems: React.FC<HeaderProps> = ({ src, text }) => {
    return (
        <div className="h-16 flex flex-row justify-center items-center">
            <img height={16} width={16} src={src} alt="" />
            <span className="m-2 text-16 Res1:text-12">{text}</span>
        </div>
    )
}
// comp3
export const ChekItems: React.FC<HeaderProps> = ({ src, text, textRes }) => {
    return (
        <div className="flex mx-5s mx-1 flex-row Res-0:flex-col justify-start items-center">
            <img src={src} alt=""
                className="mr-2 w-40 h-40 Res2:w-20 Res2:h-20" />
            <p className="text-20 ResB:hidden">{text}</p>
            <p className=" Res2:text-12 text-20 hidden ResB:block">{textRes}</p>
        </div>
    )
}
// comp4
export const Profile: React.FC = ({ }) => {
    return (
        <div className="w-auto flex h-48  flex-row justify-center items-center">
            <img src={ProfileImage} alt="" />
            <div className="flex m-3 flex-col justify-start items-center">
                <div className="flex w-full flex-row justify-start items-center">
                    <Stars Width={11.95} Heigth={11.95} />
                    <Stars Width={11.95} Heigth={11.95} />
                    <Stars Width={11.95} Heigth={11.95} />
                    <Stars Width={11.95} Heigth={11.95} />
                    <Stars Width={11.95} Heigth={11.95} />
                </div>
                <div className="flex flex-row justify-start items-center">
                    <b>Kent T.</b>
                    <div className="flex flex-row justify-center items-center">
                        <img width={16} height={16} src={VerifyLogo} alt=""
                            className="mx-2" />
                        <p className="text-Verify text-12">Verified Customer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const Stars: React.FC<Size> = ({ Width, Heigth }) => {
    return (
        <>
            <img width={Width} height={Heigth} src={StartLogo} alt="" />
        </>
    )
}
// comp5
export const Comp5: React.FC = ({ }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-row justify-center items-center w-full">
                <img src={Comp5Item} alt="" className="w-134 h-134  Res1:w-80 Res1:h-80" />
                <div className="p-3 Res1:p-0 ml-2 flex flex-col justify-start items-center w-full">
                    <div className="flex flex-row justify-between items-center w-full">
                        <h3 className="text-20 Res1:text-14 font-bold">Clarifion Air Ionizer</h3>
                        <div className="flex flex-row justify-center items-center Res1:ml-10">
                            <p className="text-16 Res1:text-10 text-GreyClean mr-2">$182</p>
                            <p className="text-22 Res1:text-14 text-blueText">$84</p>
                        </div>
                    </div>
                    {/* stars */}
                    <div className="Res0.1:hidden w-full">
                        <div className=" flex flex-row justify-start items-center w-full ">
                            <Stars Width={18} Heigth={18} />
                            <Stars Width={18} Heigth={18} />
                            <Stars Width={18} Heigth={18} />
                            <Stars Width={18} Heigth={18} />
                            <Stars Width={18} Heigth={18} />
                        </div>
                    </div>
                    <div className="hidden Res0.1:block w-full">
                        <div className=" flex flex-row justify-start items-center w-full">
                            <Stars Width={12} Heigth={12} />
                            <Stars Width={12} Heigth={12} />
                            <Stars Width={12} Heigth={12} />
                            <Stars Width={12} Heigth={12} />
                            <Stars Width={12} Heigth={12} />
                        </div>
                    </div>
                    {/* punt and text */}
                    <div className="my-2 flex flex-row justify-start items-center w-full">
                        <div className="w-16 mr-2 h-16 flex justify-center items-center">
                            <div className="h-8/53 w-8/53 bg-hf2 rounded-full"></div>
                        </div>
                        <p className="text-16 Res0.1:text-12 text-greyBlue">12 left in Stock</p>
                    </div>
                    {/* Last text */}
                    <p className="Res0.1:hidden text-16 text-LoremP">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                </div>
            </div>
            <p className="hidden w-326 Res0.1:block text-12 text-center text-LoremP">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
        </div>
    )
}
// comp 6
export const Comp6: React.FC<ListProps> = ({ child }) => {
    return (
        <div className="flex my-2  flex-row justify-start w-full items-center">
            <img className="Res3:hidden" width={22} height={22} src={TirkLogo} alt="" />
            <img className="hidden Res3:block" width={16} height={16} src={TirkLogo} alt="" />
            <div className="ml-2 text-16 Res3:text-12 text-LoremP">{child}</div>
        </div>
    )
}
// comp 7
export const Comp7: React.FC = ({ }) => {
    return (
        <div className="flex w-full flex-col justify-center items-center">
            <button className="bg-greenBt w-full rounded-full py-4 flex flex-row justify-center items-center">
                <h3 className="text-20 Res3:text-14 text-white">
                    YES - CLAIM MY DISCOUNT
                </h3>
                <ArrowBtn />
            </button>
            {/*  */}
            <div className="py-2 rounded my-3 flex flex-row Res1:flex-col justify-center items-center w-full border">
                {/* text */}
                <div className="flex flex-row justify-center items-center">
                    <p  className="text-12 text-LoremP mr-3 pr-3 border-r border-greySky ">Free shipping</p>
                    <div className=" flex flex-row justify-center items-center w-194">
                        <LockDark/>
                        <p  className="ml-2 text-12 text-LoremP ">Secure 256-bit SSL encryption.</p>
                    </div>
                </div>
                {/* carts */}
                <CardsComp/>
            </div>
            {/*  */}
            <Link to="#" className="text-redAlert underline text-18 Res3:text-12">
                NO THANKS, I DON`T WANT THIS.
            </Link>
        </div>
    )
}
// ArrowHeader

export const PrevBoton: React.FC<ArrowsProps> = ({ onClick }) => {
    return (
        <div onClick={onClick} className=" flex h-20 w-full justify-start items-center">
            <img src={ArrowPrev} alt="" />
        </div>
    )
}

export const NextBoton: React.FC<ArrowsProps> = ({ onClick }) => {
    return (
        <div onClick={onClick} className="w-full h-20 flex justify-end items-center">
            <img src={ArrowNext} alt="" />
        </div>
    )
}
