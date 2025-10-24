import { useEffect, useState } from 'react'

/**
 * ต้องตั้งค่า .env:
 *  VITE_YT_API_KEY=...
 *  VITE_YT_CHANNEL_ID=...
 */
export default function YouTubeFeed({ max=6 }){
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const key = import.meta.env.VITE_YT_API_KEY
    const channel = import.meta.env.VITE_YT_CHANNEL_ID
    if(!key || !channel){
      setError('Missing API key or channel id. See .env')
      setLoading(false)
      return
    }
    const url = new URL('https://www.googleapis.com/youtube/v3/search')
    url.searchParams.set('order','date')
    url.searchParams.set('part','snippet')
    url.searchParams.set('channelId', channel)
    url.searchParams.set('maxResults', String(max))
    url.searchParams.set('type','video')
    url.searchParams.set('key', key)

    fetch(url.toString())
      .then(r=>r.json())
      .then(d=>{
        if(d.error){ throw new Error(d.error.message || 'YouTube API error') }
        setItems(d.items || [])
      })
      .catch(e=> setError(e.message))
      .finally(()=> setLoading(false))
  }, [max])

  if(loading) return <p className="text-neutral-300">Loading YouTube…</p>
  if(error) return <p className="text-red-400">YouTube: {error}</p>

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it)=>{
        const v = it.id.videoId
        const sn = it.snippet
        const thumb = sn?.thumbnails?.medium?.url
        const title = sn?.title
        const date = new Date(sn?.publishedAt).toLocaleDateString()
        return (
          <article key={v} className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
            <a href={`https://www.youtube.com/watch?v=${v}`} target="_blank" rel="noreferrer">
              <img src={thumb} alt={title} className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
            </a>
            <div className="p-4">
              <p className="text-xs uppercase tracking-wider text-red-400">YouTube • {date}</p>
              <h4 className="mt-1 font-semibold leading-snug line-clamp-2">{title}</h4>
            </div>
          </article>
        )
      })}
    </div>
  )
}
