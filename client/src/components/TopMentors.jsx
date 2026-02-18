import React, { useEffect, useState } from "react";
import useMentorStore from "@/store/mentors";
import mentorApi from "@/aipManager/mentor";
import MentorCard from "./MentorCard";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const TopMentors = () => {
  const [topMentors, setTopMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setMentorsData } = useMentorStore();

  // const selectTopMentor=(mentors)=>{
  //   const topselectedMentors=[];
  //   const totalMentors=mentors.length;

  //   while(topselectedMentors<4 && topselectedMentors.length<totalMentors){
  //     const randomIndex=Math.floor(Math.random()*totalMentors);
  //     const randomMentor=mentors[randomIndex];
  //     if(!topselectedMentors.includes(randomMentor)){
  //       topselectedMentors.push(randomMentor)
  //     }
  //   }
  //   return topselectedMentors;

  // }

  const selectTopMentor = (mentors) => {
    if (!mentors || mentors.length === 0) return [];

    const shuffled = [...mentors].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const fetchAllMentors = async () => {
    try {
      const response = await mentorApi.getAllMentors();
      console.log("getting data from mentors api");
      console.log(response);

      const allMentors = response?.data?.mentors || [];
      setMentorsData(allMentors);
      setTopMentors(selectTopMentor(allMentors));

      console.log("All mentors:", response.data.mentors);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log("Top mentors state:", topMentors);
    fetchAllMentors();
  }, []);
  return (
    <>


      <section
        className="relative w-full
bg-gradient-to-b from-green-950 via-green-900 to-green-950
overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lime-400/20 blur-3xl rounded-full"></div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto p-8">
          {/* Heading */}
          <h1
            className="text-center text-4xl sm:text-5xl font-extrabold mb-16
      bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
      bg-clip-text text-transparent"
          >
            Top Mentors
          </h1>

          {loading ? (
            <div className="flex justify-center my-10">
              <Spin size="large" />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {topMentors.map((mentor) => {
                return <MentorCard mentor={mentor} key={mentor?._id} />;
              })}
            </div>
          )}

          <div className="mt-8 text-center">
            {/* Redesigned button */}
            <NavLink to="/mentors">
              <Button
                type="default"
                style={{
                  background: "linear-gradient(135deg, #e0e0e0, #f7f7f7)",
                  color: "#4a4a4a",
                  padding: "12px 20px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  border: "none",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background =
                    "linear-gradient(135deg, #d1d1d1, #bfbfbf)";
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background =
                    "linear-gradient(135deg, #e0e0e0, #f7f7f7)";
                  e.target.style.color = "#4a4a4a";
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                View All
              </Button>
            </NavLink>
          </div>

          
        </div>
      </section>

    



    </>
  );
};

export default TopMentors;
