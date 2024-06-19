'use client';

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const links = [
    { name: "Compte", href: "/pages/compte" },
    { name: "Faq", href: "/pages/faq" },
    { name: "Panier", href: "/pages/panier" },
];

export default function NavbarEcurieAntonniere() {
    const pathname = usePathname();
  return (
    <div className="flex">
      {links.map((link) => {
        return (
          <Link
            key={link.name} 
            href={link.href}
            className={clsx(
              'text-2xl text-primary pl-12 uppercase',
              {
                'text-[#149A77]': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
