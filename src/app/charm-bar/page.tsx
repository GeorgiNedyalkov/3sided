"use client";

import { useState, useRef, useEffect } from "react";

export default function CharmBar() {
  const [selectedCharm, setSelectedCharm] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<number>(0);
  const charmImages = ["/jewel_1.jpg", "/jewel_2.jpg", "/jewel_3.jpg"];

  function handleCharmSelect(imageSrc: string) {
    setSelectedCharm(imageSrc);
  }

  function handlePositionSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedPosition(parseInt(event.target.value, 10) - 1); // Convert to index
  }

  return (
    <div>
      <div className="text-center w-[500px] text-3xl font-semibold">
        Choose a charm to add
      </div>
      <div className="flex w-[500px] justify-evenly">
        {charmImages.map((src, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={src}
            onClick={() => handleCharmSelect(src)}
            className="cursor-pointer w-20 h-20 object-cover"
            alt=""
          />
        ))}
      </div>
      <div>
        <label htmlFor="charmNumber">Select which charm to edit</label>
        <select
          name="charmNumber"
          id="charmNumber"
          onChange={handlePositionSelect}
          className="bg-slate-200 w-12 h-12 m-2 rounded-xl"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <Canvas
        charmImages={charmImages}
        selectedCharm={selectedCharm}
        selectedPosition={selectedPosition}
      />
    </div>
  );
}

export function Canvas({
  charmImages,
  selectedCharm,
  selectedPosition,
}: {
  charmImages: string[];
  selectedCharm: string | null;
  selectedPosition: number;
}) {
  const [canvasCharmImages, setCanvasCharmImages] = useState(charmImages);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw charm images
    const positions = [
      { x: 100, y: 100 },
      { x: 200, y: 100 },
      { x: 300, y: 100 },
    ];

    canvasCharmImages.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        ctx.drawImage(img, positions[index].x, positions[index].y, 50, 50);
      };
    });
  }, [canvasCharmImages]);

  // Update charm image based on dropdown selection
  useEffect(() => {
    if (selectedCharm && selectedPosition >= 0) {
      setCanvasCharmImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[selectedPosition] = selectedCharm;
        return newImages;
      });
    }
  }, [selectedCharm, selectedPosition]);

  return <canvas ref={canvasRef} width={500} height={500} />;
}
