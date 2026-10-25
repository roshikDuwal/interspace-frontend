import {
  Eye,
  Target,
  Star,
} from "lucide-react";

const cards = [
  {
    title: "Our Mission",
    description:
      "Deliver person-centred disability support enabling individuals to live their best lives.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "An inclusive Australia where every participant has the opportunity to fully engage.",
    icon: Eye,
  },
  {
    title: "Our Values",
    description:
      "Respect, empowerment, integrity, compassion and inclusivity.",
    icon: Star,
  },
];

export default function Mission() {
  return (
    <section className="bg-primary py-24">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="font-heading text-5xl font-bold">
            Mission Vision & Values
          </h2>

          <p className="mt-4 text-white/80">
            Guided by purpose, driven by compassion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur"
            >
              <card.icon className="size-10 text-secondary mx-auto mb-6" />

              <h3 className="text-center text-xl font-bold text-white">
                {card.title}
              </h3>

              <p className="text-center mt-4 text-white/80">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}