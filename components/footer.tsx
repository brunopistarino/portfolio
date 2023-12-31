"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  return (
    <footer className="h-screen px-5 lg:px-12 py-20 relative">
      <div className="backdrop-blur-[100px] bg-[#373737]/[0.4] flex flex-col h-full justify-between items-center rounded-xl">
        <div className="pt-16 px-5 flex flex-col items-center gap-8">
          <p className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
            HABLEMOS!
          </p>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-stone-400">Rafaela, Santa Fe, Argentina</p>
            <p className="text-stone-400">brunopistarino@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-center border-t border-white/[0.2] w-full">
          <div className="flex items-center gap-8">
            <Link
              href="https://www.linkedin.com/in/brunopistarino/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkeding />
            </Link>
            <Link
              href="https://wa.me/5493492208328"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsapp />
            </Link>
            <Link
              href="https://github.com/brunopistarino"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </Link>
            <Link href="mailto:brunopistarino@gmail.com">
              <Gmail />
            </Link>
          </div>
        </div>
      </div>
      <Name />
    </footer>
  );
}

const Linkeding = () => (
  <svg
    className="w-[32px]"
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M67.9918 67.6865H56.2212V49.2532C56.2212 44.8576 56.1427 39.1991 50.0993 39.1991C43.9687 39.1991 43.0307 43.9883 43.0307 48.9332V67.6852H31.2601V29.7789H42.5599V34.9592H42.7181C43.8489 33.0257 45.483 31.4351 47.4463 30.3568C49.4097 29.2786 51.6287 28.753 53.8671 28.8361C65.7971 28.8361 67.9967 36.6831 67.9967 46.8917L67.9918 67.6865ZM17.979 24.5974C16.628 24.5977 15.3073 24.1973 14.1839 23.4469C13.0604 22.6966 12.1848 21.6299 11.6675 20.3819C11.1503 19.1338 11.0148 17.7605 11.2781 16.4354C11.5415 15.1103 12.1918 13.8931 13.1469 12.9377C14.102 11.9822 15.319 11.3314 16.644 11.0676C17.9689 10.8038 19.3424 10.9389 20.5906 11.4556C21.8388 11.9724 22.9058 12.8477 23.6565 13.9709C24.4073 15.094 24.8081 16.4146 24.8084 17.7656C24.8085 18.6626 24.632 19.5508 24.2889 20.3796C23.9458 21.2084 23.4428 21.9615 22.8086 22.5959C22.1744 23.2303 21.4215 23.7336 20.5929 24.077C19.7642 24.4204 18.876 24.5973 17.979 24.5974ZM23.8643 67.6865H12.0814V29.7789H23.8643V67.6865ZM73.8599 0.00540611H6.1667C4.63024 -0.0119339 3.14977 0.581426 2.05058 1.65509C0.951398 2.72876 0.323438 4.1949 0.304688 5.7313V73.7054C0.322797 75.2426 0.950358 76.7097 2.04951 77.7845C3.14866 78.8593 4.62948 79.4538 6.1667 79.4375H73.8599C75.4002 79.4568 76.8852 78.864 77.9886 77.7892C79.0921 76.7145 79.7239 75.2457 79.7452 73.7054V5.7264C79.7233 4.18694 79.0911 2.71915 77.9875 1.6455C76.884 0.571856 75.3994 -0.0198039 73.8599 0.00050613"
      fill="#fff"
    />
  </svg>
);

