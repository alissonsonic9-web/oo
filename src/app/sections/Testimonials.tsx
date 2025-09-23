"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useRef } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

export default function Testimonials() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        setVideoEnded(false);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setVideoEnded(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setVideoEnded(true);
  };

  const onPlay = () => {
    setIsPlaying(true);
    setVideoEnded(false);
  }

  const onPause = () => {
    setIsPlaying(false);
  }

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">📢 Resultados Reais</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Histórias de alunos que transformaram conhecimento em renda real.
            </p>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto pt-12">
            <div className="relative aspect-video overflow-hidden rounded-xl border-4 border-primary shadow-2xl group">
                <video
                    ref={videoRef}
                    src="https://www.dropbox.com/scl/fi/9qlokmmc8qpqmh0shlc4y/IMG_0522-1-Compressed-with-FlexClip.mp4?rlkey=69ycrvly5y2q3zf9opu0x6khv&st=ywt29ysq&raw=1"
                    className="w-full h-full object-cover"
                    onEnded={handleVideoEnd}
                    onPlay={onPlay}
                    onPause={onPause}
                    onClick={togglePlayPause}
                >
                    Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity opacity-0 group-hover:opacity-100" onClick={togglePlayPause}>
                  {!isPlaying && !videoEnded && (
                    <button className="text-white bg-black/50 rounded-full p-4">
                      <Play className="h-12 w-12" />
                    </button>
                  )}
                  {isPlaying && (
                    <button className="text-white bg-black/50 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Pause className="h-12 w-12" />
                    </button>
                  )}
                  {videoEnded && (
                     <button onClick={handleReplay} className="text-white bg-black/50 rounded-full p-4 flex flex-col items-center gap-2">
                        <RotateCcw className="h-12 w-12" />
                        <span className="font-semibold">Reassistir</span>
                    </button>
                  )}
                </div>
            </div>
        </div>
        
        <div className="text-center mt-8">
            <p className="font-bold text-lg text-primary">+2.900 alunos já aprovam</p>
            <p className="text-muted-foreground">Junte-se à comunidade que mais cresce no Brasil</p>
        </div>
      </div>
    </section>
  );
}