import Link from "next/link";
import { FaComment, FaStar } from "react-icons/fa";

export default function Home() {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 122,
      rating: 4.7,
      description: "A mind-bending thriller by Chirstopher Nolan."
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 231,
      rating: 4.8,
      description: "A space exploration by Chirstopher Nolan."
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 125,
      rating: 4.9,
      description: "The iconic Batman film by Chirstopher Nolan."
    }
  ]

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movies) => sum + movies.comments, 0);
  const averageRating = (movies.reduce((sum, movies) => sum + movies.rating, 0) / totalMovies).toFixed(1);
  return (
    <>
      <div className="p-8 min-h-screen bg-gray-900">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg">
          <h1 className="font-semibold text-2xl">Dasboard Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-6">
            <div className="bg-gray-800 p-4 flex justify-center items-center flex-col rounded-xl">
              <p className="text-lg font-medium">Total Movies</p>
              <p className="text-4xl font-bold">{totalMovies}</p>
            </div>
            <div className="bg-gray-800 p-4 flex justify-center items-center flex-col rounded-xl">
              <p className="text-lg font-medium">Total Comments</p>
              <p className="text-4xl font-bold">{totalComments}</p>
            </div>
            <div className="bg-gray-800 p-4 flex justify-center items-center flex-col rounded-xl">
              <p className="text-lg font-medium">Average Rating</p>
              <p className="text-4xl font-bold">{averageRating}</p>
            </div>
          </div>
        </div>
        {/*Movie List*/}
        <h2 className="font-bold text-2xl mt-4">Movie List</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-6">
          {movies.map(movie => (
            <li key={movie.id} className="bg-gray p-6 shadow-xl rounded-lg hover:shadow-2xl transition-all duration-300">
              <Link href={`/movies/${movie.id}`} className="text-2xl font-bold text-blue-300 hover:text-blue-500">{movie.title}</Link>
              <p className="text-gray-400 text-sm mt-2">{movie.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-sm">
                  <FaComment className="mr-1"/>
                  <span className="text-gray-400">{movie.comments}</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaStar className="mr-1"/>
                  <span className="text-gray-400">{movie.rating}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
