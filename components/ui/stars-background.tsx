"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useCallback } from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.0085,
  allStarsTwinkle = true,
  twinkleProbability = 0.8,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<StarProps[]>([]); // Store stars in a ref to avoid unnecessary re-renders
  const animationFrameId = useRef<number | null>(null); // To store the animation frame ID

  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.05 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
    },
    [
      starDensity,
      allStarsTwinkle,
      twinkleProbability,
      minTwinkleSpeed,
      maxTwinkleSpeed,
    ]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Pre-generate stars
    const updateStars = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      starsRef.current = generateStars(width, height);
    };

    updateStars(); // Initial star generation

    // Debounced resize observer to prevent excessive re-renders
    const resizeObserver = new ResizeObserver(() => {
      updateStars();
    });
    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
    };
  }, [generateStars]);

  const renderStars = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    starsRef.current.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();

      // Twinkle effect
      if (star.twinkleSpeed !== null) {
        star.opacity =
          0.5 +
          Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
      }
    });

    // Request the next frame for continuous rendering
    animationFrameId.current = requestAnimationFrame(renderStars);
  }, []);

  useEffect(() => {
    renderStars(); // Start rendering the stars

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current); // Cleanup
      }
    };
  }, [renderStars]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0", className)}
    />
  );
};
