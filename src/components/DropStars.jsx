import { memo, useEffect, useRef, useState } from "react";

function DropStars({ children, theme = "yellow", direction = "top", style }) {
  const [starsTop, setStarsTop] = useState([0, 60, 270, 100, 200]);
  const ref = useRef();

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (direction == "top")
        ref.current.style.backgroundPosition = `0 ${starsTop[0]}px, 40px ${starsTop[1]}px, 214px ${starsTop[2]}px, 100px ${starsTop[3]}px, 120px ${starsTop[4]}px, 0 0`;

      if (direction == "bottom")
        ref.current.style.backgroundPosition = `0 ${starsTop[0]}px, 120px ${starsTop[1]}px, 40px ${starsTop[2]}px, 200px ${starsTop[3]}px, 80px ${starsTop[4]}px, 0 0`;

      setStarsTop(
        starsTop.map((starTop) => {
          if (direction == "top") return starTop + Math.floor(Math.random() * 100);
          if (direction == "bottom") return starTop - Math.floor(Math.random() * 100);
        })
      );
    }, 1000);

    return () => clearTimeout(intervalId);
  }, [starsTop]);

  return (
    <div ref={ref} className={`_bg-stars _bg-stars-${direction}-${theme} ${style}`}>
      {children}
    </div>
  );
}

export default memo(DropStars);
