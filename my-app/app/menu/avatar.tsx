import Image from "next/image";

export default function AvatarMain() {
  return (
    <>
      <Image
        src="/qa.png"
        width={150}
        height={150}
        alt="qa"
        className="rounded-full p-0 z-50 relative"
      />
    </>
  );
}
