import ProfileImage from "../../public/Rectangle 1127.png"
import StartLogo from "../assets/Vector/Start.png";
import VerifyLogo from "../assets/Vector/verify 1.png";
import Comp5Item from "../assets/Comp5.png";
import TirkLogo from "../assets/Vector/tick-circle.png";
import { HeaderProps, ListProps, Size } from "../Interfaces/Interfaces";

// comp1
export const HeaderItems: React.FC<HeaderProps> = ({ src, text }) => {
    return (
        <div className="h-22 flex flex-row justify-center items-center">
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
        <div className="flex flex-row justify-center items-center w-full">
            <img width={134} height={134} src={Comp5Item} alt="" />
            <div className="p-3 ml-2 flex flex-col justify-start items-center w-full">
                <div className="flex flex-row justify-between items-center w-full">
                    <h3 className="text-20 font-bold">Clarifion Air Ionizer</h3>
                    <div className="flex flex-row justify-center items-center">
                        <p className="text-16 text-GreyClean mr-2">$182</p>
                        <p className="text-22 text-blueText">$84</p>
                    </div>
                </div>
                {/* stars */}
                <div className=" flex flex-row justify-start items-center w-full">
                    <Stars Width={18} Heigth={18} />
                    <Stars Width={18} Heigth={18} />
                    <Stars Width={18} Heigth={18} />
                    <Stars Width={18} Heigth={18} />
                    <Stars Width={18} Heigth={18} />
                </div>
                {/* punt and text */}
                <div className="my-2 flex flex-row justify-start items-center w-full">
                    <div className="w-16 mr-2 h-16 flex justify-center items-center">
                        <div className="h-8/53 w-8/53 bg-hf2 rounded-full"></div>
                    </div>
                    <p className="text-16 text-greyBlue">12 left in Stock</p>
                </div>
                {/* Last text */}
                <p className="text-16 text-LoremP">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
            </div>
        </div>
    )
}
// comp 6
export const Comp6: React.FC<ListProps> = ({ child }) => {
    return (
        <div className="flex my-2  flex-row justify-start w-full items-center">
            <img width={22} height={22} src={TirkLogo} alt="" />
            <div className="ml-2 text-16 text-LoremP">{child}</div>
        </div>
    )
}