const Whatsapp = () => (
  <svg
    className="w-[35px]"
    width="90"
    height="90"
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M73.0163 16.6252C65.533 9.13229 55.5802 5.0038 44.9756 5C23.1241 5 5.34024 22.7818 5.33264 44.6389C5.32884 51.626 7.15551 58.446 10.6245 64.4564L5 85L26.0152 79.4877C31.805 82.6469 38.3248 84.31 44.9586 84.312H44.9756C66.8234 84.312 84.6094 66.5282 84.6169 44.6711C84.6207 34.0782 80.5016 24.12 73.0163 16.6271V16.6252ZM44.9756 77.6174H44.9624C39.0508 77.6156 33.2516 76.0264 28.1917 73.0251L26.9885 72.3105L14.5173 75.5816L17.8456 63.4223L17.0625 62.1754C13.7646 56.9294 12.0215 50.8657 12.0254 44.6408C12.033 26.475 26.8136 11.6945 44.9891 11.6945C53.7897 11.6983 62.0621 15.1293 68.2833 21.3581C74.5047 27.5851 77.928 35.8649 77.9242 44.6674C77.9165 62.8351 63.136 77.6156 44.9756 77.6156V77.6174ZM63.0485 52.9415C62.0581 52.4454 57.1884 50.0503 56.2797 49.7197C55.3712 49.3888 54.7117 49.2236 54.052 50.2157C53.3925 51.2081 51.4936 53.4395 50.9157 54.099C50.3378 54.7605 49.76 54.8423 48.7696 54.346C47.7795 53.85 44.588 52.8046 40.8035 49.4306C37.8592 46.8037 35.8708 43.5612 35.2931 42.5688C34.7152 41.5767 35.2323 41.0406 35.7264 40.5484C36.1711 40.1036 36.7167 39.3908 37.2128 38.8129C37.7091 38.2351 37.8725 37.8208 38.2031 37.1611C38.534 36.4997 38.3686 35.922 38.1215 35.4257C37.8743 34.9297 35.8938 30.0541 35.0669 28.0716C34.2628 26.1405 33.4456 26.4028 32.8392 26.3705C32.2613 26.342 31.6018 26.3363 30.9403 26.3363C30.2788 26.3363 29.2066 26.5834 28.2981 27.5756C27.3896 28.5677 24.831 30.9646 24.831 35.8382C24.831 40.7118 28.3799 45.424 28.876 46.0854C29.3721 46.7469 35.8613 56.7507 45.7968 61.0426C48.1597 62.0633 50.0052 62.6734 51.4441 63.1297C53.8164 63.8843 55.9756 63.7779 57.6825 63.5231C59.5854 63.2381 63.5428 61.1262 64.3677 58.8129C65.1926 56.4997 65.1926 54.5152 64.9456 54.1028C64.6985 53.6903 64.037 53.4413 63.0467 52.9452L63.0485 52.9415Z"
      fill="#fff"
    />
  </svg>
);

const Gmail = () => (
  <svg
    className="w-[35px]"
    width="80"
    height="61"
    viewBox="0 0 80 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.9997 45.8179L61.8184 29.4545V60.3633H74.5456C77.5638 60.3633 80.0001 57.9178 80.0001 54.9088V15.818V8.5455C80.0001 1.8 72.3001 -2.0454 66.9093 2L61.8186 5.81811L39.9997 22.1815L18.1816 5.81791L18.182 29.4543L39.9997 45.8179ZM5.4545 60.3633H18.1817L18.182 29.4543L18.1816 5.81791L13.0908 2C7.6909 -2.0454 0 1.8 0 8.5455V15.8179V54.9088C0 57.9269 2.44544 60.3633 5.4545 60.3633Z"
      fill="white"
    />
  </svg>
);

