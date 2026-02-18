import React, { useEffect, useState } from "react";
import { Spin } from "antd"; // Import the Spin component from antd
import useMentorStore from "../store/mentors";
import MentorCard from "@/components/MentorCard";
import Layout from "@/components/Layout";
import mentorApi from "@/aipManager/mentor";

const AllMentors = () => {
  const { mentorsData, setMentorsData } = useMentorStore();
  const [loading, setLoading] = useState(false); // State for tracking loading status

  // Fetch mentors when the component mounts if mentorsData is empty
  useEffect(() => {
    const fetchAllMentors = async () => {
      setLoading(true); // Start loading
      try {
        const response = await mentorApi.getAllMentors();
        const allMentors = response?.data?.mentors || [];
        setMentorsData(allMentors); // Store all mentors in the Zustand store
      } catch (error) {
        console.error("Error fetching mentors:", error);
      } finally {
        setLoading(false); // Stop loading once the request completes
      }
    };

    if (mentorsData.length === 0) {
      fetchAllMentors();
    }
  }, [mentorsData, setMentorsData]);

  return (
    <Layout>
      <div className="w-full py-16 bg-gradient-to-b from-green-950 via-green-900 to-green-950">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2
            className="
          mb-12
          text-4xl font-bold text-center
          text-yellow-300
          tracking-wide
          drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]
        "
          >
            Book Your Session Now
          </h2>

          {/* Search Bar */}
          <div className="flex justify-center mb-16">
            <input
              type="text"
              placeholder="Search here..."
              className="
            w-full sm:w-2/3 md:w-1/2
            px-6 py-3
            bg-green-900/40
            backdrop-blur-md
            border border-yellow-400/30
            rounded-xl
            text-yellow-200
            placeholder-yellow-200/50
            focus:outline-none
            focus:border-yellow-400
            focus:shadow-[0_0_15px_rgba(250,204,21,0.4)]
            transition-all duration-300
          "
            />
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex justify-center my-16">
              <Spin size="large" style={{ color: "#facc15" }} />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              {mentorsData.length > 0 ? (
                mentorsData.map((mentor) => (
                  <MentorCard key={mentor?._id} mentor={mentor} />
                ))
              ) : (
                <p className="col-span-4 text-center text-yellow-200/70 text-lg">
                  No mentors available.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllMentors;
