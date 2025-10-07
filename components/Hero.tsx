import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-16">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">
            Премиум трансферы и аренда авто
          </h1>
          <p className="mt-4 text-lg opacity-80">
            Комфортные трансферы по всему региону. Быстро, безопасно, профессионально.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/contact"
              as="/contact"
              className="px-4 py-2 bg-accent text-black rounded"
            >
              Забронировать
            </Link>
            <Link
              href="/chat"
              className="px-4 py-2 border rounded"
            >
              Супер-чат
            </Link>
          </div>
        </div>
        <div className="rounded overflow-hidden bg-surface p-4">
          <img
            src="/images/01_logo.png"
            alt="logo"
            className="w-full h-64 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
