import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Clock,
  Dumbbell,
  Languages,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { copy, gallery, images, links, memberships, nav, trainers, trainingItems } from './content/siteContent'
import type { Lang } from './content/siteContent'

const fade = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

function useLang() {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('pf-lang') as Lang) || 'ua')

  useEffect(() => {
    localStorage.setItem('pf-lang', lang)
    document.documentElement.lang = lang === 'ua' ? 'uk' : 'en'
    document.title = copy[lang].seo.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy[lang].seo.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', copy[lang].seo.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', copy[lang].seo.description)
  }, [lang])

  return { lang, setLang, t: copy[lang] }
}

function ButtonLink({
  to,
  href,
  children,
  variant = 'primary',
}: {
  to?: string
  href?: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'dark'
}) {
  const className = `button button-${variant}`
  const content = (
    <>
      <span>{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </>
  )

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return (
    <Link className={className} to={to || '/'}>
      {content}
    </Link>
  )
}

function Header({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  const [open, setOpen] = useState(false)
  const items = nav[lang]

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <img src={images.logo} width="44" height="44" alt="Planet Fitness Kyiv logo" />
        <span>Planet Fitness Kyiv</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {items.map(([path, label]) => (
          <NavLink key={path} to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <button className="lang-toggle" type="button" onClick={() => setLang(lang === 'ua' ? 'en' : 'ua')} aria-label="Switch language">
          <Languages size={16} aria-hidden="true" />
          {lang === 'ua' ? 'EN' : 'UA'}
        </button>
        <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <motion.nav className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {items.map(([path, label]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </motion.nav>
      )}
    </header>
  )
}

function Page({ children }: { children: ReactNode }) {
  return (
    <motion.main {...fade} transition={{ duration: 0.45, ease: 'easeOut' }}>
      {children}
    </motion.main>
  )
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}

function Home({ lang }: { lang: Lang }) {
  const t = copy[lang]
  const cards = [
    { to: '/training', image: images.floor, title: nav[lang][1][1], cta: t.common.training },
    { to: '/trainers', image: images.denys, title: nav[lang][2][1], cta: nav[lang][2][1] },
    { to: '/memberships', image: images.priceStart, title: nav[lang][3][1], cta: t.common.memberships },
  ]

  return (
    <Page>
      <section className="hero-section">
        <div className="hero-media" aria-hidden="true">
          <img className="hero-main" src={images.heroGym} alt="" />
          <img className="hero-float" src={images.heroTraining} alt="" />
        </div>
        <div className="hero-content">
          <span className="eyebrow">{t.common.eyebrow}</span>
          <h1>{t.home.title}</h1>
          <p>{t.home.subtitle}</p>
          <div className="hero-actions">
            <ButtonLink href={links.direct}>{t.common.join}</ButtonLink>
            <ButtonLink to="/memberships" variant="ghost">
              {t.common.memberships}
            </ButtonLink>
            <ButtonLink href={links.maps} variant="dark">
              {t.common.route}
            </ButtonLink>
          </div>
        </div>
        <div className="hero-strip" aria-label="Club facts">
          {t.home.stats.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="full-band">
        <div className="feature-grid">
          {t.home.highlights.map(([title, text], index) => {
            const Icon = [Dumbbell, ShieldCheck, Sparkles, Clock][index]
            return (
              <motion.article className="feature-card" key={title} whileHover={{ y: -6 }}>
                <Icon size={24} aria-hidden="true" />
                <h2>{title}</h2>
                <p>{text}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">{t.common.sourceNote}</span>
          <h2>{t.home.sectionsTitle}</h2>
        </div>
        <div className="route-grid">
          {cards.map((card) => (
            <Link to={card.to} className="route-card" key={card.to}>
              <img src={card.image} alt="" loading="lazy" />
              <div>
                <h3>{card.title}</h3>
                <span>{card.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Page>
  )
}

function Training({ lang }: { lang: Lang }) {
  const t = copy[lang]
  return (
    <Page>
      <SectionIntro eyebrow={t.common.eyebrow} title={t.training.title} text={t.training.subtitle} />
      <section className="content-grid">
        {trainingItems[lang].map((item) => (
          <article className="training-card" key={item.title}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div>
              <span>{item.tag}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <ButtonLink href={links.direct} variant="ghost">
                {t.common.clarify}
              </ButtonLink>
            </div>
          </article>
        ))}
      </section>
    </Page>
  )
}

function Trainers({ lang }: { lang: Lang }) {
  const t = copy[lang]
  return (
    <Page>
      <SectionIntro eyebrow={t.common.eyebrow} title={t.trainers.title} text={t.trainers.subtitle} />
      <section className="trainer-grid">
        {trainers[lang].map((trainer) => (
          <article className="trainer-card" key={trainer.name}>
            <img src={trainer.image} alt={trainer.name} loading="lazy" />
            <div>
              <span>{trainer.role}</span>
              <h2>{trainer.name}</h2>
              <p>{trainer.text}</p>
            </div>
          </article>
        ))}
      </section>
      <p className="quiet-note">{t.trainers.limited}</p>
    </Page>
  )
}

function Memberships({ lang }: { lang: Lang }) {
  const t = copy[lang]
  return (
    <Page>
      <SectionIntro eyebrow={t.common.sourceNote} title={t.memberships.title} text={t.memberships.subtitle} />
      <section className="membership-grid">
        {memberships[lang].map((item) => (
          <article className="membership-card" key={item.name}>
            <img src={item.image} alt={`${item.name} ${item.price}`} loading="lazy" />
            <div className="membership-body">
              <span>{t.memberships.cardSource}</span>
              <h2>{item.name}</h2>
              <strong>{item.price}</strong>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <ButtonLink href={links.direct}>{t.common.join}</ButtonLink>
            </div>
          </article>
        ))}
      </section>
    </Page>
  )
}

function Gallery({ lang }: { lang: Lang }) {
  const t = copy[lang]
  return (
    <Page>
      <SectionIntro eyebrow={t.common.eyebrow} title={t.gallery.title} text={t.gallery.subtitle} />
      <section className="gallery-grid">
        {gallery.map((item) => (
          <figure className={`gallery-item ${item.tone}`} key={item.image}>
            <img src={item.image} alt={lang === 'ua' ? item.altUa : item.altEn} loading="lazy" />
          </figure>
        ))}
      </section>
    </Page>
  )
}

function Contacts({ lang }: { lang: Lang }) {
  const t = copy[lang]
  return (
    <Page>
      <SectionIntro eyebrow={t.common.eyebrow} title={t.contacts.title} text={t.contacts.subtitle} />
      <section className="contacts-layout">
        <div className="contact-panel">
          <div className="contact-row">
            <MapPin aria-hidden="true" />
            <div>
              <span>{t.contacts.addressLabel}</span>
              <strong>Golosiivsky prospekt, 132, Kyiv, Ukraine</strong>
              <p>{t.contacts.metro}</p>
            </div>
          </div>
          <div className="contact-row">
            <Clock aria-hidden="true" />
            <div>
              <span>{t.contacts.hoursLabel}</span>
              <strong>{t.contacts.weekday}</strong>
              <p>{t.contacts.weekend}</p>
            </div>
          </div>
          <div className="contact-row">
            <MessageCircle aria-hidden="true" />
            <div>
              <span>{t.common.join}</span>
              <strong>{t.common.direct}</strong>
              <p>{t.contacts.phone}</p>
            </div>
          </div>
          <div className="contact-actions">
            <ButtonLink href={links.direct}>{t.common.direct}</ButtonLink>
            <ButtonLink href={links.instagram} variant="ghost">
              {t.common.instagram}
            </ButtonLink>
            <ButtonLink href={links.maps} variant="dark">
              {t.common.route}
            </ButtonLink>
          </div>
        </div>
        <div className="map-panel">
          <iframe
            title="Planet Fitness Kyiv location map"
            src="https://www.google.com/maps?q=Golosiivsky%20prospekt%20132%2C%20Kyiv%2C%20Ukraine&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </Page>
  )
}

function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang]
  return (
    <footer className="site-footer">
      <div>
        <img src={images.logo} alt="" loading="lazy" />
        <span>Planet Fitness Kyiv</span>
      </div>
      <p>{t.common.sourceNote}</p>
      <a href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <MessageCircle size={20} />
      </a>
    </footer>
  )
}

export default function App() {
  const { lang, setLang } = useLang()
  const location = useLocation()
  const routeKey = useMemo(() => location.pathname, [location.pathname])

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={`${routeKey}-${lang}`}>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/training" element={<Training lang={lang} />} />
          <Route path="/trainers" element={<Trainers lang={lang} />} />
          <Route path="/memberships" element={<Memberships lang={lang} />} />
          <Route path="/gallery" element={<Gallery lang={lang} />} />
          <Route path="/contacts" element={<Contacts lang={lang} />} />
          <Route path="*" element={<Home lang={lang} />} />
        </Routes>
      </AnimatePresence>
      <Footer lang={lang} />
    </>
  )
}
