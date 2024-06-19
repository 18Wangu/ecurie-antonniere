'use client';

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const links = [
    { name: "Acceuil", href: "/" },
    { name: "Catalogue Chevaux", href: "/chevaux-a-vendre" },
    { name: "A propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
];

export default function NavbarEcurieAntonniere() {
    const pathname = usePathname();
  return (
    <div className="flex justify-end p-4 bg-input">
      {links.map((link) => {
        return (
          <Link
            key={link.name} 
            href={link.href}
            className={clsx(
              'text-xl text-foreground pl-12',
              {
                'text-primary': pathname === link.href,
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
