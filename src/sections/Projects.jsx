import ImageSlider from "../components/ImageSlider";

import chai1 from "../assets/projects/chai1.png";
import chai2 from "../assets/projects/chai2.png";
import chai3 from "../assets/projects/chai3.png";

import store1 from "../assets/projects/store1.png";
import store2 from "../assets/projects/store2.png";

function Projects() {
  return (
    <section
      id="projects"
      className="py-28 scroll-mt-24 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
            Projects
          </h2>
          <p className="mt-3 text-slate-400">
            Real-world applications with measurable impact
          </p>
          <div className="mt-4 flex justify-center">
            <span className="h-1 w-16 rounded-full bg-sky-400"></span>
          </div>
        </div>

        <div className="space-y-20">

          {/* ================= CHAI BUSTER ================= */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl p-8">

            {/* TITLE + BUTTONS */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  Chai Buster
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Tech Stack: React · Node · Express · MongoDB Atlas · JWT
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="px-5 py-3 rounded-lg bg-sky-500 text-black text-sm font-semibold hover:bg-sky-400 transition"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  className="px-5 py-3 rounded-lg border border-white/10 text-sky-400 text-sm hover:bg-white/5 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* DESCRIPTION */}
            <ul className="mt-6 text-slate-400 space-y-2 text-sm leading-relaxed">
              <li>• Built a full-stack MERN e-commerce platform for tea and snacks ordering.</li>
              <li>• Designed secure REST APIs with JWT-based authentication.</li>
              <li>• Implemented cart, product, and user management using MongoDB Atlas.</li>
              <li>• Deployed frontend and backend separately and resolved CORS issues.</li>
            </ul>

            {/* METRICS */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Metric label="Auth Flow" value="JWT Based" />
              <Metric label="Architecture" value="Modular APIs" />
              <Metric label="Deployment" value="Frontend + Backend" />
              <Metric label="Database" value="MongoDB Atlas" />
            </div>

            {/* MEDIA */}
            <div className="mt-8 flex justify-center">
              <div className="h-52 w-full md:w-[480px]">
                <ImageSlider images={[chai1, chai2, chai3]} />
              </div>
            </div>

          </div>

          {/* ================= VIJAY STORES ================= */}
          <div className="bg-[#020617] border border-white/10 rounded-2xl p-8">

            {/* TITLE + BUTTON */}
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  Vijay Stores
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Tech Stack: Node · Express · MongoDB · Mongoose · Pug · Bootstrap
                </p>
              </div>

              <a
                href="#"
                className="px-5 py-2 rounded-lg border border-white/10 text-sky-400 text-sm hover:bg-white/5 transition"
              >
                GitHub
              </a>
            </div>

            {/* DESCRIPTION */}
            <ul className="mt-6 text-slate-400 space-y-2 text-sm leading-relaxed">
              <li>• Developed a backend-driven e-commerce system with cart functionality.</li>
              <li>• Optimized MongoDB queries and API response handling.</li>
              <li>• Reduced redundant DB calls to improve cart performance.</li>
              <li>• Measured performance using Express timing logs and Chrome DevTools.</li>
            </ul>

            {/* METRICS */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Metric label="Response Time" value="1.4s → 400ms" />
              <Metric label="Optimization" value="Query Level" />
              <Metric label="Cart Latency" value="Reduced" />
              <Metric label="Backend Focus" value="Performance" />
            </div>

            {/* MEDIA */}
            {/* MEDIA */}
            <div className="mt-8 flex justify-center">
              <div className="h-52 w-full md:w-[480px]">
                <ImageSlider images={[store1,store2]} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* METRIC COMPONENT */
function Metric({ label, value }) {
  return (
    <div className="border border-white/10 rounded-xl p-4 text-center">
      <p className="text-lg font-semibold text-slate-100">{value}</p>
      <p className="text-xs text-slate-400 mt-1">{label}</p>
    </div>
  );
}

export default Projects;
