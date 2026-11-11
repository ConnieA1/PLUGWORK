import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Box,
  Check,
  Home,
  Instagram,
  Menu,
  MessageCircle,
  Megaphone,
  Palette,
  Printer,
  ShieldCheck,
  Store,
  Youtube,
  X,
} from "lucide-react";
import { galleryItems } from "./galleryData.js";

const whatsappUrl =
  "https://wa.me/2349032339806?text=Hi%20PlugworkNG%2C%20I%27d%20like%20to%20talk%20about%20your%20services.";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@plugwork.ng",
    href: "https://www.instagram.com/plugwork.ng",
    icon: Instagram,
    iconClass: "social-icon-instagram",
  },
  {
    name: "YouTube",
    handle: "@plugworkng",
    href: "https://youtube.com/@plugworkng",
    icon: Youtube,
    iconClass: "social-icon-youtube",
  },
  {
    name: "X",
    handle: "@plugworkng",
    href: "https://x.com/plugworkng",
    icon: XBrandIcon,
    iconClass: "social-icon-x",
  },
  {
    name: "TikTok",
    handle: "@plugworkng",
    href: "https://www.tiktok.com/@plugworkng",
    icon: TikTokIcon,
    iconClass: "social-icon-tiktok",
  },
  {
    name: "WhatsApp",
    handle: "Chat with us",
    href: whatsappUrl,
    icon: WhatsAppIcon,
    iconClass: "social-icon-whatsapp",
  },
];

const services = [
  {
    number: "01",
    title: "Design & branding",
    category: "Make your idea memorable",
    description:
      "Logos, brand identity, and creative materials that help your business show up with confidence.",
    image: "/images/design-branding.jpg",
    imageAlt: "PlugworkNG creative and branding campaign",
    icon: Palette,
  },
  {
    number: "02",
    title: "Marketing & visibility",
    category: "Reach the right people",
    description:
      "Marketing and social content to help your business get noticed and stay top of mind.",
    image: "/images/marketing-visibility.jpg",
    imageAlt: "PlugworkNG marketing and business visibility campaign",
    icon: Megaphone,
  },
  {
    number: "03",
    title: "Market sourcing",
    category: "Find the right fit",
    description:
      "Tell us what you’re looking for. We’ll help you explore suppliers and options for your needs.",
    image: "/images/market-sourcing.jpg",
    imageAlt: "PlugworkNG helping buyers make considered sourcing decisions",
    icon: Store,
  },
  {
    number: "04",
    title: "Printing & branded goods",
    category: "Bring your brand to life",
    description:
      "Find print solutions for packaging, promotional items, business materials, and more.",
    image: "/images/printing-branded-goods.jpg",
    imageAlt: "Branded print products and custom promotional goods",
    icon: Printer,
  },
  {
    number: "05",
    title: "Real estate & property",
    category: "Make informed property moves",
    description:
      "Explore property opportunities and get help with the connections and checks you need.",
    image: "/images/property-services.jpg",
    imageAlt: "Property and roofing inspection campaign",
    icon: Home,
  },
  {
    number: "06",
    title: "Materials & project sourcing",
    category: "Get your project moving",
    description:
      "Source roofing and building materials, connect with suppliers, and compare your options.",
    image: "/images/project-materials.jpg",
    imageAlt: "Roofing and building materials for property projects",
    icon: Box,
  },
];

const moreWaysToPlugIn = [
  "Social media design",
  "Food packaging",
  "Vehicle branding",
  "Promotional products",
  "Roofing solutions",
  "Verified connections",
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share the project, product, or opportunity you have in mind. We’ll start with your brief.",
  },
  {
    number: "02",
    title: "Explore the right options",
    description:
      "We help you navigate services, suppliers, and potential connections suited to your request.",
  },
  {
    number: "03",
    title: "Choose your next step",
    description:
      "Get the information you need to make a considered decision and move forward.",
  },
];

const galleryHighlights = [galleryItems[0], galleryItems[3], galleryItems[4]];

