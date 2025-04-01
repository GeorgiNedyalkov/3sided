import CharmBarNew from "@/components/charm-bar/charm-bar-2";
import { getCollectionsProducts } from "@/lib/shopify";

export default async function Page() {
  const charms = await getCollectionsProducts({
    collection: "Charms",
  });

  return (
    <div>
      <div className="m-32">
        <h1 className="mb-4 text-3xl">Three Sided</h1>
        <p className="h-96 w-[50vw]">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit architecto neque repellat rerum, iure odio sit voluptatem illum dolore illo
          aliquid accusamus maiores. Eos hic adipisci provident aperiam quasi laboriosam earum
          repellat, molestiae modi amet tempore inventore veritatis delectus mollitia illum, quia
          nostrum est, ipsa quaerat omnis. Delectus in sapiente perferendis fuga itaque
          reprehenderit sit nam consequuntur animi asperiores, placeat, consectetur dolorum facere
          neque optio vero nulla expedita. Saepe totam officia illo, iste nisi earum autem? Expedita
          quod, excepturi exercitationem, suscipit error quasi eveniet ipsa blanditiis animi
          delectus itaque sunt adipisci vel deleniti corporis! Quos tenetur itaque odit pariatur
          impedit! Dolorum praesentium quo quisquam sapiente commodi velit necessitatibus, incidunt
          placeat non doloremque perferendis error tempore sint iure natus quasi, at delectus magnam
          quae esse eum. Distinctio veritatis temporibus ducimus eveniet provident suscipit, veniam
          commodi labore deleniti maxime dolore libero eligendi earum similique, magnam harum. Fugit
          incidunt esse commodi. Quia, harum officia distinctio suscipit, accusantium nulla alias
          explicabo quisquam dolorum nisi quae aut? Animi nobis vero laborum quidem repellendus,
          nihil voluptates? Officia blanditiis, quibusdam fugit iusto cumque autem reprehenderit
          amet explicabo nisi vel voluptas quis. Dolor ipsa repellendus libero optio pariatur
          similique, perferendis harum sapiente corrupti tempore excepturi aut! Facere, provident!
        </p>
      </div>
      <CharmBarNew charms={charms} />;
    </div>
  );
}
