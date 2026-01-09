function Education() {
  return (
    <section
      id="education"
      className="py-28 scroll-mt-24 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
            Education
          </h2>
          <p className="mt-3 text-slate-400">
            Academic background and qualifications
          </p>
          <div className="mt-4 flex justify-center">
            <span className="h-1 w-16 rounded-full bg-sky-400"></span>
          </div>
        </div>

        {/* EDUCATION CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* SSC */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/30">
            <h3 className="text-lg font-semibold text-slate-100">
              Secondary School Certificate (SSC)
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              State Board
            </p>
            <p className="mt-2 text-sm text-slate-500">
              2019
            </p>
            <span>CGPA : 9.2</span>
          </div>

          {/* DIPLOMA */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/30">
            <h3 className="text-lg font-semibold text-slate-100">
              Diploma - Electrical & Electronics Engg
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Sree Vidyanikethan Engg College.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              2019 - 2022
            </p>
            <span>
              Percentage : 91.6
            </span>
          </div>

          {/* B.TECH */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl p-6 shadow-lg shadow-black/30">
            <h3 className="text-lg font-semibold text-slate-100">
              Bachelor of Technology (B.Tech) - EEE
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              PBR Visvodaya Institute of Technology & Science
            </p>
            <p className="mt-2 text-sm text-slate-500">
              2022 - 2025
            </p>
            <span>CGPA : 8.6</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
