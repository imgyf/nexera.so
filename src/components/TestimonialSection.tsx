import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Head of Growth, Wellness App",
      company: "Wellness App",
      content: "Nexera took our concept from napkin sketch to 50K downloads in under a month. Their trend sensing is unreal — they knew what users wanted before we did.",
      rating: 5,
      image: "/lovable-uploads/f205f4a0-427d-4991-8617-497b883351fe.png"
    },
    {
      name: "Priya Sharma",
      role: "Founder, Productivity Startup",
      company: "Productivity Startup",
      content: "The speed of iteration is what sets Nexera apart. We shipped three major product updates in the time it would normally take to ship one.",
      rating: 5,
      image: "/lovable-uploads/829efb0e-d3ef-44df-b375-e2f710dfb0bc.png"
    },
    {
      name: "James Park",
      role: "Investor, Consumer Apps Fund",
      company: "Consumer Apps Fund",
      content: "Nexera's portfolio approach to consumer apps is smart. They combine creative intuition with data-backed iteration in a way that consistently produces winners.",
      rating: 5,
      image: "/lovable-uploads/f4b94bd5-9414-4b09-b564-c52434a0c77b.png"
    }
  ];

  return (
    <section className="w-full py-12 lg:py-8 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 p-4 bg-hero-badge-bg border border-hero-badge-border rounded-2xl backdrop-blur-md mb-8">
            <Quote className="w-6 h-6 text-hero-foreground" />
            <span className="text-hero-badge-text text-sm font-normal leading-relaxed">
              Customer Stories
            </span>
          </div>
          
          <h2 className="text-hero-foreground text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight mb-6">
            What people are saying
          </h2>

          <p className="text-hero-muted text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Founders, investors, and partners on working with Nexera to build and scale consumer apps.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-[30px] border border-hero-secondary-border shadow-lg backdrop-blur-sm h-full" style={{backgroundColor: 'rgba(11, 11, 12, 0.77)'}}>
                <div className="p-8 flex flex-col h-full">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 fill-hero-foreground text-hero-foreground" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-hero-foreground text-base lg:text-lg font-normal leading-relaxed mb-8 flex-grow">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-hero-secondary-bg border border-hero-secondary-border">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-hero-foreground text-base font-normal leading-relaxed">
                        {testimonial.name}
                      </h4>
                      <p className="text-hero-muted text-sm font-normal leading-relaxed">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;