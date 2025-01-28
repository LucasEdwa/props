import { useState, FormEvent } from "react";
import { IMovie } from "../../models/IMovies";
import { getMovies } from "./services/movieService";

export const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>(
        JSON.parse(localStorage.getItem("movies") || "[]")
    );
    const [input, setInput] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        try {
            const movies = await getMovies(input);
            setMovies(movies || []);
            localStorage.setItem("movies", JSON.stringify(movies || []));
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="py-2 flex justify-center lg:w-1/2 items-center">
                <input
                    type="text"
                    className="w-full border"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="bg-primary text-white p-1 rounded-sm">
                    Search
                </button>
            </form>
            <div className="flex flex-col gap-8 lg:grid grid-cols-5">
                {movies.length > 0 ? (
                    movies.map((m) => (
                        <div key={m.imdbID} className="flex flex-col gap-4">
                            <h3 className="text-center text-2xl">{m.Title}</h3>
                            <img src={m.Poster} alt={m.Title} />
                        </div>
                    ))
                ) : (
                    <p>No Movies found. Try Searching something else!</p>
                )}
            </div>
        </>
    );
};
