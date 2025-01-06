import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: "Twitter",
    href: "https://x.com/HDHackz",
  },
  {
    title: "Github",
    href: "https://github.com/HD-Codes",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/hrishikesh-dahale/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-white/40 text-center md:text-left">
            &copy; 2025. All rights reserved. <br className="hidden md:block" />
            <span className="font-semibold">
              Powered by Next.js, React, Tailwind CSS.
            </span>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="inline-flex items-center gap-1.5"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
