import { useState } from "react";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { galleryCategories, galleryItems } from "./galleryData.js";

const whatsappUrl =
  "https://wa.me/2349032339806?text=Hi%20PlugworkNG%2C%20I%27d%20like%20to%20talk%20about%20your%20services.";

function GalleryBrand() {
  return (
    <a className="brand inline-flex items-center gap-2.5" href="/" aria-label="PlugworkNG home">
      <span className="brand-symbol" aria-hidden="true">
        <span />
      </span>
      <span className="brand-wordmark text-ink">
        Plugwork<span>NG</span>
      </span>
    </a>
  );
}

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0]);
  const visibleItems =
    activeCategory === galleryCategories[0]
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-ink/8 bg-paper/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <GalleryBrand />
          <div className="flex items-center gap-4">
            <a className="hidden text-sm font-semibold text-ink/65 transition hover:text-blue sm:inline-flex" href="/">
              Home
            </a>
            <a className="button-primary inline-flex items-center gap-2" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> Let’s talk
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
            <a className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition hover:text-gold" href="/">
              <ArrowLeft size={16} /> Back to home
            </a>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gold">Selected work & product examples</p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.065em] sm:text-7xl">
              A closer look at what we <span className="text-gold">help make happen.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Real examples from printing, branded goods, property, and project
              materials. Have something different in mind? We can help you find
              the right place to start.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mb-9 flex flex-wrap gap-2" aria-label="Filter portfolio by service">
            {galleryCategories.map((category) => (
              <button
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border-ink bg-ink text-white"
                    : "border-ink/12 bg-white text-ink/70 hover:border-blue hover:text-blue"
                }`}
                type="button"
                aria-pressed={activeCategory === category}
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, index) => (
              <article
                className={`group overflow-hidden rounded-3xl border border-ink/8 bg-white ${
                  index === 0 && activeCategory === galleryCategories[0] ? "lg:col-span-2" : ""
                }`}
                key={item.title}
              >
                <div className={`overflow-hidden bg-ink/5 ${index === 0 && activeCategory === galleryCategories[0] ? "aspect-[1.65]" : "aspect-[1.35]"}`}>
                  <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                    src={item.image}
                    alt={item.alt}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue">
                      {item.service}
                    </span>
                    <span className="text-xs text-ink/40">{item.category}</span>
                  </div>
                  <h2 className="mt-2 text-xl font-bold tracking-tight">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink/60">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-gold px-6 py-9 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-ink/60">Have a project in mind?</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.045em]">Let’s find your next good connection.</h2>
            </div>
            <a className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue sm:mt-0" href={whatsappUrl} target="_blank" rel="noreferrer">
              Tell us what you need <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-ink px-5 py-7 text-center text-xs text-white/50">
        © {new Date().getFullYear()} PlugworkNG. Trust. Connect. Prosper.
      </footer>
      <a
        className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#21c56a] text-white shadow-[0_8px_28px_-8px_rgba(0,0,0,.4)] transition hover:scale-105 sm:bottom-7 sm:right-7"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with PlugworkNG on WhatsApp"
      >
        <MessageCircle size={25} fill="currentColor" strokeWidth={1.5} />
      </a>
    </div>
  );
}

export default GalleryPage;
