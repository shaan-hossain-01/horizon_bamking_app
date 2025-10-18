"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="mobile-nav-icon"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1 px-4"
          >
            <Image src="/icons/logo.svg" alt="Horizon" width={34} height={34} />
            <h1 className="text-26 font-family-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>
          {sidebarLinks.map((link) => {
            const isActive =
              pathname === link.route || pathname.startsWith(`${link.route}/`);
            return (
              <Link
                href={link.route}
                key={link.route}
                className={cn("sidebar-link", isActive && "bg-bank-gradient")}
              >
                <div className="relative size-6">
                  <Image
                    src={link.imgURL}
                    alt={link.label}
                    fill
                    className={cn({ "brightness-[3] invert-0": isActive })}
                  />
                </div>
                <p className={cn("sidebar-label", { "!text-white": isActive })}>
                  {link.label}
                </p>
              </Link>
            );
          })}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
