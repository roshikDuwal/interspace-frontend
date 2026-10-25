import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  HeartHandshake,
  House,
  Users,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    title: "Support Coordination",
    icon: ClipboardCheck,
  },
  {
    title: "Specialist Support",
    icon: HeartHandshake,
  },
  {
    title: "Psychosocial Recovery",
    icon: Users,
  },
  {
    title: "Daily Living Support",
    icon: House,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(rgba(18,20,46,0.7),rgba(194,24,117,0.6))]">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <Badge variant="secondary">
              NDIS Registered Provider
            </Badge>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold text-white">
              Inner Space
            </h1>

            <h2 className="text-secondary text-3xl font-semibold mt-2">
              Choice Empowered
            </h2>

            <p className="mt-6 text-lg text-white/90 max-w-xl">
              Our purpose is to partner with people and create meaningful change for a better life.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Button size="lg">
                Book Consultation
              </Button>

              <Button size="lg" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <Card
                key={service.title}
                className="hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <service.icon className="size-8 text-primary mb-4 mx-auto" />

                  <h3 className="font-semibold text-foreground">
                    {service.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}