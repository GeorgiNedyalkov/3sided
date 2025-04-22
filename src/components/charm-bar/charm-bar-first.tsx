// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import CharmImages from "@/components/charms/charm-images";
// import CharmCanvas from "@/components/charms/charm-canvas";
// import { necklaces, charmImages } from "@/lib/placeholder-data";
// import { Necklace, Product } from "@/lib/shopify/types";

// export default function CharmBarFirst({
//   charms,
//   chains,
// }: {
//   charms: Product[];
//   chains: Product[];
// }) {
//   const [selectedNecklace, setSelectedNecklace] = useState<Necklace>(necklaces[0]);
//   const [selectedCharm, setSelectedCharm] = useState<string | null>(null);
//   const [selectedPosition, setSelectedPosition] = useState<number>(0);
//   const [charmPositions, setCharmPositions] = useState(Array(charmImages.length).fill(null));

//   function handleNeckalceSelect(necklace: Necklace) {
//     setSelectedNecklace(necklace);
//   }

//   function handleCharmSelect(imageSrc: string, position: number) {
//     setSelectedCharm(imageSrc);
//     setSelectedPosition(position - 1); // Adjust index to match array position
//   }

//   function handleSelectPosition(position) {
//     setSelectedPosition(position - 1);
//   }

//   useEffect(() => {
//     if (selectedCharm && selectedPosition >= 0) {
//       setCharmPositions((prevPositions) => {
//         const newPositions = [...prevPositions];
//         newPositions[selectedPosition] = selectedCharm;
//         return newPositions;
//       });
//     }
//   }, [selectedCharm, selectedPosition]);

//   return (
//     <>
//       {/* Canvas */}
//       <CharmCanvas charmPositions={charmPositions} chain={selectedNecklace} />

//       {/* Bracelets */}
//       <div className="">
//         <div className="mb-4 rounded-md bg-slate-100 p-2 font-medium">Choose a bracelet</div>
//         <div className="flex w-full gap-4 overflow-y-auto p-4">
//           {necklaces.map((necklace, index) => (
//             <Image
//               key={necklace.id}
//               src={necklace.src}
//               onClick={() => handleNeckalceSelect(necklace)}
//               width={100}
//               height={100}
//               className="cursor-pointer object-cover"
//               alt={`Charm ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Select a charm position */}
//       <p className="bg-red-50 text-xl">{selectedPosition}</p>
//       <div className="flex gap-4">
//         {[1, 2, 3, 4, 5].map((charmPosition, i) => (
//           <button
//             key={i}
//             onClick={() => handleSelectPosition(charmPosition)}
//             className={`${selectedPosition == charmPosition ? "bg-black" : ""} h-10 w-10 rounded-full bg-gray-200`}
//           ></button>
//         ))}
//       </div>

//       {/* Charms */}
//       {[...Array(1)].map((_, i) => (
//         <div key={i} className={`lg:col-start-2 lg:row-start-${i + 3}`}>
//           <div className="rounded-md bg-slate-100 p-2 font-medium">
//             {i == 0 ? "Choose Central Charm" : `Choose Charm ${i + 1}`}
//           </div>
//           <CharmImages
//             charmImages={charmImages}
//             onCharmSelect={handleCharmSelect}
//             position={i + 1}
//           />
//         </div>
//       ))}
//     </>
//   );
// }
