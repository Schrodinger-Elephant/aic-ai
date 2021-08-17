import { useEffect, useState } from "react";
import Image from "next/image";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BackgroundImage() {
  const [width, setWidth] = useState<number>();
  const [height, setheight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowDimensions();
    setWidth(width);
    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();
      setWidth(width);
      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Image
        src={`https://source.unsplash.com/${width}x${height}/?blue,purple,sky`}
        alt="Picture of the author"
        width={width}
        height={height}
      />
    );
  }

  return null;
}

export default BackgroundImage;
