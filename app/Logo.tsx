import {useEffect, useState} from "react";
import {cn} from "./lib/utils";

const Logo = () => {
  const [path1, setPath1] = useState(4997);
  const [path2, setPath2] = useState(2556);
  const [path3, setPath3] = useState(2545);
  const [path4, setPath4] = useState(2984);
  const [path5, setPath5] = useState(204);
  const [path6, setPath6] = useState(2554);
  const [path7, setPath7] = useState(4153);
  const [path8, setPath8] = useState(2547);
  const [fillLogo, setFillLogo] = useState("transparent");
  const [zoom, setZoom] = useState("scale-100");

  useEffect(() => {
    const animationTime = 300;
    const timeoutP1 = setTimeout(() => {
      setPath1(0);
    }, 70);
    const timeoutP2 = setTimeout(() => {
      setPath2(0);
    }, animationTime);
    const timeoutP3 = setTimeout(() => {
      setPath3(0);
    }, 2 * animationTime);
    const timeoutP4 = setTimeout(() => {
      setPath4(0);
    }, 3 * animationTime);
    const timeoutP5 = setTimeout(() => {
      setPath5(0);
    }, 4 * animationTime);
    const timeoutP6 = setTimeout(() => {
      setPath6(0);
    }, 5 * animationTime);
    const timeoutP7 = setTimeout(() => {
      setPath7(0);
    }, 6 * animationTime);
    const timeoutP8 = setTimeout(() => {
      setPath8(0);
    }, 7 * animationTime);

    const timeoutFillColor = setTimeout(() => {
      setFillLogo("white");
      setZoom("scale-110");
    }, 8 * animationTime);

    const timeoutZoomIn = setTimeout(() => {
      setZoom("scale-110");
    }, 8 * animationTime + 70);

    const timeoutZoomOut = setTimeout(() => {
      setZoom("scale-100");
    }, 8 * animationTime + 220);

    return () => {
      clearTimeout(timeoutP1);
      clearTimeout(timeoutP2);
      clearTimeout(timeoutP3);
      clearTimeout(timeoutP4);
      clearTimeout(timeoutP5);
      clearTimeout(timeoutP6);
      clearTimeout(timeoutP7);
      clearTimeout(timeoutP8);
      clearTimeout(timeoutFillColor);
      clearTimeout(timeoutZoomIn);
      clearTimeout(timeoutZoomOut);
    };
  }, []);

  const pathsStyle = "transition-all ease-linear duration-300";
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={300}
      height={115}
      viewBox="0 0 300 115"
      className={cn(zoom, "transition-all ease-linear duration-150")}
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0, 115) scale(0.1, -0.1)"
        fill={fillLogo}
        stroke="white"
        strokeWidth={15}
      >
        <path
          strokeDasharray={4997}
          strokeDashoffset={path1}
          className={pathsStyle}
          d="M495 1092 c-31 -10 -68 -34 -97 -62 -42 -40 -48 -52 -48 -87 0 -66 31 -100 150 -163 58 -30 116 -63 129 -72 78 -55 81 -150 8 -226 -97 -101 -319 -140 -458 -81 -138 60 -151 207 -29 311 22 19 58 40 80 47 39 12 53 34 27 44 -18 7 -83 -17 -124 -46 -79 -56 -124 -163 -103 -245 16 -64 50 -106 112 -136 75 -36 168 -49 264 -35 189 26 310 116 322 238 10 104 -33 157 -183 226 -137 64 -174 110 -141 174 9 16 37 43 64 58 43 26 55 28 153 28 91 0 110 -3 128 -19 12 -11 21 -25 21 -33 0 -23 -50 -62 -94 -75 -50 -14 -64 -24 -49 -39 18 -18 102 11 145 49 64 58 45 127 -43 152 -52 15 -178 11 -234 -8z"
        />
        <path
          strokeDasharray={2556}
          strokeDashoffset={path2}
          className={pathsStyle}
          d="M1003 811 c-90 -65 -193 -218 -193 -285 0 -78 58 -91 138 -32 28 20 62 50 76 67 30 36 39 37 26 3 -38 -98 29 -113 122 -27 56 54 74 81 61 94 -6 6 -31 -12 -65 -46 -58 -58 -94 -73 -83 -32 4 12 20 51 36 86 16 35 29 67 29 72 0 26 -37 -1 -126 -92 -127 -129 -174 -155 -174 -95 0 54 108 212 175 256 46 30 84 26 98 -10 6 -16 17 -30 24 -30 8 0 13 12 13 30 0 71 -84 94 -157 41z"
        />
        <path
          strokeDasharray={2545}
          strokeDashoffset={path3}
          className={pathsStyle}
          d="M1337 813 c-3 -33 -29 -96 -81 -198 -42 -82 -76 -156 -76 -163 0 -29 35 -4 59 43 14 27 51 75 81 105 63 63 179 155 186 147 3 -3 -18 -39 -45 -82 -49 -74 -67 -123 -59 -162 4 -25 67 -29 109 -8 41 22 129 109 129 130 0 27 -25 16 -75 -36 -57 -57 -102 -86 -117 -71 -12 12 13 75 69 172 46 81 55 120 25 120 -25 0 -104 -52 -163 -107 -54 -50 -58 -50 -30 5 25 50 43 116 35 136 -3 9 -14 16 -24 16 -13 0 -19 -11 -23 -47z"
        />
        <path
          strokeDasharray={2984}
          strokeDashoffset={path4}
          className={pathsStyle}
          d="M1703 728 c-6 -7 -13 -25 -17 -41 -3 -15 -25 -70 -48 -122 l-43 -95 -51 -10 c-177 -37 -364 -208 -364 -333 0 -51 28 -77 81 -77 59 0 101 24 169 96 51 55 180 252 180 275 0 4 17 9 38 11 42 3 53 31 14 36 -14 2 -21 9 -18 15 55 127 84 196 88 214 7 27 -15 49 -29 31z m-133 -303 c0 -11 -96 -163 -136 -216 -75 -98 -148 -143 -194 -119 -61 32 22 184 143 262 60 39 187 88 187 73z"
        />
        <path
          strokeDasharray={204}
          strokeDashoffset={path5}
          className={pathsStyle}
          d="M1741 857 c-24 -29 17 -70 46 -46 20 17 12 53 -13 57 -11 2 -26 -3 -33 -11z"
        />
        <path
          strokeDasharray={2554}
          strokeDashoffset={path6}
          className={pathsStyle}
          d="M1928 810 c-87 -58 -188 -213 -188 -289 0 -32 5 -44 25 -57 24 -16 28 -16 64 0 21 10 63 43 94 73 l56 55 -6 -51 c-6 -56 5 -69 52 -57 29 7 145 112 145 131 0 32 -24 23 -76 -29 -92 -92 -106 -71 -42 63 23 49 27 65 17 71 -8 6 -43 -23 -106 -90 -131 -137 -183 -167 -183 -103 0 74 158 273 216 273 36 0 49 -9 59 -38 9 -30 29 -23 33 11 8 68 -82 89 -160 37z"
        />
        <path
          strokeDasharray={4153}
          strokeDashoffset={path7}
          className={pathsStyle}
          d="M2327 814 c-4 -4 -7 -17 -7 -29 0 -12 -25 -63 -56 -113 -30 -51 -58 -107 -61 -126 -7 -42 11 -76 39 -76 27 0 119 51 176 98 23 19 42 30 42 26 0 -5 -15 -36 -33 -69 -30 -56 -35 -60 -76 -67 -57 -10 -163 -59 -223 -105 -56 -43 -121 -131 -138 -188 -28 -94 52 -145 148 -96 76 39 186 175 253 314 21 44 26 47 61 47 44 0 54 26 13 36 l-24 6 29 58 c33 66 70 159 70 178 0 24 -26 11 -75 -40 -63 -64 -186 -158 -208 -158 -10 0 -17 7 -17 15 0 21 34 87 76 148 37 54 47 83 42 118 -3 23 -19 35 -31 23z m43 -398 c0 -16 -123 -198 -163 -242 -56 -62 -92 -84 -137 -84 -71 0 -57 84 31 184 43 48 99 86 184 123 46 20 85 29 85 19z"
        />
        <path
          strokeDasharray={2547}
          strokeDashoffset={path8}
          className={pathsStyle}
          d="M2722 800 c-92 -72 -192 -240 -177 -297 3 -12 16 -30 29 -38 21 -14 28 -14 58 -2 19 8 62 40 96 72 34 31 62 56 62 54 0 -2 -4 -20 -10 -39 -21 -74 14 -90 91 -41 54 33 110 98 102 117 -8 22 -15 18 -73 -41 -30 -30 -61 -55 -68 -55 -20 0 -10 46 27 119 20 41 26 62 18 70 -7 7 -40 -21 -111 -93 -104 -107 -160 -146 -179 -127 -27 27 53 171 143 255 42 39 56 47 83 44 22 -2 35 -11 44 -28 17 -34 39 -32 36 4 -3 44 -29 66 -79 66 -34 0 -52 -8 -92 -40z"
        />
      </g>
    </svg>
  );
};

export default Logo;
