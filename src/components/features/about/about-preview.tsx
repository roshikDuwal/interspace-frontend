import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <Image
              src="/images/about.jpg"
              alt="InnerSpace support services"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-primary uppercase text-sm font-semibold">
              About InnerSpace
            </span>

            <h2 className="font-heading text-5xl font-bold mt-4">
              Your Space To Thrive
            </h2>

            <p className="text-primary italic mt-6 text-xl">
              Compassionate and personalised support
              focused on empowering individuals.
            </p>

            <p className="text-muted-foreground mt-6 leading-8">
              InnerSpace provides personalised support
              coordination and recovery-focused guidance.
              We walk alongside participants to help
              build confidence, independence and
              connection.
            </p>

            <Link
              href="/about"
              className="inline-flex mt-8 text-primary font-semibold"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}