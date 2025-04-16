import SubscribeForm from "./subscribe-form";

export default async function NewsletterBanner() {
  return (
    <div className="mx-auto flex h-72 items-center justify-center bg-stone-500">
      <div className="flex w-1/2 items-center justify-between">
        <div>
          <h2 className="mb-2 text-2xl font-bold">Subscribe to our Newsletter</h2>
          <p className="w-80">
            Get the latest news, new hot offers and be part of our community of girlies.
          </p>
        </div>
        <SubscribeForm />
      </div>
    </div>
  );
}
