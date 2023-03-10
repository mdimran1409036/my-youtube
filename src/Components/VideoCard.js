import React from "react";
import { useNavigate } from "react-router-dom";
import Description from "./Description";

function VideoCard({ video, id }) {
    const { snippet, statistics } = video;
    const { thumbnails, channelTitle } = snippet;
    const navigate = useNavigate();

    return (
        <div
            className="shadow-lg p-4 rounded mx-auto cursor-pointer hover:bg-gray-100 transition-all hover:scale-105 duration-250"
            onClick={() =>
                navigate("/watch?v=" + id)
            }
        >
            <div>
                <img
                    src={
                        thumbnails?.maxres
                            ? thumbnails?.maxres?.url
                            : thumbnails?.high?.url
                    }
                    alt={channelTitle}
                    className="border rounded-lg "
                />
            </div>
            <Description statistics={statistics} snippet={snippet} />
        </div>
    );
}

export default VideoCard;
