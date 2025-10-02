import {Link} from "react-router-dom";
import clsx from "clsx"

function MovieCard({ id, title, posterUrl }) {
    return (
        <div className="relative cursor-pointer">
            <Link to={`/movie/${id}`} className="flex flex-col justify-center items-center">
                <div
                    className={clsx(
                        "relative aspect-[2/3]",
                        "w-[130px] sm:w-[180px] md:w-[230px] xl:w-[250px]",
                        "hover:scale-105 transition-transform duration-300 ease-in-out"
                    )}
                >
                    <img
                        src={posterUrl}
                        alt=""
                        className="w-full h-full  rounded-md"
                    />
                </div>

                <p
                    className={clsx(
                        "pt-5 text-white uppercase font-roboto text-center",
                        "text-[13px] md:text-md xl:text-xl",
                        "w-[160px] md:w-[200px] xl:w-[240px]"
                    )}
                >
                    {title}
                </p>
            </Link>
        </div>

    );
}

export default MovieCard;