const Github = () => (
  <svg
    className="w-[36px]"
    width="90"
    height="90"
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.6308 5.81738C22.5778 5.81738 4.75 23.7763 4.75 45.994C4.75 63.7538 16.1729 78.787 32.0194 84.1078C34.0006 84.5078 34.7263 83.2433 34.7263 82.1796C34.7263 81.2482 34.661 78.0556 34.661 74.7291C23.5671 77.1242 21.2569 69.9398 21.2569 69.9398C19.4741 65.2835 16.8324 64.0868 16.8324 64.0868C13.2014 61.6256 17.0969 61.6256 17.0969 61.6256C21.1247 61.8917 23.2382 65.7496 23.2382 65.7496C26.8031 71.8688 32.5476 70.1398 34.8586 69.0753C35.1884 66.4811 36.2455 64.6852 37.368 63.6876C28.5198 62.7562 19.2104 59.2975 19.2104 43.865C19.2104 39.4749 20.7941 35.8831 23.3035 33.0897C22.9076 32.0921 21.5206 27.9673 23.7002 22.4466C23.7002 22.4466 27.0676 21.3821 34.6602 26.5706C37.9109 25.6911 41.2633 25.2437 44.6308 25.24C47.9982 25.24 51.4308 25.7061 54.6006 26.5706C62.1941 21.3821 65.5614 22.4466 65.5614 22.4466C67.741 27.9673 66.3533 32.0921 65.9573 33.0897C68.5329 35.8831 70.0512 39.4749 70.0512 43.865C70.0512 59.2975 60.7418 62.6893 51.8276 63.6876C53.2806 64.9513 54.5345 67.3455 54.5345 71.1373C54.5345 76.525 54.4692 80.849 54.4692 82.1788C54.4692 83.2433 55.1957 84.5078 57.1761 84.1086C73.0227 78.7862 84.4455 63.7538 84.4455 45.994C84.5108 23.7763 66.6178 5.81738 44.6308 5.81738Z"
      fill="#fff"
    />
  </svg>
);

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
          start: "top 100%",
          end: "+=600",
          scrub: 1,
          //   markers: true,
        },
        y: 100,
        x: -30,
        duration: 0.5,
      });

      gsap.to(r, {
        scrollTrigger: {
          trigger: r,
          start: "top 100%",
          end: "+=600",
          scrub: 1,
        },
        y: -100,
        x: 0,
        duration: 0.5,
      });

      gsap.to(u, {
        scrollTrigger: {
          trigger: u,
          start: "top 100%",
          end: "+=600",
          scrub: 1,
        },
        y: 40,
        x: 60,
        duration: 0.5,
      });

      gsap.to(n, {
        scrollTrigger: {
          trigger: n,
          start: "top 100%",
          end: "+=600",
          scrub: 1,
        },
        y: -100,
        x: 40,
        duration: 0.5,
      });

      gsap.to(o, {
        scrollTrigger: {
          trigger: o,
          start: "top 100%",
          end: "+=600",
          scrub: 1,
        },
        y: 50,
        x: 10,
        duration: 0.5,
      });
    }, [b, r, u, n, o]);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <svg
      className="overflow-visible overflow-x-visible overflow-y-visible absolute top-1/2 left-0 transform -translate-y-1/2 z-[-1]"
      width="100%"
      viewBox="0 0 1519 525"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1374.92 470.71C1289 470.71 1231 418.8 1231 337.176C1231 255.552 1289 204 1374.92 204C1460.48 204 1518.47 255.552 1518.47 337.176C1518.47 418.8 1460.48 470.71 1374.92 470.71ZM1374.92 408.776C1415.37 408.776 1442.94 380.494 1442.94 337.176C1442.94 294.216 1415.37 265.576 1374.92 265.576C1334.46 265.576 1306.54 294.216 1306.54 337.176C1306.54 380.494 1334.46 408.776 1374.92 408.776Z"
        fill="#A05F8A"
        ref={oRef}
      />
      <path
        d="M1013.11 272.647L942.971 280.068L916 25.1627L996.459 16.6496L1096.85 165.867L1100.41 165.491L1083.68 7.42085L1153.82 0.000140927L1180.79 254.905L1100.33 263.418L999.978 114.557L996.418 114.934L1013.11 272.647Z"
        fill="#47B172"
        ref={nRef}
      />
      <path
        d="M731.208 508.431C660.251 498.858 617.744 449.774 626.791 382.72L646.99 233L721.85 243.1L701.985 390.336C697.821 421.202 712.525 443.416 739.489 447.054C766.098 450.644 786.565 432.814 790.682 402.302L810.546 255.066L885.406 265.166L865.207 414.886C856.16 481.94 802.165 518.005 731.208 508.431Z"
        fill="#77C6D9"
        ref={uRef}
      />
      <path
        d="M417.873 310.252L343.594 323.983L297 71.9257L424.085 48.4336C485.691 37.0454 532.905 63.9962 542.406 115.393C550.019 156.582 528.601 190.394 493.226 203.851L490.539 205.075L581.218 280.058L498.49 295.35L420.469 223.853L402.516 227.172L417.873 310.252ZM381.171 111.704L393.6 178.943L433.38 171.59C456.967 167.23 472.226 151.303 468.321 130.18C464.482 109.41 444.537 99.9908 420.951 104.351L381.171 111.704Z"
        fill="#FFB84F"
        ref={rRef}
      />
      <path
        d="M150.075 391.729L12.0279 397.974L0.443848 141.908L131.696 135.971C192.136 133.236 229.161 159.514 231.103 202.43C232.3 228.895 216.722 248.951 196.303 257.043L196.465 260.619C222.164 266.265 242.138 287.939 243.513 318.338C245.503 362.327 209.8 389.027 150.075 391.729ZM78.3638 192.855L80.548 241.136L121.676 239.275C140.988 238.401 154.125 227.773 153.478 213.467C152.831 199.162 138.804 190.121 119.492 190.994L78.3638 192.855ZM82.6512 287.628L85.0295 340.2L131.164 338.113C151.192 337.207 165.711 325.441 165.015 310.063C164.336 295.042 148.814 284.635 128.786 285.541L82.6512 287.628Z"
        fill="#FF764A"
        ref={bRef}
      />
    </svg>
  );
};
