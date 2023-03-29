import MenuItem from "./MenuItem";
import DarkModeSwitch from "./DarkModeSwitch";
import { AiTwotoneHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-between mx-4 max-w-6xl lg:mx-auto items-center sm:py-6">
            <div className="flex">
                <MenuItem
                    title="Home"
                    address="/"
                    Icon={AiTwotoneHome}
                />
                <MenuItem
                    title="About"
                    address="/about"
                    Icon={BsInfoCircleFill}
                />
            </div>
            <div className="flex items-center space-x-5">
                <DarkModeSwitch />
                <Link href="/">
                    <h2 className="flex gap-1">
                        <span className="font-bold text-black bg-amber-500 py-1 px-2 rounded-md">
                            TRENDINg
                        </span>
                        <span className="text-xl hidden sm:inline">Movies</span>
                    </h2>
                </Link>
            </div>
        </div>
    );
};

export default Header;
