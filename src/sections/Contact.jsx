function Contact() {
  return (
    <section
      id="contact"
      className="py-28 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
            Contact
          </h2>
          <p className="mt-3 text-slate-400">
            Feel free to reach out for opportunities or collaboration
          </p>
          <div className="mt-4 flex justify-center">
            <span className="h-1 w-16 rounded-full bg-sky-400"></span>
          </div>
        </div>

        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT — CONTACT DETAILS */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 shadow-lg shadow-black/30">

            <h3 className="text-lg font-semibold text-slate-100 mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 text-sm text-slate-400">

              <div>
                <p className="text-slate-500 text-xs">Email</p>
                <p className="text-slate-300">
                  vijaythotireddy@gmail.com
                </p>
              </div>

              <div>
                <p className="text-slate-500 text-xs">Phone</p>
                <p className="text-slate-300">
                  +91 93xxxxxxx
                </p>
              </div>

              <div>
                <p className="text-slate-500 text-xs">Location</p>
                <p className="text-slate-300">
                  kavali,Andhra Pradesh -524201.
                </p>
              </div>

            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-8 flex gap-4 text-sm">
              <a
                href="https://github.com/vijayaramireddy9999"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border-5 border-white/10 text-sky-400 hover:bg-white/5 transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/vijaythotireddy"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border-5 border-white/10 text-sky-400 hover:bg-white/5 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl p-8 shadow-lg shadow-black/30">

            <h3 className="text-lg font-semibold text-slate-100 mb-6">
              Send a Message
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  bg-transparent
                  border border-white/10
                  rounded-lg
                  px-4 py-3
                  text-sm text-slate-300
                  focus:outline-none
                  focus:border-sky-400
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  bg-transparent
                  border border-white/10
                  rounded-lg
                  px-4 py-3
                  text-sm text-slate-300
                  focus:outline-none
                  focus:border-sky-400
                "
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="
                  w-full
                  bg-transparent
                  border border-white/10
                  rounded-lg
                  px-4 py-3
                  text-sm text-slate-300
                  focus:outline-none
                  focus:border-sky-400
                "
              ></textarea>

              <button
                type="submit"
                className="
                  w-full
                  py-3
                  rounded-lg
                  bg-sky-500
                  text-black
                  font-semibold
                  hover:bg-sky-400
                  transition
                "
              >
                Send Message
              </button>

            </form>
          </div>

          
        </div>
      </div>
      {/* DEVELOPER SUMMARY CODE BOX */}
<div className="mt-16 flex justify-center w-full">
  <pre
    className="
      w-full
      max-w-6xl
      bg-[#020617]
      border border-white/10
      rounded-2xl
      p-6
      text-sm
      text-emerald-400
      leading-relaxed
      overflow-x-auto
    "
  >
{`const candidateSummary = {
  profile: "Aspiring Software Developer",
  skillsBuilt: [
    "MERN Stack Development",
    "Frontend UI with React & Tailwind",
    "REST APIs & Backend Logic",
    "Data Analysis & Visualization"
  ],
  projectsCompleted: [
    "Full-stack E-commerce Applications",
    "API-driven Frontend Projects"
  ],
  experience: {
    internship: "Frontend Web Developer Intern",
    organization: "Edunet Foundation (AICTE)",
    focus: "Real-world UI & Live API Integration"
  },
  jobSearchStatus: {
    activelyLooking: true,
    availableForImmediateJoining: true
  }
};`}
  </pre>
</div>

    </section>
  );
}

export default Contact;
