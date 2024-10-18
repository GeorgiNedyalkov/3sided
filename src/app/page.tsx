import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="pt-20 bg-gray-300 w-full h-screen flex">
      <Sidebar />
      <div className="text-center w-full">Home Page</div>
    </div>
  );
}
