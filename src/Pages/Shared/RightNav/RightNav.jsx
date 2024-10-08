import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import fb from '../../../assets/icons/facebook (1).png'
import tw from '../../../assets/icons/twitter (1).png'
import ins from '../../../assets/icons/instagram (1).png'
import qzone1 from '../../../assets/images/qZone1.png'
import qzone2 from '../../../assets/images/qZone2.png'
import qzone3 from '../../../assets/images/qZone3.png'


const RightNav = () => {
    return (
        <div>
            {/* Login With */}
            <div className="p-2 mb-8">
                <h2 className="text-xl font-semibold mb-6">Login With:</h2>
                <div className="space-y-3 font-semibold">
                    <button className="border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white p-2 text-blue-600 rounded-lg w-full flex items-center gap-2 justify-center active:scale-95 transition duration-100">
                        <FaGoogle /> Google
                    </button>
                    <button className="border-2 border-black hover:bg-black hover:text-white p-2 rounded-lg w-full flex items-center gap-2 justify-center active:scale-95 transition duration-100">
                        <FaGithub /> Github
                    </button>
                </div>
            </div>

            {/* Find Us */}
            <div className="p-2 mb-8">
                <h2 className="text-xl font-semibold mb-6">Find Us On:</h2>
                <div className="flex flex-col font-semibold">
                    {/* Facebook */}
                    <a href="https://www.facebook.com" target="_blank" rel="" className="flex items-center gap-3 border-2 rounded-t-lg p-2 relative overflow-hidden group">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:translate-x-24 group-hover:scale-110">
                            <img src={fb} alt="Facebook Logo" />
                        </div>
                        <p className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-10">Facebook</p>
                    </a>

                    {/* Twitter */}
                    <a href="https://www.twitter.com" target="_blank" rel="" className="flex items-center gap-3 border-x p-2 relative overflow-hidden group">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:translate-x-24 group-hover:scale-110">
                            <img src={tw} alt="Twitter Logo" />
                        </div>
                        <p className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-10">Twitter</p>
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com" target="_blank" rel="" className="flex items-center gap-3 border-2 p-2 rounded-b-lg relative overflow-hidden group">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:translate-x-24 group-hover:scale-110">
                            <img src={ins} alt="Instagram Logo" />
                        </div>
                        <p className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-10">Instagram</p>
                    </a>
                </div>
            </div>



            {/* Q Zone */}
            <div className="p-2 mb-8 bg-gray-100 rounded-md">
                <h2 className="text-xl font-semibold mb-5">Q-Zone:</h2>
                <div className="flex flex-col items-center gap-5">
                    <img src={qzone1} alt="" />
                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;

/* 

The group and group-hover classes:

You want something to happen to both the text and the icon when you hover over the entire link (the <a> tag).
The group class is added to the parent (the <a> tag), so you can make child elements respond to hovering on the parent.
group-hover is used on the child elements to trigger changes when hovering over the parent (<a>).

*/