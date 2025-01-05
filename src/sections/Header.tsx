import logoImage from "@/assets/images/myLogo.png";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <div className="p-0.5">
          <div className="flex items-center">
            <a
              href="#hero" // Scrolls to the Hero section
              className="size-8 bg-gray-200 bg-gradient-to-r from-emerald-300 to-sky-300"
              style={{
                maskImage: `url(${logoImage.src})`,
                maskSize: "contain",
              }}
            ></a>
            <div className="font-semibold font-sans text-sm text-white hidden lg:block">
              HRISHIKESH DAHALE
            </div>
          </div>
        </div>
        <a href="#hero" className="nav-item">
          Home
        </a>
        <a href="#experience" className="nav-item">
          Experience
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
