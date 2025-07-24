import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-20 md:px-20">
      <div className="text-center pt-10">
        <h1 className="text-4xl font-bold pb-4">За Нас</h1>
        <p>Ние сме трисайдед</p>
      </div>

      {/* Devi Web */}
      <div className="relative w-full h-screen">
        <Image src="/about/devi_web.jpg" alt="Devi Example" className="object-cover" fill />
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

      {/* Qni web */}
      <div className="relative w-full h-screen">
        <Image src="/about/qni_web.jpg" alt="Devi Example" fill className="object-cover" />
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

      {/* Yanina Mobile */}
      {/* <div className="w-full h-screen md:hidden"> */}
      {/*   <div className="relative w-full h-screen"> */}
      {/*     <Image src="/about/yanina_mobile.jpg" alt="Yanina Example" fill className="object-cover" /> */}
      {/*   </div> */}
      {/**/}
      {/*   <div className="absolute top-[10%] left-[41%]"> */}
      {/*     <h2 className="text-primary text-4xl">Янина Поптомова</h2> */}
      {/*   </div> */}
      {/**/}
      {/*   <div className="absolute top-[20%] left-[41%] font-bold text-xl"> */}
      {/*     <p>Here are 4 facts about me</p> */}
      {/*   </div> */}
      {/*   <div className="absolute top-[40%] left-[41%]"> */}
      {/*     <p>Here are 4 facts about me</p> */}
      {/*   </div> */}
      {/* </div> */}


      {/* Yanina Web*/}
      <div className="relative w-full h-screen">
        <Image src="/about/yanina_web.jpg" alt="" fill className="object-cover" />
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
    </div>
  )
}

