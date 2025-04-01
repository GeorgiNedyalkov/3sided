import CharmBarNew from "@/components/charm-bar/charm-bar-2";
import { getCollectionsProducts, getProducts } from "@/lib/shopify";

export default async function Page() {
  const query = "product_type:Charm";

  const charms = await getCollectionsProducts({
    collection: "Letters",
  });

  const products = await getProducts({
    reverse: true,
    query: query,
  });

  return (
    <div>
      <div className="m-4 flex gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-slate-200 p-2">
            <p>{product.title}</p>
            <p>{product.priceRange.maxVariantPrice.amount}</p>
          </div>
        ))}
      </div>
      <div className="m-32">
        <h1 className="mb-4 text-3xl">Three Sided</h1>
        <p className="h-96 w-[50vw]">
          Известен факт е, че читателя обръща внимание на съдържанието, което чете, а не на
          оформлението му. Свойството на Lorem Ipsum е, че до голяма степен има нормално
          разпределение на буквите и се чете по-лесно, за разлика от нормален текст на английски
          език като "Това е съдържание, това е съдържание". Много системи за публикуване и редактори
          на Уеб страници използват Lorem Ipsum като примерен текстов модел "по подразбиране",
          поради което при търсене на фразата "lorem ipsum" в Интернет ще бъдат открити много
          сайтове в процес на разработка. Някой от тези сайтове биват променяни с времето, а други
          по случайност или нарочно(за забавление и пр.) биват оставяни в този си незавършен вид. p
        </p>
      </div>
      <CharmBarNew charms={charms} />;
    </div>
  );
}
