import Image from "next/image";
import Paragraph from "./components/ui/Paragraph";
import LargeHeading from "./components/ui/LargeHeading";

export default function Home() {
  return (
    <>
      <main className="bg-red-500">
        <LargeHeading size={"sm"}>Hi</LargeHeading>
        <Paragraph size="sm">Hi</Paragraph>
      </main>
    </>
  );
}
