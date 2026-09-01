"use client";

import { useEffect, useState } from "react";
import { Lottie } from "lottie-react";

interface Props {
  src: string;
}

export default function LottiePlayer({ src }: Props) {
  const [animationData, setAnimationData] = useState<any>();

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setAnimationData);
  }, [src]);

  if (!animationData) return null;

  return (
    <Lottie
      src={animationData}
      loop
      autoplay
      className="h-32 w-32"
    />
  );
}