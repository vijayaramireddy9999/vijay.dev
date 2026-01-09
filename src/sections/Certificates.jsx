import edunetCert from "../assets/certificates/Edunet.jpg";
import mernCert from "../assets/certificates/prepinsta.png";
import python from "../assets/certificates/python.jpg";
import sql from "../assets/certificates/sql.jpg";


function Certificates() {
  return (
    <section
      id="certificates"
      className="py-28 scroll-mt-24 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
            Certificates
          </h2>
          <p className="mt-3 text-slate-400">
            Certifications and training programs completed
          </p>
          <div className="mt-4 flex justify-center">
            <span className="h-1 w-16 rounded-full bg-sky-400"></span>
          </div>
        </div>

        {/* CERTIFICATES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <CertificateCard
            img={edunetCert}
            title="Frontend Web Development Internship"
            org="Edunet Foundation · AICTE Initiative"
            year="Aug 2025 – Sept 2025"
            link="#"
          />

          <CertificateCard
            img={mernCert}
            title="MERN Stack Development Training"
            org="Full-Stack Training - PrepInsta"
            year="2025"
            link="#"
          />

          <CertificateCard
            img={python}
            title="Python for Data Science"
            org="IBM"
            year="2025"
            link="#"
          />

          <CertificateCard
            img={sql}
            title="SQL and Relational Databases"
            org="IBM"
            year="2024"
            link="#"
          />


        </div>
      </div>
    </section>
  );
}

/* CERTIFICATE CARD */
function CertificateCard({ img, title, org, year, link }) {
  return (
    <div className="bg-[#020617] border border-white/10 rounded-2xl overflow-hidden shadow-lg shadow-black/30">

      {/* IMAGE */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-100 mb-1">
          {title}
        </h3>

        <p className="text-sm text-slate-400">
          {org}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {year}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block
            mt-5
            px-4 py-2
            rounded-lg
            border border-white/10
            text-sky-400
            text-sm
            hover:bg-white/5
            transition
          "
        >
          View Certificate
        </a>
      </div>

    </div>
  );
}

export default Certificates;