function BrandMark({ light = false }) {
  return (
    <a className="brand inline-flex items-center gap-2.5" href="#home" aria-label="PlugworkNG home">
      <span className="brand-symbol" aria-hidden="true">
        <span />
      </span>
      <span className={`brand-wordmark ${light ? "text-white" : "text-ink"}`}>
        Plugwork<span>NG</span>
      </span>
    </a>
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <p
      className={`mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${
        light ? "text-gold" : "text-blue"
      }`}
    >
      <span className={`h-px w-7 ${light ? "bg-gold" : "bg-blue"}`} />
      {children}
    </p>
  );
}

function TikTokIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.33V2h-3.53v13.67a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .6.05.88.14V9.3a6.4 6.4 0 0 0-.88-.06 6.43 6.43 0 1 0 6.43 6.43V8.72a8.3 8.3 0 0 0 4.86 1.56V6.76a4.9 4.9 0 0 1-1.09-.07Z" />
    </svg>
  );
}

function XBrandIcon({ size = 18 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 23.2h-7.4l-5.8-7.58-6.64 7.58H.48l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.8h2.04L6.49 3.29H4.3l13.31 17.66Z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.02 3.73 3.82-1a10 10 0 1 0 5.7-17.73Zm0 18.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.27.6.61-2.2-.2-.32a8.2 8.2 0 1 1 6.34 3.24Zm4.5-6.14c-.25-.13-1.46-.72-1.69-.8-.23-.08-.4-.13-.57.13-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.04-.38-1.98-1.2-.73-.65-1.22-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.12-.12.25-.3.38-.44.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.07-.12-.57-1.37-.78-1.88-.2-.5-.41-.43-.57-.44h-.49c-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1 0 1.25.9 2.45 1.03 2.62.12.17 1.77 2.7 4.3 3.79.6.26 1.06.41 1.42.53.6.19 1.14.16 1.56.1.48-.07 1.46-.6 1.67-1.2.2-.58.2-1.08.14-1.19-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-paper text-ink">
      <header className="relative z-20 border-b border-ink/8 bg-paper/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <BrandMark />
            <span className="hidden border-l border-ink/15 pl-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/55 sm:block">
              Trust. Connect. Prosper.
            </span>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-ink md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute left-0 right-0 top-full flex-col gap-1 border-b border-ink/10 bg-paper px-5 py-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            aria-label="Main navigation"
          >
            <a className="nav-link" href="#services" onClick={closeMenu}>Services</a>
            <a className="nav-link" href="/gallery.html" onClick={closeMenu}>Our work</a>
            <a className="nav-link" href="#how-it-works" onClick={closeMenu}>How it works</a>
            <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
            <a
              className="button-primary mt-2 inline-flex items-center justify-center gap-2 md:mt-0"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Let’s talk <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative">
          <div className="hero-glow pointer-events-none absolute -right-36 -top-20 h-[480px] w-[480px] rounded-full" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-24">
            <div className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white/70 px-3.5 py-2 text-xs font-semibold text-ink/75 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Ideas. People. Opportunities.
              </div>
              <h1 className="max-w-2xl text-[clamp(3.1rem,7.7vw,6.35rem)] font-black leading-[0.92] tracking-[-0.075em]">
                Good people.
                <span className="mt-1 block text-blue">Big possibilities.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-ink/65 sm:text-xl">
                From standout design and printing to marketing, sourcing, and
                property, PlugworkNG helps you find the people and services to
                move your next idea forward.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  className="button-primary inline-flex items-center justify-center gap-2.5"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} />
                  Tell us what you need
                  <ArrowRight size={17} />
                </a>
                <a
                  className="button-secondary inline-flex items-center justify-center gap-2"
                  href="#services"
                >
                  Explore services <ArrowDown size={16} />
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-5 text-sm text-ink/60">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={17} className="text-blue" />
                  People-first connections
                </span>
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck size={17} className="text-gold-deep" />
                  Many ways to plug in
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[500px] lg:mr-0">
              <div className="hero-art-frame relative aspect-[0.9] overflow-hidden rounded-[2rem] bg-ink shadow-[0_35px_80px_-35px_rgba(12,31,59,0.55)]">
                <img
                  className="h-full w-full object-cover object-[50%_33%]"
                  src="/images/people-and-opportunities.jpg"
                  alt="PlugworkNG connecting buyers and sellers with more peace of mind"
                  fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/5" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-7">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.19em] text-gold">Same people. Bigger possibilities.</p>
                    <p className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">Let’s build together.</p>
                  </div>
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-ink">
                    <ArrowUpRight size={23} />
                  </div>
                </div>
              </div>
              <div className="absolute -left-5 top-8 hidden items-center gap-3 rounded-2xl border border-white/80 bg-white px-4 py-3 shadow-xl sm:flex lg:-left-12">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue/10 text-blue">
                  <Check size={21} strokeWidth={2.6} />
                </span>
                <span>
                  <span className="block text-sm font-bold">One good connection</span>
                  <span className="mt-0.5 block text-xs text-ink/55">Can open a new door</span>
                </span>
              </div>
              <div className="absolute -bottom-5 -right-3 rounded-2xl bg-gold px-5 py-3 shadow-lg sm:-right-6">
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-ink/65">Design · source · grow</span>
                <span className="text-base font-extrabold text-ink">Your idea, in motion.</span>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="h-px bg-ink/10" />
          </div>
        </section>

        <section id="services" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
              <div>
                <SectionLabel>Plug into what you need</SectionLabel>
                <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
                  A whole lot of ways to <span className="text-blue">move forward.</span>
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-ink/60">
                Need a creative partner, a reliable supplier, or a fresh
                opportunity? Start with the area that fits your next move.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ number, title, category, description, image, imageAlt, icon: Icon }) => (
                <article
                  className="group overflow-hidden rounded-3xl border border-ink/8 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-35px_rgba(12,31,59,0.4)]"
                  key={title}
                >
                  <div className="relative aspect-[1.47] overflow-hidden bg-ink/5">
                    <img
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                      src={image}
                      alt={imageAlt}
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold tracking-wide text-ink shadow-sm">
                      {number} / PLUGWORK
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue/10 text-blue">
                        <Icon size={21} />
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="text-ink/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue"
                      />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-gold-deep">{category}</p>
                    <h3 className="mt-1 text-xl font-bold tracking-tight">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink/60">{description}</p>
                    <a
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue"
                      href={`${whatsappUrl}%20I%27m%20interested%20in%20${encodeURIComponent(title)}.`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Let’s talk about it <ArrowRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-5 rounded-3xl bg-blue/[0.06] px-6 py-6 sm:flex-row sm:items-center sm:px-8">
              <p className="shrink-0 text-sm font-bold text-ink">And there’s more:</p>
              <ul className="flex flex-wrap gap-2">
                {moreWaysToPlugIn.map((service) => (
                  <li
                    className="rounded-full border border-ink/10 bg-white px-3.5 py-2 text-xs font-semibold text-ink/65"
                    key={service}
                  >
                    {service}
                  </li>
                ))}
                <li className="rounded-full border border-ink/10 bg-white px-3.5 py-2 text-xs font-semibold text-ink/65">
                  And much more
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <SectionLabel>A few things we help make happen</SectionLabel>
                <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
                  Real work. <span className="text-blue">More possibilities.</span>
                </h2>
              </div>
              <a className="inline-flex items-center gap-2 text-sm font-bold text-blue" href="/gallery.html">
                Explore the gallery <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {galleryHighlights.map((item) => (
                <a className="group relative overflow-hidden rounded-3xl bg-ink" href="/gallery.html" key={item.title}>
                  <div className="aspect-[1.16] overflow-hidden">
                    <img
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/90 via-ink/45 to-transparent p-5 pt-14 text-white">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold">{item.service}</p>
                      <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                    </div>
                    <ArrowUpRight size={19} className="shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20 bg-ink py-20 text-white sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
            <div>
              <SectionLabel light>A simple place to start</SectionLabel>
              <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
                Your next move, <span className="text-gold">made easier.</span>
              </h2>
              <p className="mt-5 max-w-md leading-7 text-white/60">
                No need to have every detail figured out. Tell us where you want
                to go, and we’ll help you explore a way forward.
              </p>
              <a
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-ink transition hover:bg-gold-light"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Start a conversation <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="divide-y divide-white/12 border-y border-white/12">
              {steps.map((step) => (
                <article className="grid gap-2 py-6 sm:grid-cols-[60px_1fr] sm:gap-5 sm:py-7" key={step.number}>
                  <span className="text-sm font-bold tracking-widest text-gold">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-white/55">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-blue/[0.06] p-6 sm:p-10 lg:grid-cols-[0.72fr_1.15fr_0.9fr] lg:gap-10 lg:p-12">
              <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-ink sm:min-h-[440px]">
                <img
                  className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
                  src="/images/founder-esama.jpg"
                  alt="Esama Isaiah, founder of PlugworkNG"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="text-xl font-bold tracking-tight">Esama Isaiah</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/65">
                    Founder, PlugworkNG
                  </p>
                </div>
              </div>
              <div>
                <SectionLabel>The story behind the connection</SectionLabel>
                <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
                  Knowing who to trust is the <span className="text-blue">real difference.</span>
                </h2>
                <p className="mt-6 leading-7 text-ink/70">
                  Finding someone who says they can do the job is easy. Knowing
                  who to trust—and what you’re really paying for—is harder.
                </p>
                <p className="mt-4 leading-7 text-ink/70">
                  For more than 15 years, PlugworkNG has connected people with
                  opportunities, reliable suppliers, and service providers
                  across construction, interiors, catering, logistics, printing,
                  sourcing, and more.
                </p>
                <p className="mt-4 leading-7 text-ink/70">
                  We don’t just connect. We help you ask the right questions and
                  verify key details before you commit.
                </p>
                <p className="mt-6 text-sm font-bold text-ink">
                  Trust. Connect. Prosper.
                  <span className="ml-2 font-medium text-ink/50">— PlugworkNG</span>
                </p>
                <a
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Talk with our team <ArrowRight size={16} />
                </a>
              </div>

              <div className="flex flex-col justify-center gap-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white p-5 sm:p-6">
                    <p className="text-3xl font-black tracking-tight text-blue sm:text-4xl">15+</p>
                    <p className="mt-2 text-sm leading-5 text-ink/60">years connecting people to opportunities</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 sm:p-6">
                    <p className="text-3xl font-black tracking-tight text-blue sm:text-4xl">50+</p>
                    <p className="mt-2 text-sm leading-5 text-ink/60">providers in our service network</p>
                  </div>
                </div>
                <blockquote className="rounded-2xl bg-ink p-6 text-white sm:p-8">
                  <BadgeCheck size={25} className="mb-5 text-gold" />
                  <p className="text-xl font-semibold leading-8 tracking-tight sm:text-2xl">
                    “Anyone can say they have what you need. Knowing who to trust is the real problem.”
                  </p>
                  <footer className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                    A note from the founder
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gold px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div className="cta-pattern pointer-events-none absolute -right-16 -top-28 h-80 w-80 rounded-full border-[40px] border-white/20" />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/65">
                  Design · marketing · sourcing · property
                </p>
                <h2 className="text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl">
                  What can we help you plug into?
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-ink/70">
                  Tell us what you have in mind. We’ll help you figure out a good next step.
                </p>
              </div>
              <a
                className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white transition hover:bg-blue"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} /> Let’s talk on WhatsApp <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-8 border-b border-white/12 pb-8 sm:flex-row sm:items-center">
            <div>
              <BrandMark light />
              <p className="mt-3 text-xs tracking-wide text-white/50">Trust. Connect. Prosper.</p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-white/70 sm:items-end">
              <a className="transition hover:text-gold" href="tel:+2349032339806">0903 233 9806</a>
              <a className="transition hover:text-gold" href="tel:+2349049331071">0904 933 1071</a>
            </div>
          </div>
          <div className="border-t border-white/12 pt-6">
            <nav className="mx-auto max-w-xl" aria-label="Social media">
              <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                Find us around the web
              </p>
              <ul className="grid grid-cols-5 gap-1 sm:gap-3">
                {socialLinks.map(({ name, handle, href, icon: Icon, iconClass }) => (
                  <li className="min-w-0" key={name}>
                    <a
                      className="social-link group"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${name}: ${handle}`}
                    >
                      <span className={`social-icon ${iconClass}`}>
                        <Icon size={20} />
                      </span>
                      <span className="social-handle">{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6 flex justify-center border-t border-white/10 pt-5 text-xs text-white/45">
              <p>© {new Date().getFullYear()} PlugworkNG. All rights reserved.</p>
            </div>
          </div>
        </div>
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

export default App;
