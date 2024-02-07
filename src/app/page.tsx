import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black text-white">
      <h1 className="text-4xl">A simple Next js starter template</h1>
      <Link
        className="rounded-md border border-white/10 px-20 py-16 text-3xl font-medium  transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-white/10"
        href="/counter"
      >
        Counter
      </Link>
    </main>
  );
}
