import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";
import mentorApi from "@/aipManager/mentor";
import Layout from "@/components/Layout";
import ServiceCardUserSide from "@/components/ServiceCardUserSide";

const MentorDetails = () => {
  const { username } = useParams();
  const [mentor, setMentor] = useState(null);
  const [services, setServices] = useState([]);
  const [mentorLoading, setMentorLoading] = useState(true); // Loading state for mentor details
  const [servicesLoading, setServicesLoading] = useState(true); // Loading state for services
  const [error, setError] = useState(null); // Error state to handle API errors

  // Fetch mentor details and services
  useEffect(() => {
    const fetchMentorDetails = async () => {
      try {
        setMentorLoading(true);
        setServicesLoading(true);

        // Fetch mentor details and services
        const response = await mentorApi.getMentorsByUsername(username);

        if (response?.data?.mentor) {
          setMentor(response.data.mentor);
          setServices(response.data.mentor.services || []); // Set services if available
          // console.log(response.data.services);
        } else {
          setError("Mentor not found.");
        }
        setMentorLoading(false);
        setServicesLoading(false);
      } catch (error) {
        console.error("Error fetching mentor details:", error);
        setError("Failed to fetch mentor details. Please try again.");
        setMentorLoading(false);
        setServicesLoading(false);
      }
    };

    fetchMentorDetails();
  }, [username]);

  return (
    <Layout>
      <div className="h-screen mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Mentor's Profile */}
          <div className="col-span-1 p-6">
            {mentorLoading ? (
              <div className="flex items-center justify-center h-full">
                <Spin size="large" />
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-full text-red-500">
                <BiErrorAlt className="w-24 h-24 mb-4" />
                <h3 className="text-xl font-semibold">{error}</h3>
              </div>
            ) : mentor ? (
              <>
                <img
                  src={
                    mentor?.photoUrl ||
                    `https://ui-avatars.com/api?name=${mentor?.name}`
                  }
                  alt={`${mentor?.name}'s avatar`}
                  className="w-48 h-48 mx-auto border rounded-full"
                />
                <h2 className="mt-4 text-3xl font-bold text-center">
                  {mentor?.name}
                </h2>
                <p className="mt-2 text-center text-gray-600">
                  {mentor?.profile?.title}
                </p>
                <div className="flex justify-center mt-4">
                  {mentor?.profile?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 mx-1 text-xs bg-gray-100 rounded-full"
                    >
                      {tag || "Tags"}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-center text-gray-500">
                  {mentor?.profile?.bio || "Mentor bio"}
                </p>
                <h3 className="mt-8 text-lg font-semibold text-center">
                  Connect with me
                </h3>
                <div className="flex justify-center mt-4 space-x-4">
                  <a
                    href={
                      mentor?.profile?.social?.linkedin ||
                      "https://www.linkedin.com"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin className="text-3xl text-blue-600" />
                  </a>
                  <a
                    href={
                      mentor?.profile?.social?.github ||
                      "https://www.github.com"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub className="text-3xl text-gray-800" />
                  </a>
                  <a
                    href={
                      mentor?.profile?.social?.twitter ||
                      "https://www.twitter.com"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillTwitterCircle className="text-3xl text-blue-400" />
                  </a>
                  <a
                    href={
                      mentor?.profile?.social?.facebook ||
                      "https://www.facebook.com"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillFacebook className="text-3xl text-blue-700" />
                  </a>
                  <a
                    href={
                      mentor?.profile?.social?.instagram ||
                      "https://www.instagram.com"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram className="text-3xl text-pink-500" />
                  </a>
                </div>
              </>
            ) : (
              <p>Mentor not found.</p>
            )}
          </div>

          {/* Mentor's Services */}
          <div className="col-span-2 p-6 h-screen bg-[#F5F5F5]">
            <h3 className="mb-4 text-2xl font-bold">Book a Session</h3>

            {servicesLoading ? (
              <div className="flex items-center justify-center h-full">
                <Spin size="large" />
              </div>
            ) : services.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <ServiceCardUserSide
                    username={mentor?.username}
                    service={service}
                    key={service?._id}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-700">
                <BiErrorAlt className="w-24 h-24 mb-4 text-orange-color" />
                <h3 className="mb-2 text-xl font-semibold">
                  Oops! No Services Available
                </h3>
                <p className="mb-6 text-lg text-gray-500">
                  It seems like there are no services available at the moment.
                  Please check back later!
                </p>
                <button
                  className="px-6 py-3 text-white transition-colors bg-orange-color rounded-lg shadow-lg hover:bg-orange-color"
                  onClick={() => window.location.reload()}
                >
                  Refresh
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentorDetails;
