import { Star } from "lucide-react";
import VideoContainer from "./VideoContainer";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="mx-auto flex max-w-8xl flex-col-reverse items-center gap-16 px-6 pb-12 lg:pb-40 pt-40 lg:flex-row lg:pt-48"
    >
      <div className="w-full lg:w-1/2">
        {/* On va mettre une video ici */}
        <VideoContainer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
      </div>

      <div className="w-full lg:w-1/2">
        <p className="font-mono text-xs uppercase tracking-widest text-(--text-muted)">
          // Regardez vos chaînes en direct
        </p>

        <h1 className="mt-4 font-display text-4xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-(--text) max-w-3xl">
          La TV française en direct, sans antenne.
        </h1>

        <p className="mt-8 max-w-md text-xl leading-relaxed text-(--text-muted)">
          Les meilleures chaînes françaises en streaming HD gratuit. W9, Canal+,
          TMC, BFM et 14 chaînes en direct, sans abonnement et sans pub
          agressive.
        </p>

        <div className="mt-8 flex items-center gap-2">
          <div className="flex text-(--color-accent)">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-sm font-medium text-(--text)">4.9</span>
          <span className="text-sm text-(--text-muted)">
            uniquement sur Android.
          </span>
        </div>

        <div className="mt-8">
          <a
            href="#telecharger"
            className="inline-flex rounded-full bg-(--text) px-6 py-4 text-xl font-medium text-(--bg) transition-opacity hover:opacity-90"
          >
            Télécharger l'apk
          </a>
        </div>
      </div>
    </section>
  );
}
