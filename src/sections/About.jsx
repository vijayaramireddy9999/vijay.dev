function About() {
  return (
    <section
      id="about"
      className="py-28 scroll-mt-24 border-b border-white/10"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
          About Me
        </h2>

        {/* UNDERLINE */}
        <div className="mt-3 mb-10 flex justify-center">
          <span className="h-1 w-16 rounded-full bg-sky-400"></span>
        </div>

        {/* ABOUT CONTENT */}
        <p className="text-slate-400 leading-relaxed mb-6">
          I am an aspiring software developer with a strong interest in building
          real-world, scalable web applications. I enjoy working across both
          frontend and backend, and I focus on writing clean, readable, and
          maintainable code.
        </p>

        <p className="text-slate-400 leading-relaxed mb-6">
          I approach problems by first understanding the requirements clearly,
          breaking them down into logical steps, and then implementing solutions
          that are efficient and easy to extend. I believe good software is not
          just about working code, but about clarity, structure, and long-term
          usability.
        </p>

        <p className="text-slate-400 leading-relaxed">
          Currently, I am building projects using the MERN stack and Python,
          strengthening my problem-solving skills, and preparing myself for
          entry-level software development roles where I can learn, contribute,
          and grow as an engineer.
        </p>

      </div>
    </section>
  );
}

export default About;
