import Image from "next/image";
import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  YouTubeIcon,
} from "./icons";

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 border-t border-black/10 pt-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <Image
              src="/brand/primary-logo-blue.png"
              alt="My Health Passport"
              width={1083}
              height={402}
              className="mt-1 h-8 w-auto"
            />
            <p className="mt-1.5 flex items-start gap-2 text-sm text-navy/60">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
              SB Tower, Nagarjuna Circle, Punjagutta, Hyderabad.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-navy/70">
            <a href="tel:+917793925151" className="flex items-center gap-2 hover:text-brand-blue">
              <PhoneIcon className="h-4 w-4 text-brand-blue" /> +91 77939 25151
            </a>
            <a
              href="mailto:support@myhealthpassport.in"
              className="flex items-center gap-2 hover:text-brand-blue"
            >
              <MailIcon className="h-4 w-4 text-brand-blue" /> support@myhealthpassport.in
            </a>
            <a
              href="https://www.myhealthpassport.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-blue"
            >
              www.myhealthpassport.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/91198533/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue-tint text-brand-blue transition hover:bg-brand-blue hover:text-white"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/my_health_passport_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue-tint text-brand-blue transition hover:bg-brand-blue hover:text-white"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.youtube.com/@myhealthpassport"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue-tint text-brand-blue transition hover:bg-brand-blue hover:text-white"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-navy/40">
          © {new Date().getFullYear()} My Health Passport. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
