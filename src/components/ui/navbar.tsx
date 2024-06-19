'use client';

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const links = [
    { name: "Acceuil", href: "/" },
    { name: "Catalogue Chevaux", href: "/chevaux-a-vendre" },
    { name: "A propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
];

export default function NavbarEcurieAntonniere() {
    const pathname = usePathname();
  return (
    <div className="flex justify-between px-6 py-3 bg-input">
      <div className="flex justify-start">
        <Image
          src="/logo-ecurie-antonniere.png"
          alt="Logo Ecurie Antonniere"
          width={50}
          height={50}
        />
      </div>
      <div className="flex justify-end">
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
    </div>
  );
}
