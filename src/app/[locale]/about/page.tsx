import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-20 md:px-20">
      <div className="text-center pt-10">
        <h1 className="text-4xl font-bold pb-4">За Нас</h1>
        <p>Ние сме трисайдед</p>
      </div>

      {/* Yanina */}
      <div className="hidden md:block relative w-full h-screen">
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

      <div className="block w-full h-screen md:hidden relative">
        <Image src="/about/yanina_mobile.jpg" alt="Qni Example" className="object-cover" fill />
        <div className="absolute top-0 left-24 font-bold text-xl">
          <h2 className="text-primary text-3xl">Янина Поптомова</h2>
        </div>
        <div className="absolute bottom-32 left-20">
          <p>Зодия - Козирог</p>
          <p>Любим коктейл - Esspresso Martini</p>
          <p>Любима песен - Donell Jones <br /> "You know whats up"</p>
          <p>Любим Чарм - Multicolor Shell</p>
        </div>
        <div className="absolute bottom-0 left-3 text-[12px]">
          <p>
            Модната стилистика е мое голямо хоби, а любовта към детайла и естетиката ме вдъхнови да започна нещо ново и вълнуващо - бранд за бижута, създаден с моята сестра и най-добра приятелка. Вярвам, че няма нищо по-хубаво от това да градиш мечтите си с най-близките до сърцето ти хора.
          </p>
        </div>
      </div>

      {/* Devi Web */}
      <div className="hidden md:block relative w-full h-screen">
        <Image src="/about/devi_web.jpg" alt="Devi Example" className="object-cover" fill />
        <div className="absolute top-[5%] left-[41%]">
          <h2 className="text-primary text-4xl">Девина Славилова</h2>
        </div>
        <div className="absolute top-[10%] left-[42%] font-bold text-xl">
          {/* <p>Here are 4 facts about me</p> */}
        </div>
        <div className="absolute top-[40%] left-[50%]">
          <h2>Text</h2>
          {/* <p>Here are 4 facts about me</p> */}
        </div>
      </div>

      <div className="block w-full h-screen md:hidden relative">
        <Image src="/about/devi_mobile.jpg" alt="Devi Example" className="object-cover" fill />
        <div className="absolute top-44 left-24 font-bold text-xl">
          <h2 className="text-primary text-3xl">Девина Славилова</h2>
        </div>
        <div className="absolute top-[30%] left-28">
          <p>Зодия - Козирог</p>
          <p>Любим коктейл - Esspresso Martini</p>
          <p>Любима песен - Donell Jones <br /> "You know whats up"</p>
          <p>Любим Чарм - Multicolor Shell</p>
        </div>
        <div className="absolute top-[49%] left-[22%] text-[12px]">
          <p>
            Коя съм аз?
            Нестандартен фармацевт, който откри, че създаването на нещо красиво лекува повече от всяко лекарство. След години учене, реших да следвам мечтите си и с две уникални момичета създадохме 3SIDED. Нашата мисия? Да създаваме бижута, които не просто изглеждат добре, а разказват истории и са част от теб!
          </p>
        </div>
      </div>


      {/* Qni */}
      <div className="hidden md:block relative w-full h-screen">
        <Image src="/about/qni_web.jpg" alt="Devi Example" fill className="object-cover" />
        <div className="absolute top-[5%] left-[41%]">
          <h2 className="text-primary text-4xl">Янита Славилова</h2>
        </div>
        <div className="absolute top-[10%] left-[42%] font-bold text-xl">
          <p>Here are 4 facts about me</p>
        </div>
        <div className="absolute top-[40%] left-[40%]">
          <h2>Text</h2>
          {/* <p>Here are 4 facts about me</p> */}
        </div>
      </div>

      <div className="block w-full h-screen md:hidden relative">
        <Image src="/about/qni_mobile.jpg" alt="Qni Example" className="object-cover" fill />
        <div className="absolute top-7 left-14 text-sm">
          <h2 className="text-primary text-4xl">Янита Славилова</h2>
        </div>
        <div className="absolute top-[59%] left-20 text-sm">
          <p>Зодия - Козирог</p>
          <p>Любим коктейл - Skinos Sour</p>
          <p>Любима песен - <br />Lucki "More than ever"</p>
          <p>Любим Чарм - Silver Card</p>
        </div>
        <div className="absolute bottom-6 left-3 text-[12px] max-w-[65vw]">
          <p>
            Модната стилистика е мое голямо хоби, а любовта към детайла и естетиката ме вдъхнови да започна нещо ново и вълнуващо - бранд за бижута, създаден с моята сестра и най-добра приятелка. Вярвам, че няма нищо по-хубаво от това да градиш мечтите си с най-близките до сърцето ти хора.
          </p>
        </div>
      </div>

    </div>
  )
}

