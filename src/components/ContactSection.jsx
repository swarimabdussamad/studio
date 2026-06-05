import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import SayHello from "./SayHello";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            Want automation in your business?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Whether you’re a small team or a large operation — if you want to
            cut manual work, reduce overhead, and build systems that scale,
            let’s talk.
          </p>
          <div className="mt-6 flex">
            <SayHello invert align="left" />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
