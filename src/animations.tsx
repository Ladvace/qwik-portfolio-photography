export const loaderAnimation = [
  [
    "#global-loader",
    { opacity: [1, 0], pointerEvents: "none" },
    { easing: "ease-in-out", duration: 0.2 },
  ],
  [
    "#inner-column-container",
    { height: ["350%", "100%"] },
    { easing: "ease-in-out", duration: 2.5, name: "initial-scale" },
  ],
  [
    ".isReversed",
    { y: ["-40%", 0] },
    { easing: "ease-in-out", duration: 2.5, at: "<" },
  ],
  [
    ".isEdge",
    { y: ["70%", 0] },
    { easing: "ease-in-out", duration: 2.5, at: "<" },
  ],
  [
    ".isCenter",
    { y: ["40%", "0"] },
    { easing: "ease-in-out", duration: 2.5, at: "<" },
  ],
  [
    "#animation-container",
    { scale: ["0.23", "1"] },
    { easing: "ease-in-out", duration: 2, delay: 2 },
  ],
  [
    ".isMiddle img",
    { scale: ["1.5", "1"] },
    { easing: "ease-in-out", duration: 2, delay: 2, at: "<" },
  ],
  [
    "#outer-animation-container",
    { opacity: [1, 0], pointerEvents: "none" },
    { easing: "ease-in-out" },
  ],
];
