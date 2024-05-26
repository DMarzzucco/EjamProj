import LockLogo from "../assets/Vector/lock.png";
import { FooterItems } from "../items/items";

function Footer() {
    return (
        <footer className="bg-hf pb-3 flex flex-row Res1:flex-col justify-between items-center  text-white ">

            <div className=" p-3 text-16 Res1:text-12 w-full py-7 flex flex-row justify-center items-center">
                <span className="mr-3 border-r pr-2"> Copyright (C) 2023</span>
                <p>Clarifionsupport@clarifion.com </p>
            </div>
            <div className="flex justify-center items-center w-full">
                <FooterItems src={LockLogo} text={"Secure 256-bit SSL encryption."} />
            </div>
        </footer>
    )
}
export default Footer;