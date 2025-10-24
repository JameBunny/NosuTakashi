export default function Sidebar(){
  const socials = [
    { label: 'Instagram', href: 'https://instagram.com/', svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
    )},
    { label: 'Facebook', href: 'https://facebook.com/', svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.29.2 2.29.2v2.52h-1.29c-1.27 0-1.67.79-1.67 1.6V12h2.84l-.45 2.91h-2.39v7.04C18.99 21.53 22 17.17 22 12z"/></svg>
    )},
    { label: 'YouTube', href: 'https://youtube.com/', svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M23.5 6.2s-.2-1.7-.8-2.5c-.8-.9-1.7-.9-2.2-1C16.7 2.2 12 2.2 12 2.2s-4.7 0-8.5.5c-.5.1-1.4.1-2.2 1C.2 4.5 0 6.2 0 6.2S0 8.2 0 10.2v1.6c0 2 .2 4 .2 4s.2 1.7.8 2.5c.8.9 1.8.9 2.3 1 1.7.2 7.4.5 8.9.5s7.2-.2 8.5-.5c.5-.1 1.4-.1 2.2-1 .6-.8.8-2.5.8-2.5s.3-2 .3-4V10.2c0-2-.3-4-.3-4zM9.6 14.3V7.9l6.2 3.2-6.2 3.2z"/></svg>
    )},
    { label: 'Newsletter', href: '#newsletter', svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M2 4h20v16H2z" fill="none"/><path d="M22 6l-10 7L2 6V4l10 7L22 4v2z"/></svg>
    )},
  ]

  const scrollTop = () => window.scrollTo({ top:0, behavior:'smooth' })

  return (
    <aside className="fixed left-2 top-1/4 z-40 select-none" aria-label="Quick links">
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-neutral-800/95 ring-1 ring-black/40 shadow-[0_2px_12px_rgba(0,0,0,.45)] p-2 w-12">
        {socials.map((s, i)=> (
          <a key={i} href={s.href} target="_blank" rel="noreferrer"
             className="p-2 hover:bg-white/10 rounded"
             title={s.label}
          >{s.svg}</a>
        ))}
        <button
          onClick={scrollTop}
          className="mt-1 p-2 hover:bg-white/10 rounded text-white"
          title="Back to top"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white"><path d="M12 4l-8 8h6v8h4v-8h6z"/></svg>
        </button>
        {/* จุดกลมล่างแบบภาพตัวอย่าง */}
        <div className="mt-1 mb-1 h-3 w-3 rounded-full ring-1 ring-white/20 bg-white/20" />
      </div>
    </aside>
  )
}
