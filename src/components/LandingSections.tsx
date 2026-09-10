"use client";

import Image from "next/image";
import { ChevronField } from "@/components/ChevronField";
import { CtaButton } from "@/components/CtaButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { NucoeDiagram } from "@/components/NucoeDiagram";
import { Reveal } from "@/components/Reveal";
import {
  nucoe,
  resolveCheckoutHref,
} from "@/content/nucoe";
import { assetPath } from "@/lib/assetPath";
import styles from "./LandingSections.module.css";

export function LandingSections() {
  const checkout = resolveCheckoutHref(nucoe.checkoutUrl);
  const micro = `${nucoe.event.platform} • ${nucoe.event.dateLabel} • ${nucoe.event.timeLabel} • ${nucoe.event.seatsLabel}`;

  return (
    <>
      {/* 1 Hero */}
      <section id="hero" className={`section section--dark ${styles.hero}`}>
        <Image
          src={assetPath("/images/freitas-hero.png")}
          alt="Freitas conduzindo uma formação do Instituto 2630"
          fill
          sizes="(min-width: 860px) 58vw, 100vw"
          className={styles.heroPhoto}
          priority
        />
        <div className={styles.heroShade} aria-hidden />
        <div className={`section__inner ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Reveal>
              <p className="eyebrow">{nucoe.hero.eyebrow}</p>
            </Reveal>
            <Reveal delayMs={100}>
              <h1 className={`headline ${styles.heroHeadline}`}>
                {nucoe.hero.headline}
              </h1>
            </Reveal>
            <Reveal delayMs={180}>
              <p className={`lede ${styles.heroLede}`}>
                {nucoe.hero.subheadline}
              </p>
            </Reveal>
            <Reveal delayMs={240}>
              <div className={styles.ctaRow}>
                <CtaButton href={checkout} className={styles.heroCta}>
                  {nucoe.ctas.primary}
                </CtaButton>
              </div>
              <div className={styles.heroMeta}>
                <span className={styles.heroMetaItem}>
                  <strong>2 dias</strong>
                  <small>formação ao vivo</small>
                </span>
                <span className={styles.heroMetaItem}>
                  <strong>Online + Zoom</strong>
                  <small>ao vivo com a turma</small>
                </span>
                <span className={styles.heroMetaItem}>
                  <strong>Vagas limitadas</strong>
                  <small>turma ao vivo</small>
                </span>
              </div>
              <p className={`micro ${styles.heroMicro}`}>{micro}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 Problem */}
      <section
        className={`section section--light ${styles.withPhoto}`}
        id="problema"
      >
        <Image
          src={assetPath("/images/freitas-speaking.jpg")}
          alt=""
          fill
          sizes="100vw"
          className={`${styles.editorialImage} ${styles.imageLight}`}
          aria-hidden
        />
        <div className="section__inner">
          <Reveal>
            <h2 className="headline">{nucoe.problem.headline}</h2>
            <p className="lede">{nucoe.problem.body}</p>
          </Reveal>
          <Reveal delayMs={120}>
            <div className={styles.ctaRow}>
              <CtaButton href={checkout} variant="ghost">
                {nucoe.ctas.secondary}
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 Idea NUCOE */}
      <section className="section section--dark" id="nucoe">
        <div className="section__inner">
          <Reveal>
            <p className="eyebrow">{nucoe.idea.eyebrow}</p>
            <h2 className="headline">{nucoe.idea.headline}</h2>
            <p className="lede">{nucoe.idea.intro}</p>
          </Reveal>
          <NucoeDiagram pillars={nucoe.idea.pillars} closing={nucoe.idea.closing} />
        </div>
      </section>

      {/* 5 Bridge */}
      <section
        className={`section section--dark ${styles.withPhoto}`}
        id="ponte"
      >
        <Image
          src={assetPath("/images/operations-fire.jpg")}
          alt=""
          fill
          sizes="100vw"
          className={`${styles.editorialImage} ${styles.imageDark}`}
          aria-hidden
        />
        <div className="section__inner">
          <Reveal>
            <h2 className="headline headline--wide">{nucoe.bridge.headline}</h2>
            <p className="lede">{nucoe.bridge.body}</p>
          </Reveal>
        </div>
      </section>

      {/* 6 Deliverables */}
      <section className="section section--light" id="entregaveis">
        <div className="section__inner">
          <Reveal>
            <h2 className="headline headline--wide">{nucoe.deliverables.headline}</h2>
            <p className="lede">{nucoe.deliverables.intro}</p>
            <ul className="list-clean">
              {nucoe.deliverables.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayMs={150}>
            <div className={styles.ctaRow}>
              <CtaButton href={checkout}>{nucoe.ctas.primary}</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7 Method */}
      <section
        className={`section section--light ${styles.withPhoto}`}
        id="metodo"
      >
        <Image
          src={assetPath("/images/freitas-whiteboard.jpg")}
          alt=""
          fill
          sizes="100vw"
          className={`${styles.editorialImage} ${styles.imageLight} ${styles.imageRight}`}
          aria-hidden
        />
        <div className="section__inner">
          <Reveal>
            <p className="eyebrow">O método na prática</p>
            <h2 className="headline">{nucoe.method.headline}</h2>
            <p className="lede">{nucoe.method.intro}</p>
          </Reveal>
          <ol className={styles.methodTrack}>
            {nucoe.method.steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delayMs={i * 90}
                className={styles.methodStep}
              >
                <span className={styles.methodIndex}>{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <strong>{step.title}</strong>
                  <small>{step.detail}</small>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 8 Audience */}
      <section className="section section--light" id="para-quem">
        <div className="section__inner">
          <Reveal>
            <h2 className="headline">{nucoe.audience.headline}</h2>
          </Reveal>
          <div className="split-2">
            <Reveal delayMs={80}>
              <h3 className={styles.subhead}>É para</h3>
              <ul className="list-clean">
                {nucoe.audience.for.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delayMs={160}>
              <h3 className={styles.subhead}>Não é para</h3>
              <ul className={`list-clean ${styles.against}`}>
                {nucoe.audience.against.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9 Guide */}
      <section className="section section--dark" id="guia">
        <div className={`section__inner ${styles.guideGrid}`}>
          <Reveal>
            <div className={styles.portrait}>
              {nucoe.guide.imageSrc ? (
                <Image
                  src={assetPath(nucoe.guide.imageSrc)}
                  alt={nucoe.guide.name}
                  width={480}
                  height={600}
                  className={styles.portraitImage}
                />
              ) : (
                <div className={styles.portraitPh}>
                  <span>Foto Freitas</span>
                  <span>placeholder</span>
                </div>
              )}
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="eyebrow">Quem é o guia</p>
            <h2 className="headline">{nucoe.guide.headline}</h2>
            <p className="lede">{nucoe.guide.bio}</p>
            <div className={styles.ctaRow}>
              <CtaButton href={checkout}>{nucoe.ctas.secondary}</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10 Proof */}
      <section className="section section--grey" id="prova">
        <div className="section__inner">
          <Reveal>
            <p className="eyebrow">{nucoe.proof.eyebrow}</p>
            <h2 className="headline">{nucoe.proof.headline}</h2>
            <p className="lede">{nucoe.proof.intro}</p>
          </Reveal>
          <div className={styles.proofGrid}>
            {nucoe.proof.testimonials.map((t, i) => (
              <Reveal key={`${t.name}-${i}`} delayMs={i * 100} as="article" className={styles.quote}>
                <p>“{t.quote}”</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11 + 12 Offer + Bonus */}
      <section className={`section section--dark ${styles.offer}`} id="oferta">
        <ChevronField density={12} />
        <div className="section__inner">
          <Reveal>
            <p className="eyebrow">A oferta</p>
            <h2 className="headline headline--wide">{nucoe.offer.headline}</h2>
          </Reveal>
          <Reveal delayMs={100}>
            <ul className={`list-clean ${styles.offerList}`}>
              <li>
                <strong>Formato:</strong> {nucoe.event.formatLabel} • {nucoe.event.platform}
              </li>
              <li>
                <strong>Quando:</strong> {nucoe.event.dateLabel} • {nucoe.event.timeLabel}
              </li>
              <li>
                <strong>Plataforma:</strong> {nucoe.event.platform}
              </li>
              {nucoe.offer.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>
                <strong>Investimento:</strong> {nucoe.priceLabel}
              </li>
            </ul>
          </Reveal>
          <Reveal delayMs={160}>
            <div className={styles.ctaRow}>
              <CtaButton href={checkout}>{nucoe.ctas.offer}</CtaButton>
            </div>
            <p className="micro">{nucoe.offer.microcopy}</p>
          </Reveal>
          <Reveal delayMs={220}>
            <div className={styles.bonus}>
              <h3>{nucoe.bonus.headline}</h3>
              <p>{nucoe.bonus.body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 13 FAQ */}
      <section className="section section--light" id="faq">
        <div className="section__inner">
          <Reveal>
            <h2 className="headline">Perguntas frequentes</h2>
          </Reveal>
          <Reveal delayMs={80}>
            <FaqAccordion items={nucoe.faq} />
          </Reveal>
        </div>
      </section>

      {/* 14 Close */}
      <section className={`section section--dark ${styles.close}`} id="fechamento">
        <div className="section__inner">
          <Reveal className={styles.closeStack}>
            <h2 className="headline headline--wide">{nucoe.close.headline}</h2>
            <p className={`lede ${styles.closeLede}`}>{nucoe.close.body}</p>
            <p className={styles.mother}>{nucoe.mother}</p>
            <div className={styles.ctaRow}>
              <CtaButton href={checkout}>{nucoe.ctas.primary}</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
