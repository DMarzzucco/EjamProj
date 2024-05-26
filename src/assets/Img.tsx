import ArrowB from "./Vector/ArrowBtn.png";
import LockD from "./Vector/lockDark.png";
import Visalg from "./cards/visa.png";
import Shoplg from "./cards/shop pay.png";
import Paylg from "./cards/paypal.png";
import Masterlg from "./cards/mastercard.png";
import Goglg from "./cards/gpay.png";
import Applg from "./cards/apple pay.png";
import Amexlg from "./cards/amex.png";

export const ArrowBtn: React.FC = ({ }) => {
    return (
        <><img className="w-16 Res3:h-16 ml-4" src={ArrowB} alt="" /></>
    )
}
export const LockDark: React.FC = ({ }) => {
    return (
        <><img className="w-12  " src={LockD} alt="" /></>
    )
}
export const CardsComp:React.FC = ({}) =>{
    return (
        <div className="w-180 Res1:w-289 Res1:mt-2 border-l Res1:border-l-0 Res1:border-t Res1:py-2 border-greySky ml-3 Res1:ml-0 pl-3 Res1:pl-0 flex flex-row justify-center items-center">
            <img src={Visalg} alt="" />
            <img src={Shoplg} alt="" />
            <img src={Paylg} alt="" />
            <img src={Masterlg} alt="" />
            <img src={Goglg} alt="" />
            <img src={Applg} alt="" />
            <img src={Amexlg} alt="" />
        </div>
    )
}
