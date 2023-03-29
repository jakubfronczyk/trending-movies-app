import NavbarItem from "./NavbarItem";

const Navbar = () => {
    return (
        <div className="flex justify-center dark:bg-gray-600 bg-black text-white lg:text-lg py-4">
            <NavbarItem
                title="Trending"
                param="fetchTrending"
            />
            <NavbarItem
                title="Top Rated"
                param="fetchTopRated"
            />
        </div>
    );
};

export default Navbar;
