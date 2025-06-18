import Link from "next/link"

export default function MoviesPage() {
    const movies = [
        { id: 1, title: "Inception" },
        { id: 2, title: "Interstellar" },
        { id: 3, title: "Darl Knight" },
    ]
    return (
        <>
            <div className="bg-gray-900 min-h-screen p-8">
                <ul className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-6">
                    {movies.map(movie => (
                        <li key={movie.id} className="bg-gray-600 p-6 shadow-xl rounded-lg hover:shadow-2xl transition-all duration-300">
                            <Link href={`/movies/${movie.id}`} className="text-2xl font-bold text-blue-300 hover:text-blue-500">{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}