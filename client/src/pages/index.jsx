import Navbar from "@/components/Navbar";
import React from "react";
import { NavLink } from "react-router-dom";
import mentor from "../assets/mentor.png";
import FAQSection from "./FAQSection";
import TopMentors from "@/components/TopMentors";

const Home = () => {
  return (
    <>
      <Navbar />
      
      {/* hero section */}
      <div className="bg-gradient-to-b from-green-950 via-green-900 to-green-950">
        <section className="relative py-20 px-6  overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1
                className="text-4xl md:text-6xl font-extrabold leading-tight
          bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
          bg-clip-text text-transparent"
              >
                Cultivate Your Future. Grow with a Mentor
              </h1>

              <p className="mt-6 text-lg md:text-2xl text-yellow-200/90">
                Unlock your potential in creative fields, life skills, and peer
                learning.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <NavLink to="/mentors">
                  <button
                    className="px-10 py-4 text-lg font-semibold text-green-950 rounded-full
              bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
              hover:from-yellow-300 hover:to-lime-500
              transition-all duration-300
              hover:shadow-[0_0_25px_rgba(250,204,21,0.8)]
              hover:-translate-y-1"
                  >
                    Find a Mentor
                  </button>
                </NavLink>

                <button
                  className="px-10 py-4 text-lg font-semibold rounded-full
            border border-yellow-400/40 text-yellow-300
            hover:bg-yellow-400/10 transition"
                >
                  Become a Mentor
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center relative">
              <div className="relative group">
                {/* Image Glow */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r
            from-yellow-400/30 to-lime-400/30 blur-xl
            group-hover:blur-2xl transition"
                ></div>

                <img
                  className="relative w-full max-w-lg rounded-2xl shadow-2xl
            transform group-hover:scale-105 transition duration-500"
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=870&auto=format&fit=crop"
                  alt="Mentorship Hub"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}

      <section className="relative overflow-hidden bg-gradient-to-b from-green-950 via-green-900 to-green-950">
        <div className="relative px-4 sm:px-6 py-16 sm:py-20 md:py-24 mx-auto max-w-screen-xl">
          {/* Background glow */}
          <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-lime-400/20 blur-3xl rounded-full"></div>

          <div className="relative flex flex-col overflow-hidden rounded-2xl bg-green-900/80 backdrop-blur border border-yellow-400/20 shadow-2xl lg:flex-row">
            {/* Image Section */}
            <div className="relative lg:w-1/2 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 to-lime-400/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <img
                src={mentor}
                alt="DeepSkill Mentoring"
                className=" relative object-cover w-full h-64 sm:h-72 md:h-80 lg:h-full transform group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-16 lg:w-1/2 flex flex-col justify-center">
              <h5 className="  mb-5 font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400 bg-clip-text text-transparent">
                Boost Your Career with DeepSkill
              </h5>

              <p className="mb-8 text-base sm:text-lg md:text-xl text-yellow-200/90 leading-relaxed">
                <span className="font-semibold text-yellow-300">DeepSkill</span>{" "}
                helps you connect with experienced mentors who guide you toward
                success. Whether you’re building new skills, planning your
                career, or improving yourself personally, DeepSkill empowers you
                at every step.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
                <button className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 rounded-full font-semibold text-green-950 bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400 hover:from-yellow-300 hover:to-lime-500 transition-all duration-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] hover:-translate-y-1 ">
                  Step into DeepSkill
                </button>

                <a
                  href="/learn-more"
                  className="inline-flex items-center justify-center font-semibold text-yellow-300 hover:text-yellow-400 transition"
                >
                  Explore More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.742a6.5 6.5 0 1 0-1.414 1.414l3.181 3.181a1 1 0 1 0 1.415-1.414l-3.182-3.181zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* feature section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-950 via-green-900 to-green-950 px-4 py-16 sm:py-20">
        <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-lime-400/20 blur-3xl rounded-full"></div>
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6
        bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
        bg-clip-text text-transparent"
            >
              Empower Your Growth Journey with DeepSkill
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-yellow-200/90">
              DeepSkill connects you with the right mentors to help you grow
              faster, smarter, and stronger—professionally and personally.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Career Guidance",
                desc: "Gain insights from seasoned mentors and get support with resumes, interviews, and career growth.",
              },
              {
                title: "Personalized Learning Paths",
                desc: "Custom learning plans designed around your goals to keep you focused and motivated.",
              },
              {
                title: "Affordable and Flexible",
                desc: "Mentorship that fits your budget and schedule without compromising quality.",
              },
              {
                title: "Build Valuable Networks",
                desc: "Create lasting relationships with mentors and professionals in your field.",
              },
              {
                title: "Continuous Progress Tracking",
                desc: "Track goals, milestones, and achievements with built-in progress tools.",
              },
              {
                title: "Global Mentorship Opportunities",
                desc: "Connect with mentors worldwide and gain diverse, global perspectives.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl p-6 sm:p-8
          bg-green-900/80 backdrop-blur border border-yellow-400/20
          shadow-xl transition-all duration-300
          hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r
            from-yellow-400/10 to-lime-400/10 opacity-0
            group-hover:opacity-100 transition"
                ></div>

                <h6 className="relative text-xl font-semibold text-yellow-300 mb-4">
                  {item.title}
                </h6>

                <p className="relative text-sm sm:text-base text-yellow-200/90 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <a
                  href="/"
                  className="relative inline-flex items-center font-semibold text-yellow-400
            hover:text-yellow-300 transition"
                >
                  Learn More
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}

      <section className="relative overflow-hidden px-6 py-14 sm:py-20 bg-gradient-to-b from-green-950 via-green-900 to-green-950">
        {/* Background glow */}
        <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-lime-400/20 blur-3xl rounded-full"></div>

        <div className="relative max-w-screen-xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold
        bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
        bg-clip-text text-transparent"
            >
              Learn, Grow, and Succeed with DeepSkill Mentorship
            </h2>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-yellow-200/90">
              Join DeepSkill today and connect with mentors who guide you
              towards your goals. <br className="hidden sm:block" />
              Follow our easy steps to start achieving more with personalized
              mentorship.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center text-left">
            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0 bg-gradient-to-tr
          from-yellow-400/20 to-lime-400/20 opacity-0
          group-hover:opacity-100 transition"
              ></div>

              <img
                src={mentor}
                alt="Mentorship Journey"
                className="relative w-full h-64 sm:h-80 md:h-[420px]
          object-cover rounded-2xl shadow-2xl
          transform group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* Steps */}
            <ul className="space-y-6 sm:space-y-8">
              {[
                {
                  n: 1,
                  title: "Create Your Profile",
                  desc: "Start your DeepSkill journey by creating a personalized profile. Share your goals, interests, and areas for growth to help us match you with the right mentor.",
                },
                {
                  n: 2,
                  title: "Browse Mentor Profiles",
                  desc: "Explore a wide variety of mentors from diverse fields. Use filters to find experts with the skills and experience that match your goals.",
                },
                {
                  n: 3,
                  title: "Select Your Ideal Mentor",
                  desc: "Review mentor profiles, read testimonials, and choose someone who aligns with your personal or professional growth journey.",
                },
                {
                  n: 4,
                  title: "Schedule Your First Session",
                  desc: "Find a time that works for you and your mentor. Schedule your first session and kickstart your growth with expert guidance.",
                },
                {
                  n: 5,
                  title: "Achieve Milestones Together",
                  desc: "Work closely with your mentor to develop key skills, stay motivated, and hit your personal or professional milestones.",
                },
              ].map((step) => (
                <li
                  key={step.n}
                  className="group flex items-start gap-5 p-5 sm:p-6
            rounded-2xl
             bg-green-900/80 backdrop-blur
            border border-yellow-400/20 shadow-lg
            transition-all duration-300 hover:-translate-y-1
            hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]"
                >
                  {/* Number */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full
              flex items-center justify-center font-bold text-green-950
              bg-gradient-to-r from-yellow-400 to-lime-400"
                  >
                    {step.n}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-yellow-300 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-yellow-200/90">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mentor Categories Section */}
      <section className="relative overflow-hidden px-6 py-20 bg-gradient-to-b from-green-950 via-green-900 to-green-950">
        {/* Background glow */}
        <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-lime-400/20 blur-3xl rounded-full"></div>

        <div className="relative container mx-auto max-w-screen-xl z-10">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2
                className="text-4xl sm:text-5xl font-extrabold
          bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
          bg-clip-text text-transparent"
              >
                Mentor, Grow with Confidence
              </h2>

              <p className="mt-6 text-lg text-yellow-200/90">
                Open the door to new opportunities through expert mentorship.
                From career growth to skill development and new discoveries,
                DeepSkill helps you find the guidance you need to move forward.
              </p>

              <a
                className="inline-flex items-center px-8 py-4 mt-8
          font-semibold rounded-full text-green-950
          bg-gradient-to-r from-yellow-400 to-lime-400
          hover:shadow-[0_0_25px_rgba(250,204,21,0.8)]
          transition-all hover:-translate-y-1"
              >
                Get Started
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 lg:flex-1">
              {[
                "Career Coaches",
                "Business Mentors",
                "Creative Mentors",
                "Tech Experts",
                "Marketing Gurus",
                "Finance Advisors",
                "Wellness Coaches",
                "Education Mentors",
                "Social Impact Leaders",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 text-lg sm:text-xl font-semibold text-yellow-300 text-center rounded-xl
            bg-green-900/80 backdrop-blur
            border border-yellow-400/20 shadow-lg
            transition-all duration-300 hover:-translate-y-1
            hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE SECTION — FIXED */}
          <div className="relative mt-16 z-20">
            <img
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop"
              alt="Mentorship"
              className="w-full h-64 sm:h-96 object-cover rounded-2xl shadow-2xl"
            />

            {/* Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-green-900/30" />
          </div>
        </div>
      </section>

      {/* Featching Mentors */}
      <section
        style={{
          background: "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
          backgroundSize: "200% 200%",
          animation: "gradientAnimation 6s ease infinite",
        }}
      >
        <div className=" mx-auto w-full">
          <TopMentors />
        </div>
      </section>

      {/* Pricing Section */}
      <section
        className="relative px-6 py-24 text-center overflow-hidden
  bg-gradient-to-b from-green-950 via-green-900 to-green-950"
      >
        {/* Background glow */}
        <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-lime-400/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-screen-xl mx-auto">
          <h2
            className="mb-8 text-4xl sm:text-5xl font-extrabold
      bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
      bg-clip-text text-transparent"
          >
            Plans That Fit Your Journey
          </h2>

          <p className="max-w-3xl mx-auto mb-10 text-lg text-yellow-200/90 leading-relaxed">
            Start learning for free and upgrade when you’re ready. DeepSkill
            provides flexible, affordable plans with access to expert mentors
            and premium resources.
          </p>

          <button
            className="inline-flex items-center justify-center
      px-10 py-4 text-lg font-semibold rounded-full
      text-green-950
      bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
      transition-all duration-300
      hover:from-yellow-300 hover:to-lime-500
      hover:shadow-[0_0_25px_rgba(250,204,21,0.8)]
      hover:-translate-y-1
      disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Check Our Pricing
          </button>
        </div>
      </section>

      {/* FAQ's */}

      <FAQSection />

      {/* Call to Action */}
      <section
        className="relative px-6 py-24 text-center overflow-hidden
  bg-gradient-to-b from-green-950 via-green-900 to-green-950"
      >
        {/* Background glow */}
        <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-lime-400/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-screen-xl mx-auto">
          <h2
            className="mb-8 text-4xl sm:text-5xl font-extrabold
      bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
      bg-clip-text text-transparent"
          >
            Grow Further with the Guidance of the Right Mentor
          </h2>

          <p className="max-w-3xl mx-auto mb-12 text-lg text-yellow-200/90 leading-relaxed">
            Learn from experienced professionals who help you move closer to
            your goals. From career beginnings to skill mastery and meaningful
            connections — DeepSkill is where it all begins.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              className="inline-flex items-center justify-center
        px-10 py-4 text-lg font-semibold rounded-full
        text-green-950
        bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
        transition-all duration-300
        hover:from-yellow-300 hover:to-lime-500
        hover:shadow-[0_0_25px_rgba(250,204,21,0.8)]
        hover:-translate-y-1
        disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Get Started
            </button>

            <button
              className="inline-flex items-center justify-center
        px-10 py-4 text-lg font-semibold rounded-full
        border border-yellow-400/40 text-yellow-300
        hover:bg-yellow-400/10 transition
        disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative px-6 py-16 overflow-hidden
  bg-gradient-to-b from-green-950 via-green-900 to-green-950"
      >
        {/* Background glow */}
        <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-lime-400/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-screen-xl mx-auto text-center space-y-6">
          <h2
            className="text-xl font-semibold
      bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
      bg-clip-text text-transparent"
          >
            Connect With Us
          </h2>

          <p className="text-sm text-yellow-200/70">
            Get updates, inspiration, and mentorship tips on social media.
          </p>

          <div className="flex justify-center gap-6">
            {[
              {
                label: "Facebook",
                icon: (
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.672v-3.622h3.148V8.413c0-3.118 1.902-4.815 4.678-4.815 1.33 0 2.475.099 2.807.143v3.256h-1.923c-1.51 0-1.802.718-1.802 1.771v2.32h3.6l-.468 3.622h-3.132V24h6.144c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                ),
              },
              {
                label: "Twitter",
                icon: (
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.173-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.386 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.623-.03-.924-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.318-3.809 2.105-6.102 2.105-.394 0-.779-.023-1.17-.067 2.188 1.402 4.768 2.221 7.548 2.221 9.142 0 14.307-7.721 14.307-14.417 0-.219-.005-.436-.015-.653.983-.713 1.833-1.6 2.506-2.614z" />
                ),
              },
              {
                label: "LinkedIn",
                icon: (
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.725v20.55C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.275V1.725C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.084h3.56v11.368zm-1.78-12.85c-1.14 0-2.06-.927-2.06-2.065a2.063 2.063 0 1 1 4.12 0c0 1.138-.92 2.065-2.06 2.065zm15.172 12.85h-3.56v-5.604c0-1.34-.026-3.062-1.865-3.062-1.865 0-2.152 1.454-2.152 2.959v5.707h-3.56V9.084h3.42v1.548h.05c.476-.9 1.636-1.85 3.366-1.85 3.6 0 4.268 2.368 4.268 5.452v6.218z" />
                ),
              },
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                aria-label={item.label}
                className="p-3 rounded-full
          border border-yellow-400/30 text-yellow-300
          hover:bg-yellow-400/10
          transition-all duration-300
          hover:shadow-[0_0_15px_rgba(250,204,21,0.6)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>

          <p className="text-xs text-yellow-200/60">
            © 2026 DeepSkill. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
