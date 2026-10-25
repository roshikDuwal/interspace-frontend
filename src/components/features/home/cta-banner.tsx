import { Button } from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-heading font-bold text-white">
          Ready to take the next step?
        </h2>

        <p className="text-white/90 mt-4">
          Speak with our friendly team — no obligation,
          just genuine care and guidance.
        </p>

        <Button
          variant="secondary"
          size="lg"
          className="mt-8"
        >
          Book Free Consultation
        </Button>
      </div>
    </section>
  );
}