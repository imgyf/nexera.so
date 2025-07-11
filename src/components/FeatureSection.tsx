import { Users, Zap } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="w-full min-h-screen px-8 md:px-16 py-20" style={{ backgroundColor: '#050505' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          {/* Left Content */}
          <div className="flex-1 max-w-xl flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-4 bg-hero-badge-bg border border-hero-badge-border rounded-2xl backdrop-blur-md w-fit">
              <Users className="w-6 h-6 text-hero-foreground" />
              <span className="text-hero-badge-text text-sm font-normal leading-relaxed">
                Integrated with
              </span>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-hero-foreground font-normal leading-tight">
                Empowering change through technology
              </h2>
              <p className="text-lg text-hero-muted font-normal leading-relaxed max-w-md">
                Many Web3 platforms are complex and have a steep learning curve, encouraging new users.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-6 mt-16">
              <div className="flex items-center gap-6">
                <div className="w-6 h-6 bg-hero-foreground rounded-sm flex-shrink-0" />
                <span className="text-lg text-hero-muted font-normal leading-relaxed">
                  Internal Task Bots
                </span>
              </div>
              <div className="flex items-center gap-6">
                <Zap className="w-6 h-6 text-hero-foreground flex-shrink-0" />
                <span className="text-lg text-hero-muted font-normal leading-relaxed">
                  100+ Automations
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="flex-1 max-w-2xl">
            <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-[30px] overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1440&h=810&fit=crop&crop=center)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: 'rotate(-14deg) scale(1.5)',
                  transformOrigin: 'center'
                }}
              />
              
              {/* Dashboard Interface */}
              <div className="absolute top-14 left-16 right-16 bottom-14">
                <div className="w-full h-full bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                  </div>

                  {/* Content Area */}
                  <div className="space-y-6">
                    {/* Progress Items */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-14 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"></div>
                        <div className="flex-1">
                          <div className="text-xs text-hero-foreground/70 mb-2">Information Memorandums</div>
                          <div className="h-3 bg-white/10 rounded-full overflow-hidden border border-white/10">
                            <div className="h-full w-3/4 bg-gradient-to-r from-transparent to-white/40 rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-14 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"></div>
                        <div className="flex-1">
                          <div className="text-xs text-hero-foreground/70 mb-2">Annual Reports</div>
                          <div className="h-3 bg-white/10 rounded-full overflow-hidden border border-white/10">
                            <div className="h-full w-1/2 bg-gradient-to-r from-transparent to-white/40 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-4 relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-14 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;