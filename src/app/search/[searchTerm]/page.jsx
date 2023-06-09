import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";

const SearchPage = async ({ params }) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
    );

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    const data = await res.json();
    const results = data.results.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
    );

    return (
        <div>
            {results && results.length === 0 && (
                <h1 className="text-center pt-6">No results found</h1>
            )}

            {results && (
                <div>
                    <SearchBox />
                    <Results results={results} />
                </div>
            )}
        </div>
    );
};

export default SearchPage;
