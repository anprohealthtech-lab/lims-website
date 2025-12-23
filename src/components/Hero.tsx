import { Brain, ChevronRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // PLACEHOLDER: Replace these URLs with your actual 5 video links
  const backgroundVideos = [
    // Optimized ImageKit URL used:
    'https://ik.imagekit.io/18tsendxqy/Untitled%20design%20(5).mp4?tr=f-auto,q-80,w-1280'
  ];

  useEffect(() => {
    // If we only have one video, we rely on the <video loop> attribute
    // and don't need to run a state timer.
    if (backgroundVideos.length <= 1) return;

    // Change video every 6 seconds (longer for videos to play a bit)
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % backgroundVideos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundVideos.length]);

  return (
    <div className="relative bg-black overflow-hidden min-h-screen flex flex-col">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        {backgroundVideos.map((videoSrc, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay - Clear top, Dark bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 pointer-events-none"></div>

      <nav className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 animate-fadeInUp">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-lg">
            <img
              src="https://ik.imagekit.io/18tsendxqy/website/Screenshot%202025-12-15%20133819.png?tr=h-80"
              alt="AnPro Solutions"
              className="h-10 w-auto rounded-lg"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6 p-2 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10">
            <a href="#features" className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium border border-transparent hover:border-white/10">Features</a>
            <a href="#pricing" className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium border border-transparent hover:border-white/10">Pricing</a>
            <a href="#about" className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium border border-transparent hover:border-white/10">About</a>
            <button
              onClick={onOpenContact}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium border border-white/10"
            >
              <span>Start Free Trial</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content - Pushed to bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-end pb-8">
        <div className="text-center max-w-4xl mx-auto">

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp drop-shadow-lg">
            <span className="block mb-2">The AI Brain for</span>
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent animate-gradient drop-shadow-sm brightness-125">
              Modern Pathology Labs
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-10 leading-relaxed animate-fadeInUp opacity-0 font-medium drop-shadow-md max-w-2xl mx-auto" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Automate data entry, verify results, and deliver reports instantly with AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fadeInUp opacity-0 hidden" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 animate-gradient shadow-lg shadow-blue-500/30">
              <span>Start Free Trial</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center gap-2 shadow-lg">
              <Play className="w-5 h-5 fill-current" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-12 animate-fadeInUp opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            {backgroundVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentVideoIndex
                  ? 'w-8 bg-blue-600'
                  : 'w-2 bg-gray-400 hover:bg-blue-400'
                  }`}
                aria-label={`Switch to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-10"></div>
    </div>
  );
}
