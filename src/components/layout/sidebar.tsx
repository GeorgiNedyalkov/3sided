export default function Sidebar() {
  return (
    <div className="h-screen min-w-96 bg-gray-100">
      {/* <div>Sort by</div>
      <div>Filter by</div> */}
      <div className="px-4">
        <div className="text-xl">Category</div>
        <ul>
          <li>Charms</li>
          <li>Bracelets</li>
          <li>Necklaces</li>
        </ul>
      </div>
    </div>
  );
}
