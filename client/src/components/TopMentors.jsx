import React, { useEffect, useState } from 'react';
import useMentorStore from '@/store/mentors';
import mentorApi from '@/aipManager/mentor';
import MentorCard from './MentorCard';

const TopMentors = () => {
  const[topMentors,setTopMentors]=useState([]);
  const[loading,setLoading]=useState(false);
  const{setMentorsData}=useMentorStore();
  
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


  const fetchAllMentors=async()=>{
    try{
      const response=await mentorApi.getAllMentors();
      console.log("getting data from mentors api");
      console.log(response);
      
      
      const allMentors=response?.data?.mentors || [];
      setMentorsData(allMentors);
      setTopMentors(selectTopMentor(allMentors))

      console.log("All mentors:", response.data.mentors);


    }
    catch(e){
      console.log(e);
      
    }
  }
  useEffect(()=>{
    console.log("Top mentors state:", topMentors);
    fetchAllMentors();
  },[])
  return (
   <>
<section className="relative w-full min-h-screen
bg-gradient-to-b from-green-950 via-green-900 to-green-950
overflow-hidden">

  {/* Glow Effects */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lime-400/20 blur-3xl rounded-full"></div>

  {/* Centered Content */}
  <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-24">
    
    {/* Heading */}
    <h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-16
      bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
      bg-clip-text text-transparent">
      Top Mentors
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {topMentors.map((mentor) => (
        <MentorCard mentor={mentor} key={mentor?._id} />
      ))}
    </div>

  </div>
</section>

   </>
  )
}

export default TopMentors