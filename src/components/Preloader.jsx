import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BookOpen } from "lucide-react";

gsap.registerPlugin(useGSAP);

const Preloader = ({ onFinish }) => {
  const containerRef = useRef(null);
  const bookRef = useRef(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useGSAP(
    (context, contextSafe) => {
      const pages = gsap.utils.toArray(
        ".preloader-page",
        containerRef.current
      );

      const handleFinish = contextSafe(() => {
        onFinish?.();
      });

      gsap.set(pages, { transformStyle: "preserve-3d" });

      const flipTl = gsap.timeline({ repeat: 1, repeatDelay: 0.5 });
      flipTl
        .fromTo(
          pages,
          { rotateY: 0, z: 0 },
          {
            rotateY: -155,
            z: 6,
            duration: 0.85,
            stagger: 0.2,
            ease: "power2.inOut",
          }
        )
        .to(pages, {
          rotateY: 0,
          z: 0,
          duration: 0.85,
          stagger: 0.2,
          ease: "power2.inOut",
        });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: handleFinish,
      });

      tl.fromTo(
        bookRef.current,
        { scale: 0.9, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.55, ease: "power3.out" }
      )
        .add(flipTl, "+=0.25")
        .to(bookRef.current, {
          scale: 1.03,
          duration: 0.75,
          yoyo: true,
          repeat: 1,
          ease: "sine.inOut",
        })
        .to(
          containerRef.current,
          {
            yPercent: -100,
            duration: 1.35,
            ease: "power3.inOut",
          },
          "+=0.6"
        );
    },
    { scope: containerRef, dependencies: [onFinish] }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
    >
      <div
        ref={bookRef}
        className="relative flex flex-col items-center gap-5"
        style={{ perspective: "1200px" }}
      >
        <div className="relative h-32 w-40 sm:h-36 sm:w-48">
          <div className="absolute inset-0 rounded-2xl bg-slate-900/80 shadow-2xl border border-amber-200/20" />
          <div className="absolute inset-y-3 left-4 w-2 rounded-full bg-amber-300/70" />
          <div
            className="preloader-page absolute inset-y-4 left-8 right-3 rounded-xl bg-white/90 shadow-md"
            style={{ transformOrigin: "left center" }}
          />
          <div
            className="preloader-page absolute inset-y-5 left-9 right-4 rounded-xl bg-white/70 shadow"
            style={{ transformOrigin: "left center" }}
          />
          <div
            className="preloader-page absolute inset-y-6 left-10 right-5 rounded-xl bg-white/50 shadow"
            style={{ transformOrigin: "left center" }}
          />
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="flex items-center gap-2 text-amber-200">
            <BookOpen className="h-5 w-5" />
            <span className="text-lg font-semibold">BookSearch</span>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Curating your shelf
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
