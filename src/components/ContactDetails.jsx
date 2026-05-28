import FadeIn from "./FadeIn";
import SocialMedia from "./SocialMedia";

const email = "swarimabdussamad@gmail.com";

const ContactDetails = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Reach me directly
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Email is best. I usually reply within a day or two — I read every
        message, even if a reply takes a moment.
      </p>

      <div className="mt-8 border-t border-neutral-200 pt-8">
        <h3 className="font-display text-base font-semibold text-neutral-950">
          Email
        </h3>
        <a
          href={`mailto:${email}`}
          className="mt-2 inline-block text-base text-neutral-600 transition hover:text-neutral-950"
        >
          {email}
        </a>
      </div>

      <div className="mt-8 border-t border-neutral-200 pt-8">
        <h3 className="font-display text-base font-semibold text-neutral-950">
          Building in public
        </h3>
        <p className="mt-2 text-base text-neutral-600">
          Follow the work, ask questions, or just say hi.
        </p>
        <SocialMedia className="mt-6" />
      </div>
    </FadeIn>
  );
};

export default ContactDetails;
