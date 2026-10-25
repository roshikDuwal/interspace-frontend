import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about InnerSpace disability support services and our mission.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-24">
      <h1 className="text-5xl font-bold font-heading">
        About InnerSpace
      </h1>

      <p className="mt-6 text-muted-foreground max-w-3xl leading-8">
        InnerSpace is a person-centred disability support provider
        committed to empowering individuals across Australia.
        We believe in independence, dignity, and meaningful support
        tailored to each participant’s goals.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold">Person-Centred Care</h3>
          <p className="text-muted-foreground mt-2">
            Support built around individual needs and goals.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold">Inclusive Approach</h3>
          <p className="text-muted-foreground mt-2">
            Ensuring equal opportunity and participation.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold">Trusted Support</h3>
          <p className="text-muted-foreground mt-2">
            Reliable and compassionate professionals.
          </p>
        </div>
      </div>
    </section>
  );
}