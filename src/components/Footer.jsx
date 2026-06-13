import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";
import SubscribeForm from "./SubscribeForm";

const NewsletterSection = () => {
  return (
    <div className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Stay in the loop
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        New posts, build logs, and experiments — when they’re ready, not on a
        schedule.
      </p>
      <div className="mt-6">
        <SubscribeForm variant="footer" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex lg:justify-end">
            <NewsletterSection />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href={"/"} aria-label="Home">
            <Logo variant="footer" className="h-8">
              AutoTechify
            </Logo>
          </Link>
          <p className="text-sm text-neutral-700">
            © AutoTechify {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
