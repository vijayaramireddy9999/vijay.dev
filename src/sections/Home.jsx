import profileImg from "../assets/profile.png";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 pb-24 scroll-mt-20 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* PROFILE IMAGE */}
        <div className="flex justify-center mb-10 md:mb-14">
         <img
          src={profileImg}
          alt="Vijaya Rami Reddy"
          className="
            w-36 h-36
            md:w-52 md:h-52
            rounded-full
            object-cover
            object-[90%_15%]
            border border-white/10
            shadow-[0_20px_40px_rgba(0,0,0,0.6)]
          "
        />

        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* LEFT */}
          <div>
            <p className="text-sky-400 mb-2 font-medium">
              Hi, I’m
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-slate-50">
              Vijaya Rami Reddy
            </h1>

            <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-medium text-slate-300">
              Aspiring Software Developer
            </h2>

            <p className="mt-2 text-sm sm:text-base font-medium text-green-400">
              Open to Work · MERN · Python · Frontend · Data Roles
            </p>

            <p className="mt-5 text-slate-400 max-w-xl leading-relaxed text-sm sm:text-base">
              I build scalable, real-world web applications with a strong focus on
              clean architecture, REST APIs, performance optimization, and
              data-driven UI development.
            </p>

            {/* SKILLS */}
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
              {[
                "MERN Stack",
                "React",
                "Tailwind",
                "REST APIs",
                "MongoDB",
                "Python",
                "Power BI",
                "SQL"
              ].map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CURRENT / GOAL */}
            <div className="mt-8 space-y-4 max-w-xl">
              <div>
                <p className="font-semibold text-slate-200 mb-1">
                  Currently
                </p>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Building production-ready MERN applications</li>
                  <li>• Improving problem-solving and clean code practices</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-200 mb-1">
                  Looking for
                </p>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Entry-level / Fresher Software Developer roles</li>
                  <li>• Teams where I can grow as a full-stack engineer</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT — CODE */}
          <div className="w-full">
            <pre
              className="
                w-full
                max-w-full
                bg-[#020617]
                border border-white/10
                rounded-xl
                p-4 sm:p-6
                text-xs sm:text-sm
                text-emerald-400
                leading-relaxed
                overflow-x-auto
              "
            >
{`const developerProfile = {
  name: "Vijaya Rami Reddy",
  role: "Aspiring Software Developer",
  coreStack: ["MongoDB", "Express", "React", "Node.js"],
  additionalSkills: ["Python", "Power BI"],
  strengths: [
    "Clean Architecture",
    "REST API Design",
    "Performance Optimization"
  ],
  openToWork: true
};`}
            </pre>
          </div>

        </div>

        {/* CTA BUTTONS */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="#projects"
            className="
              px-6 py-3
              rounded-lg
              bg-sky-500
              text-black
              font-semibold
              text-sm sm:text-base
              hover:bg-sky-400
              transition
              text-center
            "
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="
              px-6 py-3
              rounded-lg
              border border-white/10
              text-sky-400
              font-semibold
              text-sm sm:text-base
              hover:bg-white/5
              transition
              text-center
            "
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Home;
