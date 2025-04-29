import Link from "next/link";
import { LogoMark } from "../logo";

export default function Footer() {
  return (
    <div className="bg-stone-300 p-4 lg:px-20 lg:pt-20">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-end">
        <div className="flex items-center justify-center py-5 lg:mr-auto lg:py-0">
          <LogoMark />
        </div>

        <div className="grid grid-cols-2 gap-10 lg:mb-20 lg:grid-cols-4 lg:gap-28">
          <div className="w-32">
            <h3 className="mb-2 text-3xl font-bold">Collections</h3>
            <ul>
              <li>Love</li>
              <li>Halloween</li>
              <li>Love</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-3xl font-bold">Categories</h3>
            <ul>
              <li>Bracelet</li>
              <li>Necklace</li>
              <li>Keychain</li>
              <li>Waistchain</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-3xl font-bold">For the Client</h3>
            <ul>
              <li>Return policy</li>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Delivery Details</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-3xl font-bold">About 3SIDED</h3>
            <div>LookBook</div>
            <div>About us</div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="mt-10 text-center">
          <h2 className="mb-4 text-xl font-bold">Find us at</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-16 w-16 rounded-full bg-stone-500"></div>
            <div className="h-16 w-16 rounded-full bg-stone-500"></div>
            <div className="h-16 w-16 rounded-full bg-stone-500"></div>
          </div>
        </div>
        <div className="order-2 my-10 flex flex-col items-center gap-2 lg:flex-row">
          <Link href="privacy">Privacy policy</Link>
          <Link href="terms">Terms of service</Link>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-2">
            <div className="h-10 w-16 bg-stone-400"></div>
            <div className="h-10 w-16 bg-stone-400"></div>
            <div className="h-10 w-16 bg-stone-400"></div>
            <div className="h-10 w-16 bg-stone-400"></div>
          </div>
          <p className="mt-4 text-center text-sm text-stone-900/60">
            &copy; 3SIDED All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
