import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Emerge Premium Studios">
      <Image
        src="/images/emerge-emblem.png"
        alt="Emerge Premium Studios"
        width={36}
        height={36}
        priority
        className="inline-block align-middle"
      />
    </Link>
  );
}
