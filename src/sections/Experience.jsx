function Experience() {
  return (
    <section
      id="experience"
      className="py-28 scroll-mt-24 border-b border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
            Experience
          </h2>
          <p className="mt-3 text-slate-400">
            Internship and hands-on development experience
          </p>
          <div className="mt-4 flex justify-center">
            <span className="h-1 w-16 rounded-full bg-sky-400"></span>
          </div>
        </div>

        {/* EXPERIENCE CARD */}
        <div className="bg-[#020617] border border-white/10 rounded-2xl p-8">

          {/* ROLE + ORG */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <div>
              <h3 className="text-xl font-semibold text-slate-100">
                Frontend Web Developer Intern
              </h3>
              <p className="text-sm text-slate-400">
                Edunet Foundation · AICTE Initiative
              </p>
            </div>
            <p className="text-sm text-slate-500">
              Aug 2025 – Sept 2025
            </p>
          </div>

          {/* DESCRIPTION */}
          <ul className="mt-6 text-slate-400 space-y-2 text-sm leading-relaxed">
            <li>
              • Developed a Swiggy-inspired food delivery UI using modern frontend technologies.
            </li>
            <li>
              • Integrated live APIs to dynamically fetch and display restaurant and food data.
            </li>
            <li>
              • Built responsive and reusable components using React.js and Tailwind CSS.
            </li>
            <li>
              • Implemented client-side logic for data rendering, UI states, and interactions.
            </li>
            <li>
              • Focused on clean UI structure, component reusability, and responsive design.
            </li>
          </ul>

          {/* TECH STACK */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full border-5 border-white/10 text-slate-200">
              HTML
            </span>
            <span className="px-3 py-1 rounded-full border-5 border-white/10 text-slate-200">
              CSS
            </span>
            <span className="px-3 py-1 rounded-full border-5 border-white/10 text-slate-200">
              JavaScript
            </span>
            <span className="px-3 py-1 rounded-full border-5 border-white/10 text-slate-200">
              React.js
            </span>
            <span className="px-3 py-1 rounded-full border-5 border-white/10 text-slate-200">
              Tailwind CSS
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
