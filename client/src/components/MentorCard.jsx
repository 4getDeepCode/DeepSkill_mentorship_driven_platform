import React from "react";
import { FaUniversity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MentorCard = ({ mentor }) => {
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/mentor/${mentor?.username}`);
  };

  return (
    <div
      onClick={onCardClick}
      className="
    relative w-80 h-80
    flex flex-col justify-center items-center
    rounded-2xl
    bg-green-900/40
    backdrop-blur-md
    border border-yellow-400/20
    shadow-[0_0_30px_rgba(250,204,21,0.1)]
    cursor-pointer
    transition-all duration-300
    hover:scale-105
    hover:shadow-[0_0_50px_rgba(250,204,21,0.3)]
  "
    >
      {/* Avatar Section */}
      <div className="relative group w-40 h-40 rounded-full overflow-hidden border-2 border-yellow-400/40 shadow-[0_0_20px_rgba(250,204,21,0.2)]">
        <img
          src={
            mentor?.photoUrl ||
            `https://ui-avatars.com/api?name=${mentor?.name}`
          }
          alt={`${mentor?.name}'s avatar`}
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-full"></div>

        <div className="absolute bottom-2 left-0 w-full text-center">
          <h4 className="text-sm font-semibold text-yellow-300 group-hover:text-yellow-400 transition">
            {mentor?.profile?.title || "Title"}
          </h4>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-5 text-center">
        <h3 className="text-2xl font-bold text-yellow-300 transition group-hover:text-yellow-400">
          {mentor?.name || "Name"}
        </h3>

        <div className="flex items-center justify-center gap-x-2 mt-2 text-yellow-200/80">
          <FaUniversity className="text-yellow-400" />
          <p className="text-sm">{mentor?.profile?.college || "College"}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {mentor?.profile?.tags?.map((tag, index) => (
            <span
              key={index}
              className="
            px-3 py-1 text-xs font-medium
            text-yellow-300
            bg-yellow-400/10
            border border-yellow-400/20
            rounded-full
            transition
            hover:bg-yellow-400/20
            hover:shadow-[0_0_10px_rgba(250,204,21,0.4)]
          "
            >
              {tag || "Tag"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
