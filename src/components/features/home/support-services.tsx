import { Card } from "@/components/ui/card";

const services = [
  "Navigate Your NDIS Plan",
  "Live Independently",
  "Connect With Community",
  "Dedicated Support Team",
  "Resources & Information",
  "Latest Insights",
];

export default function SupportServices() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="text-primary uppercase text-sm">
            How We Help
          </span>

          <h2 className="font-heading text-5xl font-bold mt-4">
            How InnerSpace Will Support You
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <Card
              key={service}
              className="p-8 hover:border-primary transition"
            >
              <span className="text-4xl font-bold text-primary/30">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                {service}
              </h3>

              <p className="mt-4 text-muted-foreground">
                Supporting participants through
                personalised disability services.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}