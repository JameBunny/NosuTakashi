export default function Podcasts(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Podcasts</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h4 className="font-semibold">Slash 'N Cast</h4>
          <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 bg-black">
            <iframe
              src="https://widget.spreaker.com/player?show_id=4147757&theme=dark&playlist=show"
              title="Spreaker 1" width="100%" height="100%" scrolling="no" frameBorder="0"
            />
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold">Make Every Death Count</h4>
          <div className="aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 bg-black">
            <iframe
              src="https://widget.spreaker.com/player?show_id=4573132&theme=dark&playlist=show"
              title="Spreaker 2" width="100%" height="100%" scrolling="no" frameBorder="0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
