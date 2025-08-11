import Image from "next/image";

// TODO: Translate this page
export default function Page() {
	return (
		<div className="mt-20 flex flex-col items-center justify-center gap-20 md:px-20">
			<div className="text-center pt-10">
				<h1 className="text-4xl font-bold pb-4">За Нас</h1>
				<p>Ние сме трисайдед</p>
			</div>

			{/* Devi Web */}
			<div className="hidden md:block relative w-full h-screen">
				<Image
					src="/about/devi_web.jpg"
					alt="Devi Example"
					className="object-cover"
					fill
					sizes="(min-width: 763px) 100vw, 100vw"
					priority
				/>
				<div className="absolute w-full pt-10">
					<h2 className="text-primary text-5xl text-center">Девина Славилова</h2>
				</div>
				<div className="absolute top-[25%] left-[45%] xl:text-red-500 2xl:text-2xl 2xl:text-black max-w-96">
					<p>Зодия - Козирог</p>
					<p>Любим коктейл - Esspresso Martini</p>
					<p>Любима песен - Donell Jones <br /> "You know whats up"</p>
					<p>Любим Чарм - <span className="text-red-500">Red</span> Cherry</p>
				</div>
				<div className="absolute top-[40%] left-[56%]">
					<div className="relative w-52 h-52">
						<Image
							src="/about/cherry_charm.PNG"
							alt="Gold charm with a red cherry on it"
							fill
							className="object-cover"
							sizes=""
						/>
					</div>
				</div>
				<div className="absolute bottom-[10%] left-[28%]">
					<p className="max-w-2xl text-md mb-10 2xl:text-lg">
						Коя съм аз?
						Нестандартен фармацевт, който откри, че създаването на нещо красиво лекува повече от всяко лекарство.
						След години учене, реших да следвам мечтите си и с две уникални момичета създадохме 3SIDED.
						Нашата мисия? Да създаваме бижута, които не просто изглеждат добре, а разказват истории и са част от теб!
					</p>
				</div>
			</div>

			{/* Devi Mobile */}
			<div className="block w-full h-screen md:hidden relative">
				<Image src="/about/devi_mobile.jpg" alt="Devi Example" className="object-cover" fill />
				<div className="absolute top-44 left-24 font-bold text-xl">
					<h2 className="text-primary text-3xl">Девина Славилова</h2>
				</div>
				<div className="absolute top-[28%] left-[25%] text-sm">
					<p>Зодия - Козирог</p>
					<p>Любим коктейл - Esspresso Martini</p>
					<p>Любима песен - Donell Jones <br /> "You know whats up"</p>
					<p>Любим Чарм - Multicolored Shell</p>
				</div>
				<div className="absolute top-[38%] right-[20%]">
					<div className="relative w-20 h-20">
						<Image src="/about/shell_charm.png" alt="" fill className="object-cover" />
					</div>
				</div>
				<div className="absolute top-[49%] left-[22%] text-[12px]">
					<p>
						Коя съм аз?
						Нестандартен фармацевт, който откри, че създаването на нещо красиво лекува повече от всяко лекарство.
						След години учене, реших да следвам мечтите си и с две уникални момичета създадохме 3SIDED.
						Нашата мисия? Да създаваме бижута, които не просто изглеждат добре, а разказват истории и са част от теб!
					</p>
				</div>
			</div>


			{/* Yanina Web */}
			<div className="hidden lg:block relative w-full h-screen">
				<Image src="/about/yanina_web.jpg" alt="" fill className="object-cover" />

				<div className="absolute top-[15%] left-[40%] 2xl:top-[12%] 2xl:left-[39%]">
					<h2 className="text-primary text-5xl">Янина Поптомова</h2>
				</div>

				<div className="absolute top-[40%] left-[41%] xl:text-red-500 2xl:text-2xl 2xl:text-black max-w-96">
					<p>Зодия - Лъв</p>
					<p>Любим коктейл - Pornstar Martini</p>
					<p>Любима песен - Anna Margaret<br /> "Something about the sunshine"</p>
					<p>Любим Чарм - Multicolored Shell</p>
				</div>
				<div className="absolute bottom-10 left-20">

					<p className="max-w-2xl text-md mb-10 2xl:text-lg">
						Златните бижута са ми слабост, а летищата са ми втори дом. „Fake it till you make it“ е моят дневен девиз.
						Всеки ден заслужава да блестиш — а аз съм тук, за да ти помогна да създадеш своето уникално бижу.
					</p>
					<p className="max-w-2xl 2xl:text-lg">
						Заслужаваш да сияеш всеки ден — и аз съм тук, за да ти помогна да превърнеш това в реалност.
					</p>
				</div>
			</div>

			{/* Yanina Mobile */}
			<div className="block w-full h-screen lg:hidden relative">
				<Image src="/about/yanina_mobile.jpg" alt="Qni Example" className="object-cover" fill />
				<div className="absolute top-0 left-24 font-bold text-xl">
					<h2 className="text-primary text-3xl">Янина Поптомова</h2>
				</div>
				<div className="absolute bottom-32 left-20">
					<p>Зодия - Козирог</p>
					<p>Любим коктейл - Esspresso Martini</p>
					<p>Любима песен - Donell Jones <br /> "You know whats up"</p>
					<p>Любим Чарм - Multicolored Shell</p>
				</div>

				<div className="absolute bottom-0 left-3 text-[12px]">
					<p>
						Модната стилистика е мое голямо хоби, а любовта към детайла и естетиката ме вдъхнови да започна нещо ново и вълнуващо -
						бранд за бижута, създаден с моята сестра и най-добра приятелка.
						Вярвам, че няма нищо по-хубаво от това да градиш мечтите си с най-близките до сърцето ти хора.
					</p>
				</div>
			</div>

			{/* Qni */}
			<div className="hidden md:block relative w-full h-screen">
				<Image src="/about/qni_web.jpg" alt="Devi Example" fill className="object-cover" />
				<div className="absolute top-[5%] left-[38%]">
					<h2 className="text-primary text-5xl">Янита Славилова</h2>
				</div>
				<div className="absolute top-[40%] left-[35%] xl:text-red-500 2xl:text-2xl 2xl:text-black max-w-96">
					<p>Зодия - Козирог</p>
					<p>Любим коктейл - Skinos Sour</p>
					<p>Любима песен - Lucki "More than ever"</p>
					<p>Любим Чарм - Silver Card</p>
				</div>
				<div className="absolute top-[48%] left-[53%]">
					<div className="relative w-48 h-48 2xl:w-32 2xl:h-32">
						<Image src="/about/ace_charm.png" alt="" fill className="object-cover" />
					</div>
				</div>

				<div className="absolute bottom-[10%] left-[5%]">
					<p className="max-w-2xl 2xl:text-lg">
						Модната стилистика е мое голямо хоби, а любовта към детайла и естетиката ме вдъхнови да започна нещо ново и вълнуващо -
						бранд за бижута, създаден с моята сестра и най-добра приятелка.
						Вярвам, че няма нищо по-хубаво от това да градиш мечтите си с най-близките до сърцето ти хора.
					</p>
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
						Модната стилистика е мое голямо хоби, а любовта към детайла и естетиката ме вдъхнови да започна нещо ново и вълнуващо -
						бранд за бижута, създаден с моята сестра и най-добра приятелка. Вярвам, че няма нищо по-хубаво от това да градиш мечтите си с най-близките до сърцето ти хора.
					</p>
				</div>
			</div>
		</div>
	)
}

