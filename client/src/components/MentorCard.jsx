import React from "react";

const MentorCard = ({ mentor }) => {
  return (
    <div
      className="p-6 rounded-2xl
      bg-green-900/40 backdrop-blur-xl
      border border-yellow-400/20
      transition-all duration-300
      hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]
      hover:-translate-y-1"
    >
      <img
        src={mentor.profileImage}
        alt={mentor.name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-yellow-300">{mentor?.name}</h3>

      {/* <p className="mt-2 text-yellow-200/80">Username: {mentor?.username}</p> */}

      <p className="mt-1 text-yellow-200/70">
       {mentor?.profile?.title || "No title available"}
      </p>
    </div>
  );
};

export default MentorCard;
