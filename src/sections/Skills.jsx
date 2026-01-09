function Skills() {
  return (
    <section
      id="skills"
      className="py-28 scroll-mt-24 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
            Skills
          </h2>
          <div className="mt-3 flex justify-center">
            <span className="h-1 w-16 rounded-full bg-sky-400"></span>
          </div>
        </div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* FRONTEND */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-5">
              <h3 className="text-lg font-semibold text-white">
                Frontend Development
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Modern, responsive user interfaces
              </p>
            </div>
            <div className="p-5 space-y-3 text-sm text-slate-300">
              <p>▢ React.js</p>
              <p>▢ Next.js</p>
              <p>▢ JavaScript (ES6+)</p>
              <p>▢ Tailwind CSS</p>
              <p>▢ Bootstrap</p>
              <p>▢ HTML / CSS</p>
            </div>
          </div>

          {/* BACKEND */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-cyan-500 p-5">
              <h3 className="text-lg font-semibold text-white">
                Backend Development
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Scalable APIs & server-side logic
              </p>
            </div>
            <div className="p-5 space-y-3 text-sm text-slate-300">
              <p>▢ Node.js</p>
              <p>▢ Express.js</p>
              <p>▢ REST APIs</p>
              <p>▢ JWT Authentication</p>
              <p>▢ Django</p>
            </div>
          </div>

          {/* DATABASE */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-5">
              <h3 className="text-lg font-semibold text-white">
                Databases
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Structured & optimized data storage
              </p>
            </div>
            <div className="p-5 space-y-3 text-sm text-slate-300">
              <p>▢ MongoDB</p>
              <p>▢ Mongoose</p>
              <p>▢ Schema Design</p>
              <p>▢ SQL</p>
            </div>
          </div>

          {/* PROGRAMMING LANGUAGES */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-5">
              <h3 className="text-lg font-semibold text-white">
                Programming Languages
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Core languages for development
              </p>
            </div>
            <div className="p-5 space-y-3 text-sm text-slate-300">
              <p>▢ JavaScript</p>
              <p>▢ Python</p>
              <p>▢ C++ (Basic)</p>
            </div>
          </div>

          {/* TOOLS */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-5">
              <h3 className="text-lg font-semibold text-white">
                Tools & Platforms
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Development & deployment tools
              </p>
            </div>
            <div className="p-5 space-y-3 text-sm text-slate-300">
              <p>▢ Git & GitHub</p>
              <p>▢ Postman</p>
              <p>▢ Vercel</p>
              <p>▢ Render</p>
            </div>
          </div>

          {/* SOFT SKILLS */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-slate-500 to-slate-700 p-5">
              <h3 className="text-lg font-semibold text-white">
                Soft Skills
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Professional & interpersonal skills
              </p>
            </div>
            <div className="p-5 space-y-3 text-sm text-slate-300">
              <p>▢ Problem Solving</p>
              <p>▢ Logical Thinking</p>
              <p>▢ Continuous Learning</p>
              <p>▢ Team Collaboration</p>
            </div>
          </div>

                  {/* DATA SKILLS */}
        <div className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-5">
            <h3 className="text-lg font-semibold text-white">
              Data Skills
            </h3>
            <p className="text-sm text-white/80 mt-1">
              Data analysis, visualization & reporting
            </p>
          </div>

          <div className="p-5 space-y-3 text-sm text-slate-300">
            <p>▢ Microsoft Excel</p>
            <p>▢ Power BI</p>
            <p>▢ Data Cleaning</p>
            <p>▢ Data Visualization</p>
            <p>▢ Dashboard Design</p>
          </div>
        </div>


        </div>
      </div>
    </section>
  );
}

export default Skills;
