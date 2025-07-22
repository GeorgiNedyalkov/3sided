import Image from "next/image";

import YaninaWeb from "../../../../public/about/yanina_web.jpg"
import QniWeb from "../../../../public/about/qni_web.jpg"
import DeviWeb from "../../../../public/about/devi_web.jpg"

export default function Page() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-20 md:px-20">
      <div className="text-center pt-10">
        <h1 className="text-4xl font-bold pb-4">За Нас</h1>
        <p>Ние сме трисайдед</p>
      </div>

      <AboutYaninaMobile />

      <div className="hidden md:block">
        <AboutYaninaWeb />
      </div>


      <AboutDeviWeb />

      <AboutQniWeb />


    </div>
  )
}

const AboutDeviWeb = () => {
  return (
    <div className="relative w-full">
      <Image src={DeviWeb} alt="Devi Example" />

      <div className="absolute top-[5%] left-[41%]">
        <h2 className="text-primary text-4xl">Девина Славилова</h2>
      </div>
      <div className="absolute top-[10%] left-[42%] font-bold text-xl">
        <p>Here are 4 facts about me</p>
      </div>

      <div className="absolute top-[40%] left-[50%]">
        <h2>Text</h2>
        <p>Here are 4 facts about me</p>
      </div>

    </div>
  )
}


const AboutQniWeb = () => {
  return (
    <div className="relative w-full">
      <Image src={QniWeb} alt="Qni Example" />

      <div className="absolute top-[5%] left-[41%]">
        <h2 className="text-primary text-4xl">Янита Славилова</h2>
      </div>

      <div className="absolute top-[10%] left-[42%] font-bold text-xl">
        <p>Here are 4 facts about me</p>
      </div>

      <div className="absolute top-[40%] left-[40%]">
        <h2>Text</h2>
        <p>Here are 4 facts about me</p>
      </div>

    </div>
  )
}




const AboutYaninaMobile = () => {
  return (
    <div className="w-full h-screen md:hidden">
      <div className="relative w-full h-screen">
        <Image src="/about/yanina_mobile.jpg" alt="Yanina Example" fill className="object-cover" />
      </div>

      <div className="absolute top-[10%] left-[41%]">
        <h2 className="text-primary text-4xl">Янина Поптомова</h2>
      </div>

      <div className="absolute top-[20%] left-[41%] font-bold text-xl">
        <p>Here are 4 facts about me</p>
      </div>
      <div className="absolute top-[40%] left-[41%]">
        <p>Here are 4 facts about me</p>
      </div>

    </div>
  )
}

const AboutYaninaWeb = () => {
  return (
    <div className="relative w-full">
      <Image src={YaninaWeb} alt="Yanina Example" />

      <div className="absolute top-[10%] left-[41%]">
        <h2 className="text-primary text-4xl">Янина Поптомова</h2>
      </div>

      <div className="absolute top-[20%] left-[41%] font-bold text-xl">
        <p>Here are 4 facts about me</p>
      </div>
      <div className="absolute top-[40%] left-[41%]">
        <p>Here are 4 facts about me</p>
      </div>

    </div>
  )
}


