"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-5 flex max-w-[550px] mx-auto justify-between items-center dark:bg-gray-700 bg-gray-200 rounded-full py-2 px-4 sm:w-[100%] w-[90%]"
        >
            <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                className="w-full rounded-sm placeholder-gary-500 outline-none bg-transparent flex-1"
                placeholder="Search keywords..."
            />
            <button
                type="submit"
                className="text-blue-500 disabled:text-gray-400"
                disabled={!search}
            >
                <BsSearch />
            </button>
        </form>
    );
};

export default SearchBox;
