import Img4Logo from "../../public/img/img4.png";
import GroupLogo from "../../public/img/Group 1000004656.png";
import Img6Logo from "../../public/img/image 6.png";
import CheckLogo from "../assets/Vector/GreenChek.png";
import Nm3Logo from "../assets/Vector/Nm3.png";
import Nm4Logo from "../assets/Vector/Nm4.png";

import { ChekItems, Comp5, Comp6, Profile } from "../items/items";
function Home() {
    return (
        <>
            <section className="w-full h-auto flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="m-0 text-48">Wait ! your order in progress.</h1>
                    <p className="m-0 text-24 text-LoremP">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                </div>
                <div className="w-full my-4 h-40 flex flex-row justify-center items-center">
                    <ChekItems src={CheckLogo} text={"Step 1 : Cart Review"} textRes={"Cart Review"} />
                    <ChekItems src={CheckLogo} text={"Step 2 : Checkout"} textRes={"Checkout"}/>
                    <div className="flex mx-5 flex-row Res-0:flex-col justify-start items-center">
                        <img src={Nm3Logo} alt=""
                            className="mr-2 w-40 h-40 Res2:w-20 Res2:h-20" />
                        <b className="text-20 ResB:hidden">Step 3 : Special Offer</b>
                        <b className="text-20 Res2:text-12 hidden ResB:block">Special Offer</b>
                    </div>
                    <ChekItems src={Nm4Logo} text={"Step 4 : Confirmation"} textRes={"Confirmation"}/>
                </div>
                <div className="flex flex-row Res0:flex-col justify-center items-center">

                    <div className="mr-10 flex flex-col justify-center items-center w-575">
                        <div className="flex justify-center items-center mb-3">
                            {/* img */}
                            <img className="w-575 h-591 Res0.1:w-320 Res0.1:h-328"  src={Img4Logo} alt="" />
                        </div>
                        <div className="Res0:hidden p-24 flex flex-col justify-start items-center w-full">
                            <div className="flex mb-2 justify-start items-center w-full">
                                <Profile />
                            </div>
                            <div className="flex justify-start w-full items-center ">
                                <div className="flex justify-center items-center w-full">
                                    <p className="text-16 text-LoremP">
                                        “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex mb-20 flex-col justify-center items-center w-550">
                        <div className="w-full">
                            <h2 className="m-0 text-32">
                                <span className="text-blueText" >ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className="text-blueText">$14 each</span> ($84.00 total!)
                            </h2>
                        </div>
                        <Comp5 />
                        <div className="flex flex-col justify-start items-center w-full">
                            <Comp6 child={<p>Negative Ion Technology may <b>help with allergens</b></p>} />
                            <Comp6 child={<p>Designed for <b>air rejuvenation</b></p>} />
                            <Comp6 child={<p><b>Perfect for every room</b> in all types of places.</p>} />
                        </div>
                        <div className="flex justify-start items-center w-542 py-16 px-12">
                            <div className="flex flex-row justify-center items-center w-441">
                                <img width={32} height={32} src={GroupLogo} alt="" />
                                <p className="text-16 ml-3">Save <span className="text-hf2">53%</span> and get <span className="text-hf2">6 extra Clarifision</span> for only <span className="text-hf2">$14 Each.</span></p>
                            </div>
                        </div>
                        {/* comp7 */}
                        <div className="flex mb-2 flex-row justify-start items-center w-full">
                            <img width={88} height={88} src={Img6Logo} alt="" />
                            <div className="flex justify-start items-center w-400">
                                <p className="ml-3 text-16 text-LoremP ">
                                    If you are not completely thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee</b>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;