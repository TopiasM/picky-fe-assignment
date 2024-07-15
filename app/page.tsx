import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t to-pink-600 from-pink-400">
        Thank you for checking my submission! :) 
      </h1>
      <h3 className="text-md dark:text-white">
        Link below takes you to the discussion page:
      </h3>
      <Link href="/discussion">
        <h1 className="text-2xl dark:text-white border-b-2 border-pink-400 border-solid hover:border-b-4">Discussion page</h1>
      </Link>
    </main>
  );
}
