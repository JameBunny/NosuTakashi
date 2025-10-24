import { useTranslation } from 'react-i18next'
import YouTubeFeed from '../components/YouTubeFeed'

export default function Home(){
  const { t } = useTranslation()
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <p className="uppercase tracking-[0.35em] text-neutral-400 text-xs">{t('hero.tagline')}</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
          {t('hero.headline')}
        </h1>
        <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">{t('hero.subtext')}</p>
      </div>

      {/* เฉพาะคอนเทนต์ YouTube ล่าสุด */}
      <YouTubeFeed max={9} />
    </section>
  )
}
