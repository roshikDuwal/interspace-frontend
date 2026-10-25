import Link from "next/link";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className=" text-white mt-20">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">InnerSpace</h2>
          <p className="mt-4 text-white/70">
            Compassionate and personalised disability support across Australia.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="text-white/70 hover:text-white" href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-white/70">info@innerspace.com.au</p>
          <p className="text-white/70 mt-2">Australia</p>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-6 text-white/50 text-sm">
        © {new Date().getFullYear()} InnerSpace. All rights reserved.
      </div>
    </footer>
  );
}