import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-5">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">
          <Image
            src="/images/common/logo.svg"
            alt=""
            width={100}
            height={50}
            className="dark:invert"
          />
        </h1>
      </div>
    </header>
  );
}
