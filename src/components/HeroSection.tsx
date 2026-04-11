import { Button } from "@/components/ui/button";
import { Lightbulb, Zap, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";

    // Check if browser natively supports HLS (Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.play().catch(e => console.error("Hero video play error:", e));
    } else if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
      });
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.error("Hero video play error:", e));
      });
      hls.on(Hls.Events.ERROR, (_event, data) => {
        console.error("HLS error:", data.type, data.details);
        if (data.fatal) {
          if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
            hls.startLoad();
          } else {
            hls.destroy();
          }
        }
      });
      
      return () => {
        hls.destroy();
      };
    }
  }, []);

  return <section className="w-full min-h-screen px-8 md:px-16 pt-16 flex items-center justify-center overflow-hidden relative">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-[1]" style={{ top: '-50%' }}>
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
          crossOrigin="anonymous"
          preload="auto"
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
                Trend Arbitrage
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-4 bg-hero-badge-bg border border-hero-badge-border rounded-2xl backdrop-blur-md">
              <Zap className="w-6 h-6 text-hero-foreground" />
              <span className="text-hero-badge-text text-sm font-normal leading-relaxed">
                Viral Growth
              </span>
            </div>
            <div className="flex items-center gap-3 px-4 py-4 bg-hero-badge-bg border border-hero-badge-border rounded-2xl backdrop-blur-md">
              <Sparkles className="w-6 h-6 text-hero-foreground" />
              <span className="text-hero-badge-text text-sm font-normal leading-relaxed">
                Rapid Iteration
              </span>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[92px] text-hero-foreground font-normal leading-tight tracking-tight">Building Tomorrow's Top Apps, Today</h1>
            <p className="text-lg md:text-xl text-hero-muted font-normal leading-relaxed opacity-70 max-w-4xl">
              Nexera builds high-LTV consumer apps by combining trend arbitrage, viral growth mechanics, and rapid product iteration.
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="hero" className="w-full sm:w-auto">
              Get in Touch
            </Button>
            <Button variant="hero-secondary" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;