import React, { useState, useCallback, useEffect } from "react";

export const screenSize = {
  "s-mobile": "320px",
  mobile: "480px",
  tablet: "768px",
  "m-tablet": "810px",
  "l-tablet": "1024px",
};

const DetectScreenType = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

export default DetectScreenType;
