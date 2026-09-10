'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, ChevronDown, Menu, Pause, Play, Volume2, VolumeX, X } from 'lucide-react';

const products = ['Pé Na Porta', 'School of Skull', 'OPESP', 'Instituto In Company', 'CEO-L'];
const coursePhotos = Array.from({ length: 20 }, (_, i) => `/course-${String(i + 1).padStart(2, '0')}.jpg`);

function FilmSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play(); else video.pause();
  };

  const seek = (value: number) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    video.currentTime = (value / 100) * video.duration;
    setProgress(value);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const changeVolume = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = value;
    video.muted = value === 0;
    setVolume(value);
    setMuted(value === 0);
  };

  return (
    <section className="film-section motion" aria-label="Instituto 2630 em ação">
      <div className="film-heading"><span>2630 · Em ação</span><h2>Não explicamos o limite. <em>Vivemos.</em></h2></div>
      <div className={`film-frame ${playing ? 'is-playing' : ''}`}>
        <video ref={videoRef} poster="/video-poster.jpg" playsInline preload="metadata" onLoadedMetadata={event => { event.currentTarget.muted = false; event.currentTarget.volume = volume; }} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onTimeUpdate={event => { const video = event.currentTarget; setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0); }} onEnded={() => setPlaying(false)}>
          <source src="https://res.cloudinary.com/dc48hzb6b/video/upload/v1789065908/videoplayback_fede9h.mp4" type="video/mp4" />
        </video>
        <div className="film-shade" />
        {!playing && <button className="film-play-main" onClick={togglePlay} aria-label="Reproduzir vídeo"><Play size={24} fill="currentColor" /></button>}
        <div className="film-controls">
          <button onClick={togglePlay} aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}>{playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}</button>
          <input className="film-timeline" type="range" min="0" max="100" step="0.1" value={progress} onChange={event => seek(Number(event.target.value))} style={{ '--progress': `${progress}%` } as React.CSSProperties} aria-label="Progresso do vídeo" />
          <div className="film-volume-group">
            <button onClick={toggleMute} aria-label={muted ? 'Ativar som' : 'Silenciar vídeo'}>{muted ? <VolumeX size={17} /> : <Volume2 size={17} />}</button>
            <input className="film-volume" type="range" min="0" max="1" step="0.01" value={muted ? 0 : volume} onChange={event => changeVolume(Number(event.target.value))} style={{ '--volume': `${(muted ? 0 : volume) * 100}%` } as React.CSSProperties} aria-label="Volume do vídeo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.15 },
    );
    document.querySelectorAll('.motion').forEach(el => observer.observe(el));
    const stage = document.querySelector<HTMLElement>('.founders-stage');
    const onPointer = (event: PointerEvent) => {
      if (!stage) return;
      stage.style.setProperty('--mx', `${(event.clientX / innerWidth - 0.5) * 18}px`);
      stage.style.setProperty('--my', `${(event.clientY / innerHeight - 0.5) * 12}px`);
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('pointermove', onPointer);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="site-shell">
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <a href="#home" className="brand" aria-label="Instituto 2630" />
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#home">Home</a><a href="#quem-somos">Quem Somos</a>
          <div className="product-menu">
            <button onClick={() => setProductsOpen(!productsOpen)}>NOSSOS PRODUTOS <ChevronDown size={16} /></button>
            <div className={`submenu ${productsOpen ? 'show' : ''}`}>
              {products.map((product, i) => <a href="#produtos" key={product}><small>0{i + 1}</small>{product}<ArrowUpRight size={14} /></a>)}
            </div>
          </div>
          <a className="nav-cta" href="#contato">Fale conosco <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-grid" /><div className="hero-lines" />
        <div className="hero-copy motion"><p className="eyebrow"><span /> Centro de excelência em treinamento humano</p><h1 className="hero-title">Não importa o problema,<br /><em>liderar é a solução</em></h1><p className="hero-subtitle">Lidere-se</p><a href="#quem-somos" className="button-primary">Conheça o Instituto <ArrowDown size={17} /></a></div>
        <div className="hero-stamp"><strong>2630</strong><span>MENTE<br />CORPO<br />PROPÓSITO</span></div>
        <a className="scroll-cue" href="#quem-somos">Scroll para explorar <ArrowDown size={14} /></a>
      </section>

      <section id="quem-somos" className="intro section-pad">
        <div className="section-index">01 <span>Quem somos</span></div>
        <div className="intro-content motion"><p className="eyebrow red">O Instituto 2630</p><h2>Disciplina que<br />forma <em>líderes.</em></h2><p className="body-copy">Um centro de excelência em treinamento humano e empresarial. Unimos a disciplina, a estratégia e a mentalidade das operações especiais ao desenvolvimento de pessoas e organizações.</p><a className="text-link" href="#fundadores">Conheça os fundadores <ArrowUpRight size={16} /></a></div>
        <div className="intro-number">26<sup>30</sup></div>
      </section>

      <section id="fundadores" className="founders-stage">
        <header className="founders-heading motion"><p className="eyebrow red">À frente do Instituto</p><h2>Experiência<br />que <em>lidera.</em></h2><p>Dois veteranos das Operações Especiais. Uma metodologia construída na prática, aplicada à transformação de pessoas e empresas.</p></header>
        <article className="profile profile-freitas motion">
          <div className="profile-index">26</div>
          <div className="profile-portrait"><img src="/freitas-full.png" alt="Freitas, fundador do Instituto 2630" /></div>
          <div className="profile-info"><span>Fundador · Instrutor</span><h3>Freitas</h3><p>Veterano de operações especiais e especialista em liderança, estratégia e desenvolvimento de alta performance.</p><div className="profile-line" /></div>
          <div className="profile-name-vertical">FREITAS</div>
        </article>
        <article className="profile profile-wallace motion">
          <div className="profile-index">30</div>
          <div className="profile-portrait"><img src="/wallace.png" alt="Wallace, fundador do Instituto 2630" /></div>
          <div className="profile-info"><span>Fundador · Instrutor</span><h3>Wallace</h3><p>Com experiência de campo e formação de elite, transforma coragem, método e propósito em liderança real.</p><div className="profile-line" /></div>
          <div className="profile-name-vertical">WALLACE</div>
        </article>
      </section>

      <FilmSection />

      <section id="galeria" className="course-gallery">
        <div className="gallery-head motion"><p className="eyebrow red">Dentro do método</p><h2>O treino<br /><em>acontece.</em></h2><p>Experiências diferentes, um mesmo padrão de intensidade, disciplina e conexão.</p></div>
        <div className="carousel-mask"><div className="carousel-track">{[...coursePhotos, ...coursePhotos].map((photo, i) => <figure key={i}><img src={photo} alt="Treinamento Instituto 2630" loading="lazy" /></figure>)}</div></div>
      </section>

      <section id="produtos" className="products section-pad">
        <div className="section-index">02 <span>Nossos produtos</span></div>
        <div className="products-head motion"><p className="eyebrow red">Método Caveira</p><h2>Treinamentos<br /><em>sem limites.</em></h2><p className="body-copy">Programas desenhados para levar indivíduos e equipes ao seu limite de performance.</p></div>
        <div className="product-list">{products.map((product, i) => <a href="#contato" className="product-row motion" key={product}><span className="product-no">0{i + 1}</span><h3>{product}</h3><ArrowUpRight size={20} /></a>)}</div>
      </section>

      <section id="lideranca" className="leadership section-pad">
        <div className="section-index">03 <span>Liderança</span></div>
        <div className="leader-quote motion"><span className="quote-mark">“</span><h2>A verdadeira liderança começa pela <em>compreensão de si mesmo.</em></h2><p>— Instituto 2630</p></div>
      </section>

      <footer id="contato"><div className="footer-top motion"><p className="eyebrow red">Pronto para o próximo nível?</p><h2>Vamos <em>conversar.</em></h2><a className="button-primary" href="mailto:contato@instituto2630.com.br">Entre em contato <ArrowUpRight size={17} /></a></div><div className="footer-bottom"><a href="#home" className="brand" aria-label="Instituto 2630" /><span>© 2026 Instituto 2630</span><span>Desenvolvimento humano & empresarial</span></div></footer>
    </main>
  );
}
