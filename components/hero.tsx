"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  // const nameRef = useRef();
  // gsap.registerPlugin(ScrollTrigger);

  // gsap.to(".aaa", {
  //   scrollTrigger: ".aaa", // start animation when ".box" enters the viewport
  //   x: 500,
  // });

  return (
    <section className="lg:min-h-screen p-5 lg:p-12 flex justify-between flex-col items-end">
      <p className="text-5xl lg:text-7xl">FULL-STACK DEVELOPER</p>
      <Name />
      {/* <AnimatedObject /> */}
    </section>
  );
}

const Name = () => {
  const bRef = useRef<SVGPathElement>(null);
  const rRef = useRef<SVGPathElement>(null);
  const uRef = useRef<SVGPathElement>(null);
  const nRef = useRef<SVGPathElement>(null);
  const oRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const b = bRef.current;
    const r = rRef.current;
    const u = uRef.current;
    const n = nRef.current;
    const o = oRef.current;

    const ctx = gsap.context(() => {
      gsap.to(b, {
        scrollTrigger: {
          trigger: b,
          start: "top 10%", // Puedes ajustar el punto de inicio según tus necesidades
          // end: "bottom center", // Puedes ajustar el punto de fin según tus necesidades
          end: "+=600",
          scrub: 1, // Activa el efecto "scrubbing" para un desplazamiento suave
          markers: true, // Activa los marcadores de ScrollTrigger
        },
        y: 550,
        x: -100,
        rotation: -10,
        duration: 0.5,
      });

      gsap.to(r, {
        scrollTrigger: {
          trigger: r,
          start: "top 10%",
          end: "+=600",
          scrub: 1,
        },
        y: 350,
        x: -80,
        rotation: -5,
        duration: 0.5,
      });

      gsap.to(u, {
        scrollTrigger: {
          trigger: u,
          start: "top 10%",
          end: "+=600",
          scrub: 1,
        },
        y: 550,
        x: 20,
        rotation: 12,
        duration: 0.5,
      });

      gsap.to(n, {
        scrollTrigger: {
          trigger: n,
          start: "top 10%",
          end: "+=600",
          scrub: 1,
        },
        y: 750,
        x: 40,
        rotation: 2,
        duration: 0.5,
      });

      gsap.to(o, {
        scrollTrigger: {
          trigger: o,
          start: "top 10%",
          end: "+=600",
          scrub: 1,
        },
        y: 600,
        x: 120,
        rotation: 10,
        duration: 0.5,
      });
    }, [b, r, u, n, o]);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <svg
      className="overflow-visible"
      // className="w-full"
      // width="1366"
      width="100%"
      // height="268"
      // height="100%"
      viewBox="0 0 1366 268"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M138.594 262H0.406001V5.67199H131.792C192.294 5.67199 228.094 33.596 228.094 76.556C228.094 103.048 211.626 122.38 190.862 129.54V133.12C216.28 139.922 235.254 162.476 235.254 192.906C235.254 236.94 198.38 262 138.594 262ZM75.944 60.088V108.418H117.114C136.446 108.418 150.05 98.394 150.05 84.074C150.05 69.754 136.446 60.088 117.114 60.088H75.944ZM75.944 154.958V207.584H122.126C142.174 207.584 157.21 196.486 157.21 181.092C157.21 166.056 142.174 154.958 122.126 154.958H75.944Z"
        fill="#FF764A"
        ref={bRef}
      />
      <path
        d="M339.549 262H264.011V5.67199H393.249C455.899 5.67199 497.427 40.756 497.427 93.024C497.427 134.91 470.219 164.266 432.987 171.068L430.123 171.784L505.661 262H421.531L357.807 177.512H339.549V262ZM339.549 60.088V128.466H380.003C403.989 128.466 421.889 115.578 421.889 94.098C421.889 72.976 403.989 60.088 380.003 60.088H339.549Z"
        fill="#FFB84F"
        ref={rRef}
      />
      <path
        d="M648.213 267.37C576.613 267.37 527.925 224.41 527.925 156.748V5.67199H603.463V154.242C603.463 185.388 621.005 205.436 648.213 205.436C675.063 205.436 692.963 185.03 692.963 154.242V5.67199H768.501V156.748C768.501 224.41 719.813 267.37 648.213 267.37Z"
        fill="#77C6D9"
        ref={uRef}
      />
      <path
        d="M878.18 262H807.654V5.67199H888.562L972.692 164.624H976.272V5.67199H1046.8V262H965.89L881.76 103.406H878.18V262Z"
        fill="#47B172"
        ref={nRef}
      />
      <path
        d="M1221.58 267.37C1135.66 267.37 1077.67 215.46 1077.67 133.836C1077.67 52.212 1135.66 0.659993 1221.58 0.659993C1307.15 0.659993 1365.14 52.212 1365.14 133.836C1365.14 215.46 1307.15 267.37 1221.58 267.37ZM1221.58 205.436C1262.04 205.436 1289.6 177.154 1289.6 133.836C1289.6 90.876 1262.04 62.236 1221.58 62.236C1181.13 62.236 1153.21 90.876 1153.21 133.836C1153.21 177.154 1181.13 205.436 1221.58 205.436Z"
        fill="#A05F8A"
        ref={oRef}
      />
    </svg>
  );
};

const AnimatedObject: React.FC = () => {
  const objectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const object = objectRef.current;

    if (object) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: object,
          start: "top center", // Puedes ajustar el punto de inicio según tus necesidades
          // end: "bottom center", // Puedes ajustar el punto de fin según tus necesidades
          end: "+=400",
          scrub: 1, // Activa el efecto "scrubbing" para un desplazamiento suave
          markers: true, // Activa los marcadores de ScrollTrigger
        },
      });

      tl.to(object, { x: 400, duration: 1 });

      return () => {
        // Limpia la animación y ScrollTrigger al desmontar el componente
        tl.kill();
        // ScrollTrigger.kill();
      };
    }
  }, []);

  return (
    <div
      ref={objectRef}
      style={{ width: "50px", height: "50px", background: "blue" }}
    >
      {/* Contenido del objeto */}
    </div>
  );
};
