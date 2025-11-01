import { Button } from "@/components/ui/button";
import { Lightbulb, Zap, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/74cb72d57c6a6d6d7807693d02e6707b/manifest/video.m3u8";

    // Check if browser natively supports HLS (Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    } else if (Hls.isSupported()) {
      // Use hls.js for other browsers
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      
      return () => {
        hls.destroy();
      };
    }
  }, []);

  return <section className="w-full min-h-screen px-8 md:px-16 pt-16 flex items-center justify-center overflow-hidden relative">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-[1]" style={{ top: '-40%' }}>
        <video 
          ref={videoRef}
          className="w-full h-full object-cover" 
          style={{
            filter: 'saturate(0)',
            objectPosition: 'center bottom'
          }}
          autoPlay 
          muted 
          loop 
          playsInline
        />
      </div>
      
      {/* Color Overlay */}
      <div className="absolute inset-0 w-full h-full z-[2]" style={{
      backgroundColor: '#D9D9D9',
      mixBlendMode: 'multiply',
      opacity: 0.7
    }} />
      <div className="w-full max-w-[1280px] flex flex-col items-center gap-20 relative z-[3] pt-[120px]">
        <div className="w-full max-w-3xl flex flex-col items-center gap-8">
          {/* Feature badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-3 px-4 py-4 bg-hero-badge-bg border border-hero-badge-border rounded-2xl backdrop-blur-md">
              <Lightbulb className="w-6 h-6 text-hero-foreground" />
              <span className="text-hero-badge-text text-sm font-normal leading-relaxed">
                Smarter Business
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-4 bg-hero-badge-bg border border-hero-badge-border rounded-2xl backdrop-blur-md">
              <Zap className="w-6 h-6 text-hero-foreground" />
              <span className="text-hero-badge-text text-sm font-normal leading-relaxed">
                AI-powered
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-4 bg-hero-badge-bg border border-hero-badge-border rounded-2xl backdrop-blur-md">
              <Sparkles className="w-6 h-6 text-hero-foreground" />
              <span className="text-hero-badge-text text-sm font-normal leading-relaxed">
                Instantly
              </span>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[92px] text-hero-foreground font-normal leading-tight tracking-tight">Platform For Next Level Innovation</h1>
            <p className="text-lg md:text-xl text-hero-muted font-normal leading-relaxed opacity-70 max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="hero" className="w-full sm:w-auto">
              Get Started for Free
            </Button>
            <Button variant="hero-secondary" className="w-full sm:w-auto">
              Let's Get Connected
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;