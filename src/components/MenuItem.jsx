import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
    return (
        <div>
            <Link
                className="mx-4 lg:mx-6 hover:text-blue-600"
                href={address}
            >
                <Icon className="text-2xl sm:hidden mx-4" />
                <p className="hidden sm:inline my-2 text-sm">{title}</p>
            </Link>
        </div>
    );
};

export default MenuItem;
