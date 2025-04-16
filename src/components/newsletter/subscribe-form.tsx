export default function SubscribeForm() {
  return (
    <form>
      <input
        className="w-64 border p-2"
        type="email"
        name="email"
        id="email"
        placeholder="devi@gmail.com"
      />
      <button type="submit" className="w-32 bg-red-950 p-2 text-white">
        Subscribe
      </button>
    </form>
  );
}
