import MovieVideo from "../components/MovieVideo";
import NavBar from "../components/NavBar";
import RecentlyAdded from "../components/RecentlyAdded";

export default function Home() {
    return (
        <div className="p-4 lg:p-0">
             <MovieVideo />
             <h1 className="text-white">Recently Added</h1>
             <RecentlyAdded />
        </div>
    )
}

