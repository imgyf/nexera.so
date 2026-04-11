import { Eye, Rocket, TrendingUp } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="w-full py-12 lg:py-8 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <div className="flex flex-col lg:space-y-20">
              {/* Header Section */}
              <div className="space-y-5 order-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 p-4 bg-hero-badge-bg border border-hero-badge-border rounded-2xl backdrop-blur-md">
                  <div className="w-6 h-6 relative">
                    <Eye className="w-6 h-6 text-hero-foreground" />
                  </div>
                  <span className="text-hero-badge-text text-sm font-normal leading-relaxed">
                    Trend Sensing
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-hero-foreground text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
                  Spotting what's next before it peaks
                </h2>

                {/* Description */}
                <p className="text-hero-muted text-base lg:text-lg font-normal leading-relaxed max-w-md">
                  We monitor emerging cultural, tech, and content trends to identify high-potential app opportunities before the market catches on.
                </p>
              </div>

              {/* Image Container - Mobile Only */}
              <div className="flex-1 max-w-2xl lg:hidden order-2 my-8">
                <div className="relative w-full aspect-square overflow-hidden rounded-[30px]">
                  {/* Background Image */}
                  <img 
                    src="/lovable-uploads/f85acb58-198d-4595-ba4f-4de5cbdaeeb5.png" 
                    alt="Dashboard preview"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Card */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] backdrop-blur-sm rounded-[21px] border border-hero-secondary-border shadow-lg p-[50px]" style={{backgroundColor: 'rgba(11, 11, 12, 0.77)'}}>
                    <img 
                      src="/lovable-uploads/acbf981c-beb3-4647-8552-42e3c549de20.png" 
                      alt="Dashboard overlay"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-6 max-w-md order-3">
                <div className="flex items-center gap-6">
                  <div className="w-6 h-6 flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-hero-foreground" />
                  </div>
                  <span className="text-hero-muted text-base lg:text-lg font-normal leading-relaxed">
                    Cultural Trend Analysis
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Rocket className="w-6 h-6 text-hero-foreground" />
                  </div>
                  <span className="text-hero-muted text-base lg:text-lg font-normal leading-relaxed">
                    Rapid Prototyping
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Container - Desktop Only */}
          <div className="hidden lg:block flex-1 max-w-2xl my-8">
            <div className="relative w-full aspect-square lg:h-[577px] lg:aspect-auto overflow-hidden rounded-[30px]">
              {/* Background Image */}
              <img 
                src="/lovable-uploads/f85acb58-198d-4595-ba4f-4de5cbdaeeb5.png" 
                alt="Dashboard preview"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Card */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] lg:w-[496px] lg:h-[465px] backdrop-blur-sm rounded-[21px] border border-hero-secondary-border shadow-lg p-[50px]" style={{backgroundColor: 'rgba(11, 11, 12, 0.77)'}}>
                <img 
                  src="/lovable-uploads/acbf981c-beb3-4647-8552-42e3c549de20.png" 
                  alt="Dashboard overlay"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;