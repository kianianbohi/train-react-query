import Image from "next/image";
import AdsContainer from "@/app/_component/adsContainer.tsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AdsContainer />
    </main>
  );
}
