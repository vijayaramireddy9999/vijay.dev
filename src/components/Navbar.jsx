import {
  Home,
  Code2,
  Layers,
  Briefcase,
  GraduationCap,
  Award,
  Mail
} from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1220]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-slate-100"
        >
          vijay<span className="text-sky-400">.dev</span>
        </a>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">

          <NavItem href="#home" icon={<Home size={16} />} label="Home" />
          <NavItem href="#skills" icon={<Code2 size={16} />} label="Skills" />
          <NavItem href="#projects" icon={<Layers size={16} />} label="Projects" />
          <NavItem href="#experience" icon={<Briefcase size={16} />} label="Experience" />
          <NavItem href="#education" icon={<GraduationCap size={16} />} label="Education" />
          <NavItem href="#certificates" icon={<Award size={16} />} label="Certificates" />
          <NavItem href="#contact" icon={<Mail size={16} />} label="Contact" />

        </nav>
      </div>
    </header>
  );
}

/* NAV ITEM */
function NavItem({ href, icon, label }) {
  return (
    <a
      href={href}
      className="
        flex items-center gap-2
        px-3 py-2
        rounded-lg
        hover:bg-white/5
        hover:text-sky-400
        transition
      "
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export default Navbar;
