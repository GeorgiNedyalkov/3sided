import FullscreenImage from "@/components/lookbook/fullscreen-image";
import LookBookThreePictureGrid from "@/components/lookbook/lookbook-grid-3";
import LookBookThreeColumnsGrid from "@/components/lookbook/lookbook-grid-3-columns";
import LookBookFourPicturesGrid from "@/components/lookbook/lookbook-grid-4";
import LookBookHeader from "@/components/lookbook/lookbook-header";

export default function LookbookPage() {
  return (
    <>
      <LookBookHeader />
      <FullscreenImage src="/hor.png" alt="Charms on a chessboard" />
      <LookBookThreeColumnsGrid />
      <FullscreenImage src="/hor2.png" alt="" />
      <LookBookThreePictureGrid />
      <LookBookFourPicturesGrid />
    </>
  );
}
