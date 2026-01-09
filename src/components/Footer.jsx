function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          {/* LEFT */}
          <p className="text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-200 font-medium">
              Vijaya Rami Reddy
            </span>
            <span>
              . All rights reserved.
              </span>
          </p>

          {/* RIGHT */}
          <div className="flex gap-4">
            <a
              href="https://github.com/vijayaramireddy9999"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-sky-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vijaythotireddy"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-sky-400 transition"
            >
              LinkedIn
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
