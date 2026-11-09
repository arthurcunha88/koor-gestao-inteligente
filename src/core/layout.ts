import { app, brand, route, visuals, visualAlt } from './context';
  export function nav(){
  const r=route();
  const links=[['inicio','Início'],['trilhas','Trilhas'],['laboratorio','Laboratório'],['biblioteca','Biblioteca'],['metodo','Sobre']];
  let header=document.querySelector<HTMLElement>('.site-header');
  if(!header){
    document.querySelector<HTMLElement>('#site-header')!.innerHTML=`<header class="site-header">
      <div class="shell header-main">
        <a class="brand" href="#inicio" aria-label="Koor — Gestão Inteligente, voltar ao início">${brand()}<span class="brand-type"><span class="brand-word">Koor</span><span class="brand-caption">gestão inteligente</span></span></a>
        <nav class="main-nav" aria-label="Navegação principal">${links.map(([id,n])=>`<button class="nav-btn" data-route="${id}">${n}</button>`).join('')}<span class="nav-indicator" aria-hidden="true"></span></nav>
        <div class="header-right"><button class="header-tool" data-route="biblioteca" aria-label="Ir para a biblioteca" title="Biblioteca"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg></button></div>
      </div><div class="scroll-progress" id="scroll-progress"></div>
    </header>`;
    header=document.querySelector<HTMLElement>('.site-header');
  }
  header?.querySelectorAll<HTMLButtonElement>('.nav-btn').forEach(button=>{
    const dest=button.dataset.route||'inicio';
    const selected=dest===r||(dest==='trilhas'&&r.startsWith('trilha/'));
    button.classList.toggle('is-active',selected);
    if(selected)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');
  });
  requestAnimationFrame(syncNavIndicator);
}
  export function syncNavIndicator(){
  const menu=document.querySelector<HTMLElement>('.main-nav');
  const active=menu?.querySelector<HTMLButtonElement>('.nav-btn.is-active');
  const marker=menu?.querySelector<HTMLElement>('.nav-indicator');
  if(!menu||!active||!marker)return;
  const x=active.offsetLeft;
  const w=active.offsetWidth;
  marker.style.transform=`translate3d(${x}px,0,0) scaleX(${w/100})`;
  marker.classList.add('is-ready');
}
  export function footer(){
    document.querySelector<HTMLElement>('#site-footer')!.innerHTML=`<footer class="site-footer"><div class="shell footer-compact">
      <a class="footer-photo" href="#trilhas" aria-label="Conhecer as trilhas de liderança"><img src="${visuals.closing}" alt="${visualAlt.closing}" width="1200" height="675" loading="lazy" decoding="async"></a>
      <div class="footer-content">
        <div class="footer-topline">
          <div class="footer-identity"><div class="footer-mark">${brand('',true)}<span>Koor</span></div><span class="footer-identity-caption">gestão inteligente</span></div>
          <nav class="footer-quick-nav" aria-label="Navegação do rodapé">
            <a href="#inicio">Início</a><a href="#trilhas">Trilhas</a><a href="#laboratorio">Laboratório</a><a href="#biblioteca">Biblioteca</a><a href="#metodo">Sobre</a>
          </nav>
        </div>
        <p class="footer-statement">Liderança exige escuta, clareza e responsabilidade nas decisões.</p>
        <div class="footer-bottom">
          <span>© Koor — Gestão Inteligente</span>
          <span>Idealização e autoria: Arthur Andrade Cunha</span>
          <a href="#biblioteca">Referências e créditos</a>
        </div>
      </div>
    </div></footer>`;
  }
  let revealObserver: IntersectionObserver | null = null;
  export function motion(){
    if(revealObserver){ revealObserver.disconnect(); revealObserver=null; }
    const nodes=[...app.querySelectorAll<HTMLElement>('[data-reveal]')];
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduced || !('IntersectionObserver' in window)){
      nodes.forEach(node=>node.classList.add('shown'));
      return;
    }
    revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        entry.target.classList.add('shown');
        revealObserver?.unobserve(entry.target);
      });
    },{threshold:0.01,rootMargin:'0px 0px 65px 0px'});
    nodes.forEach(node=>{
      if(node.getBoundingClientRect().top < window.innerHeight + 50){node.classList.add('shown');}
      else {revealObserver?.observe(node);}
    });
  }
  export function setTitle(title: string){document.title=`${title} | Koor — Gestão Inteligente`;}
