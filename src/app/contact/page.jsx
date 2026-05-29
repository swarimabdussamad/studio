import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let’s talk.">
        <p>
          Want automation implemented in your business? Have a question about
          something I built or wrote? A collaboration idea, or just a hello — I
          read everything. The fastest way to reach me is email.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
