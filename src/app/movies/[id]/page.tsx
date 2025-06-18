import { FaComment, FaStar } from "react-icons/fa";

interface MovieProps {
    params: {
        id: string,
    }
}


export default function MovieDetails({ params }: MovieProps) {
    const movies = [
        {
            id: "1",
            title: "Inception",
            comments: 122,
            rating: 4.7,
            description: "A mind-bending thriller by Chirstopher Nolan.",
            commentList: ["amazing moive", "Best thriller", "Highly Recommended"]
        },
        {
            id: "2",
            title: "Interstellar",
            comments: 231,
            rating: 4.8,
            description: "A space exploration by Chirstopher Nolan.",
            commentList: ["Top rated", "Best Music", "Great Script, Great Story"]
        },
        {
            id: "3",
            title: "The Dark Knight",
            comments: 125,
            rating: 4.9,
            description: "The iconic Batman film by Chirstopher Nolan.",
            commentList: ["Loved it", "Best Movie I have ever watched", "Highly Recommended"]
        }
    ]
    const movie = movies.find((m) => m.id === params.id);
    return (
        <>
            <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg">
                    <h2 className="font-semibold text-4xl mb-4">{movie?.title}</h2>
                    <p className="text-lg text-gray-300">{movie?.description}</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <p className="text-xl text-gray-300">Rating:  </p>
                            <div className="flex items-center text-yellow-500">
                                <FaStar className="mr-1" />
                                <span className="text-2xl font-bold">{movie?.rating}</span> /5
                            </div>
                        </div>
                        <div>
                            <p className="text-xl text-gray-300">Comments:</p>
                            <div className="flex items-center justify-center">
                                <FaComment className="mr-1" />
                                <span className="text-2xl font-bold">{movie?.comments}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Comments List */}
                <div>
                    <h3 className="text-3xl font-semibold mb-4">Comments</h3>
                    <ul className="space-y-4">
                        {movie?.commentList.map((comment, index) => (
                            <li key={index} className="bg-gray-800 p-4">
                                <p className="text-gray-300">{comment}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}