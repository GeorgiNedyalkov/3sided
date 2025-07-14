import Link from "next/link";
import Image from "next/image";
import { LogoMark } from "../logo";
import { useTranslations } from "next-intl";

export default function Footer() {

  const t = useTranslations("Footer");


  return (
    <div className="bg-primary text-white p-4 lg:px-20 lg:pt-20">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-end">
        <div className="flex items-center justify-center py-5 lg:mr-auto lg:py-0">
          <LogoMark />
        </div>

        <div className="grid grid-cols-2 gap-10 lg:mb-20 lg:grid-cols-4 lg:gap-28 text-lg">
          <div className="w-52">
            <h3 className="mb-2 text-3xl font-bold">{t("collections")}</h3>
            <div className="flex gap-10">
              <ul>
                <li>Love</li>
                <li>Halloween</li>
                <li>Shells</li>
                <li>Girlies</li>
              </ul>
              <ul>
                <li>Food</li>
                <li>Hobbies</li>
                <li>Professions</li>
                <li>Birthstones</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-3xl font-bold">{t("categories")}</h3>
            <ul>
              <li>Bracelet</li>
              <li>Necklace</li>
              <li>Keychain</li>
              <li>Waistchain</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-3xl font-bold">{t("forTheClient")}</h3>
            <ul>
              <li>Return policy</li>
              <li>{t("faq")}</li>
              <li>Shipping</li>
              <li>Delivery Details</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-3xl font-bold">{t("about3Sided")}</h3>
            <div>LookBook</div>
            <div>{t("aboutUs")}</div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="mt-10 text-center">
          <h2 className="mb-4 text-xl font-bold">{t("findUs")}</h2>
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.instagram.com/3sidedcharmbar?igsh=M29uOWx5M2dtYml0">
              <Image
                src="/icons/socials/instagram.svg"
                alt="Instagram link"
                width={50}
                height={50}
              />
            </a>
            <a href="https://www.tiktok.com/@3sided0?_t=ZN-8xwTWd8eC06&_r=1">
              <Image
                src="/icons/socials/tik-tok.svg"
                alt="Tik Tok link"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
        <div className="order-2 my-10 flex flex-col gap-2 items-start">
          <Link href="terms">{t("termsAndConditions")}</Link>
          <Link href="privacy-policy">{t("privacyPolicy")}</Link>
        </div>

        <div className="flex flex-col">
          {/* <div className="flex items-center justify-center gap-2"> */}
          {/*   { */}
          {/*     [1, 2, 3, 4].map((card) => ( */}
          {/*       <div key={card} className="h-10 w-16 bg-stone-200" /> */}
          {/*     )) */}
          {/*   } */}
          {/* </div> */}
          <p className="mt-4 text-center text-sm text-white">
            &copy; THRESIDED AD All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

