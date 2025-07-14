import Image from "next/image";
import Link from "next/link";

import YaninaImage from "../../../../public/about/yanina_example.jpg"
import QniImage from "../../../../public/about/qni/qni_web.jpg"
import DeviImage from "../../../../public/about/devi_example_1.jpg"

export default function Page() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-20">
      <div className="text-center pt-10">
        <h1 className="text-4xl font-bold pb-4">За Нас</h1>
        <p>Maluk teskt</p>
      </div>

      <Image src={YaninaImage} alt="Yanina Example" />
      <Image src={DeviImage} alt="Devi Example" />
      <Image src={QniImage} alt="Qni Example" />

    </div>
  )
}
