import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-2">
      <h1 className="bg-gradient-to-t from-pink-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
        Thank you for checking my submission! :)
      </h1>
      <h3 className="dark:text-white">
        Link below takes you to the discussion page:
      </h3>
      <Link href="/discussion">
        <h1 className="border-b-2 border-solid border-pink-400 text-2xl hover:border-b-4 dark:text-white">
          Discussion page
        </h1>
      </Link>
    </main>
  );
}
