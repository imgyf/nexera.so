import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-r from-transparent to-black overflow-hidden rounded-3xl border border-white/10 min-h-[500px] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-12 px-8 py-16 max-w-2xl mx-auto text-center">
            <div className="space-y-5">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-tight">
                Take the next step to success
              </h2>
              <p className="text-hero-muted text-base leading-relaxed max-w-lg mx-auto">
                Many Web3 platforms are complex and have a steep learning curve, discouraging new users from entering the space.
              </p>
            </div>
            <Button variant="default" className="h-12 px-4 text-base">
              Get Started for Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;