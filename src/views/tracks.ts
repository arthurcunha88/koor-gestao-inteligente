import { topics, ESC, brand, tLink, arrow, countCompleted } from '../core/context';
import { setTitle } from '../core/layout';
import type { Topic } from '../types';

function trailArtwork(t: Topic){
  if(t.id==="comunicacao"){
    return `<div class="trail-art trail-art--diagram" role="img" aria-label="Duas formas de diálogo em escuta e resposta"><svg viewBox="0 0 480 360" aria-hidden="true" focusable="false"><g class="trail-diagram-strokes" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M74 77h180c30 0 54 24 54 54v44c0 30-24 54-54 54h-48l-52 45v-45H74c-30 0-54-24-54-54v-44c0-30 24-54 54-54Z"/><path d="M282 113h92c34 0 62 27 62 61v49c0 34-28 62-62 62h-36v39l-49-39h-55c-19 0-37-9-48-23" opacity=".66"/></g><g fill="currentColor"><circle cx="114" cy="159" r="7"/><circle cx="163" cy="159" r="7"/><circle cx="212" cy="159" r="7"/><path d="M312 199h76v3h-76zm0 24h50v3h-50z" opacity=".7"/></g></svg></div>`;
  }
  if(t.id==="etica"){
    return `<div class="trail-art trail-art--diagram trail-art--trust" role="img" aria-label="Três círculos interligados em torno de um centro de confiança"><svg viewBox="0 0 480 360" aria-hidden="true" focusable="false"><g class="trail-diagram-strokes" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="240" cy="174" r="121"/><circle cx="240" cy="174" r="86"/><circle cx="240" cy="174" r="48"/><path d="M240 53v242M119 174h242" opacity=".45"/></g><circle cx="240" cy="174" r="12" fill="currentColor"/><circle cx="240" cy="53" r="7" fill="currentColor"/><circle cx="361" cy="174" r="7" fill="currentColor"/><circle cx="119" cy="174" r="7" fill="currentColor"/></svg></div>`;
  }
  const photos: Record<string,string> ={pessoas:"assets/coaching.jpg",decisoes:"assets/hero-team.jpg",conflitos:"assets/workshop.jpg"};
  const alts: Record<string,string> ={pessoas:"Uma líder escuta uma pessoa da equipe em uma conversa de desenvolvimento.",decisoes:"Liderança orientando uma reunião de decisão coletiva.",conflitos:"Equipe organiza prioridades em um workshop de planejamento."};
  const src=photos[t.id]||"assets/hero-team.jpg";
  return `<figure class="trail-art trail-art--photo"><img src="${src}" alt="${alts[t.id]||'Pessoas trabalhando em equipe.'}" loading="lazy" decoding="async" width="1200" height="900"></figure>`;
}

function trailCard(t: Topic, i: number){
  const n=countCompleted(t);
  const pct=n/t.plan.length;
  return `<a class="trail-card ${i===0?'trail-card--featured':''}" href="${tLink(t.id)}" data-reveal style="--reveal-lag:${Math.min(i,3)*65}ms"><div class="trail-card-copy"><span class="trail-card-category">${ESC(t.eyebrow.toLowerCase())}</span><h3>${ESC(t.short)}</h3><p>${ESC(t.lead)}</p><div class="trail-card-foot"><div class="trail-progress" aria-label="${n} de ${t.plan.length} ações realizadas"><span style="transform:scaleX(${pct})"></span></div><span>${n} de ${t.plan.length} ações</span><span class="trail-card-arrow" aria-hidden="true">↗</span></div></div>${trailArtwork(t)}</a>`;
}

export function tracksView(){
  setTitle('Trilhas de liderança');
  return `<div class="shell tracks-page"><section class="tracks-intro"><div class="tracks-intro-copy"><p class="tracks-overline first-in" style="--delay:40ms">Uma biblioteca prática de liderança</p><h1 class="serif first-in" style="--delay:105ms">Cinco perspectivas. <em>O mesmo compromisso com as pessoas.</em></h1><p class="tracks-intro-lead first-in" style="--delay:170ms">Cada trilha combina fundamentos, contrapontos e decisões que acontecem no cotidiano. Escolha o tema mais próximo da realidade da sua equipe e avance no seu ritmo.</p><a class="tracks-intro-link first-in" href="#trilhas-lista" data-anchor="trilhas-lista" style="--delay:235ms">Conhecer as cinco trilhas <span aria-hidden="true">↓</span></a></div><aside class="tracks-brand-panel first-in" aria-label="Koor — gestão inteligente" style="--delay:160ms"><div class="tracks-brand-symbol">${brand('tracks-brand-emblem',true)}</div><div class="tracks-brand-signature"><strong>Koor</strong><span>gestão inteligente</span></div></aside></section><section class="tracks-list-section" id="trilhas-lista"><div class="tracks-list-head" data-reveal><h2>Escolha uma trilha para começar</h2><p>O avanço é registrado somente no seu navegador. Você pode visitar os temas em qualquer ordem.</p></div><div class="trail-grid">${topics.map((t,i)=>trailCard(t,i)).join('')}</div></section></div><section class="home-quote"><div class="shell quote-grid" data-reveal><span class="quote-kicker">Sugestão de percurso</span><div><blockquote>Comece pelas pessoas.<br>Construa <em>clareza.</em><br>Depois sustente decisões.</blockquote><div class="quote-bottom"><p class="subline">A sequência é uma sugestão editorial, não um caminho obrigatório.</p><a href="#trilha/pessoas" class="outline-link">Começar por pessoas e autonomia ${arrow}</a></div></div></div></section>`;
}
