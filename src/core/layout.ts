import { app, brand, route } from './context';
  export function nav(){
    const r=route();
    const links=[['inicio','Início'],['trilhas','Trilhas'],['laboratorio','Laboratório'],['biblioteca','Biblioteca'],['metodo','Sobre']];
    document.querySelector<HTMLElement>('#site-header')!.innerHTML=`<header class="site-header">
      <div class="shell header-main">
        <a class="brand" href="#inicio" aria-label="Koor, voltar ao início">${brand()}<span class="brand-type"><span class="brand-word">Koor</span><span class="brand-caption">gestão inteligente</span></span></a>
        <nav class="main-nav" aria-label="Navegação principal">${links.map(([id,n])=>`<button class="nav-btn ${((r.startsWith('trilha')&&id==='trilhas')||r===id)?'is-active':''}" data-route="${id}" ${((r.startsWith('trilha')&&id==='trilhas')||r===id)?'aria-current="page"':''}>${n}</button>`).join('')}</nav>
        <div class="header-right"><button class="header-tool" data-route="biblioteca" aria-label="Ir para a biblioteca" title="Biblioteca"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg></button></div>
      </div><div class="scroll-progress" id="scroll-progress"></div>
    </header>`;
  }
  export function footer(){
    document.querySelector<HTMLElement>('#site-footer')!.innerHTML=`<footer class="site-footer"><div class="shell">
      <div class="footer-grid"><div><div class="footer-mark">${brand('',true)} Koor</div><p class="footer-description">Um hub para estudar liderança com menos ruído visual, mais clareza de uso e mais espaço para aplicar as ideias na equipe.</p></div>
      <div><div class="footer-head">Explorar</div><div class="footer-links"><button data-route="trilhas">Ver trilhas</button><button data-route="laboratorio">Abrir laboratório</button><button data-route="biblioteca">Consultar referências</button><button data-route="metodo">Entender a Koor</button></div></div>
      <div><div class="footer-head">Base conceitual</div><div class="footer-links"><a href="https://simonsinek.com/books/start-with-why" target="_blank" rel="noopener noreferrer">Simon Sinek</a><a href="https://www.penguinrandomhouse.com/books/84466/the-servant-by-james-c-hunter/" target="_blank" rel="noopener noreferrer">James C. Hunter</a><a href="https://ram-charan.com/books/the-leadership-pipeline/" target="_blank" rel="noopener noreferrer">Ram Charan e coautores</a></div></div></div>
      <div class="footer-bottom"><span>© Koor — Gestão Inteligente</span><span>Conteúdo didático e sínteses autorais para estudo.</span></div>
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
