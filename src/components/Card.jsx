import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
    return (
        <div className="cursor-pointer sm:p-4 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 mb-6 ">
            <Link href={`/movie/${result.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        result.backdrop_path || result.poster_path
                    }`}
                    width={550}
                    height={300}
                    className="sm:rounded-top-lg group-hover:opacity-80 transition-opacity duration-200 rounded-lg"
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                    alt="Image is not available"
                    placeholder="blur"
                    blurDataURL="/loading.svg"
                />
                <div className="py-2">
                    <p className="line-clamp-3 text-md">{result.overview}</p>
                    <h2 className="truncate text-lg font-bold">
                        {result.title || result.name}
                    </h2>
                    <p className="flex items-center">
                        {result.release_date || result.first_air_date}
                        <FiThumbsUp className="h-5 mr-1 ml-3" />{" "}
                        {result.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Card;
