import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

async function getMovie(movieId) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );
    return await res.json();
}

export default async function MoviePage({ params }) {
    const movieId = params.id;
    const movie = await getMovie(movieId);
    return (
        <div className="w-full">
            <div className="p-4 md:pt-8 flex flex-col lg:flex-row items-center content-center lg:max-w-6xl lg:space-x-6 max-w-[550px] mx-auto">
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        movie.backdrop_path || movie.poster_path
                    }`}
                    width={550}
                    height={300}
                    className="rounded-lg"
                    style={{
                        maxWidth: "100%",
                        height: "100%",
                    }}
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    alt="Movie poster"
                />
                <div className="p-2">
                    <h2 className="text-lg mb-3 font-bold">
                        {movie.title || movie.name}
                    </h2>
                    <p className="text-lg mb-2">
                        <span className="font-semibold mr-1">Overview:</span>
                        {movie.overview}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold mr-1">
                            Date Released:
                        </span>
                        {movie.release_date || movie.first_air_date}
                    </p>
                    <p className="mb-2 flex items-center flex-row">
                        <span className="font-semibold mr-1">
                            <FiThumbsUp className="h-5" />
                        </span>
                        {movie.vote_count}
                    </p>
                </div>
            </div>
        </div>
    );
}
