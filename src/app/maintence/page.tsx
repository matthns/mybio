import Image from "next/image";
import Link from "next/link";

export default function MaintencePage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl m-2">Ooops!</h1>
      <Image
        src={"/assets/img/maintence.png"}
        width={200}
        height={300}
        alt="Under maintence photo"
      />
      <h1 className="font-bold text-4xl m-2">Page under maintenance</h1>
      <p className="m-2">Some things are under maintenance, we`ll back soon</p>
      <Link
        href={"/"}
        className="m-2 p-2 bg-blue-300 text-black font-bold rounded-md"
      >
        Go home
      </Link>
    </div>
  );
}
