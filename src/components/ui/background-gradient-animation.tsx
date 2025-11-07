// ui/background-gradient-animation.tsx
"use client";
import { cn } from "./utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  // Skyvolt defaults (ink + ember)
  gradientBackgroundStart = "rgb(11, 12, 14)",
  gradientBackgroundEnd   = "rgb(26, 19, 14)",
  firstColor   = "255, 106, 0",
  secondColor  = "255, 138, 44",
  thirdColor   = "255, 195, 106",
  fourthColor  = "255, 80, 0",
  fifthColor   = "255, 160, 90",
  pointerColor = "255, 140, 80",
  size = "72%",
  blendingValue = "screen",
  interactive = true,
  fill = "screen",
  children,
  className,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  interactive?: boolean;
  fill?: "screen" | "parent";
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    const s = document.body.style;
    s.setProperty("--gradient-background-start", gradientBackgroundStart);
    s.setProperty("--gradient-background-end",   gradientBackgroundEnd);
    s.setProperty("--first-color",  firstColor);
    s.setProperty("--second-color", secondColor);
    s.setProperty("--third-color",  thirdColor);
    s.setProperty("--fourth-color", fourthColor);
    s.setProperty("--fifth-color",  fifthColor);
    s.setProperty("--pointer-color", pointerColor);
    s.setProperty("--size", size);
    s.setProperty("--blending-value", blendingValue);
  }, []);

  useEffect(() => {
    if (!interactiveRef.current) return;
    const el = interactiveRef.current;
    const move = () => {
      setCurX((prev) => prev + (tgX - prev) / 20);
      setCurY((prev) => prev + (tgY - prev) / 20);
      el.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    };
    move();
  }, [tgX, tgY, curX, curY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    setTgX(e.clientX - rect.left);
    setTgY(e.clientY - rect.top);
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  const fillClass =
    fill === "parent" ? "w-full h-full" : "w-screen h-screen";

  return (
    <div
      className={cn(
        `${fillClass} relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]`,
        containerClassName
      )}
      onMouseMove={interactive ? handleMouseMove : undefined}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={cn("", className)}>{children}</div>

      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div className={cn(
          "absolute",
          "[background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]",
          "[mix-blend-mode:var(--blending-value)]",
          "w-[var(--size)] h-[var(--size)]",
          "top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
          "[transform-origin:center_center] animate-first opacity-100"
        )} />
        <div className={cn(
          "absolute",
          "[background:radial-gradient(circle_at_center,_rgba(var(--second-color),_.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]",
          "[mix-blend-mode:var(--blending-value)]",
          "w-[var(--size)] h-[var(--size)]",
          "top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
          "[transform-origin:calc(50%-400px)] animate-second opacity-100"
        )} />
        <div className={cn(
          "absolute",
          "[background:radial-gradient(circle_at_center,_rgba(var(--third-color),_.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]",
          "[mix-blend-mode:var(--blending-value)]",
          "w-[var(--size)] h-[var(--size)]",
          "top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
          "[transform-origin:calc(50%+400px)] animate-third opacity-100"
        )} />
        <div className={cn(
          "absolute",
          "[background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]",
          "[mix-blend-mode:var(--blending-value)]",
          "w-[var(--size)] h-[var(--size)]",
          "top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
          "[transform-origin:calc(50%-200px)] animate-fourth opacity-70"
        )} />
        <div className={cn(
          "absolute",
          "[background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]",
          "[mix-blend-mode:var(--blending-value)]",
          "w-[var(--size)] h-[var(--size)]",
          "top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
          "[transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100"
        )} />

        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              "absolute w-full h-full -top-1/2 -left-1/2",
              "[background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]",
              "[mix-blend-mode:var(--blending-value)] opacity-70"
            )}
          />
        )}
      </div>
    </div>
  );
};
