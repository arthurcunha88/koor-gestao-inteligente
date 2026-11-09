import './styles/base.css';
import './styles/editorial.css';
import './styles/refinements.css';
import './styles/experience.css';
import { app, topics, state, route, topic, readProgress, saveProgress, readChoices, saveChoices, arrow, toast } from './core/context';
import { nav, footer, motion, syncNavIndicator } from './core/layout';
import { indexView } from './views/home';
import { tracksView } from './views/tracks';
import { topicView, feedbackMarkup, renderPlanAside } from './views/topic';
import { laboratory, labToolPanel, updateToolPreview } from './views/laboratory';
import { library, filterLibrary } from './views/library';
import { method } from './views/about';
  function render({preserve=false}: {preserve?: boolean}={}){
    const before=window.scrollY;
    const r=route();
    nav();
    const header=document.querySelector<HTMLElement>('.site-header');
    if(header)document.documentElement.style.setProperty('--koor-header-h',header.offsetHeight+'px');
    if(r==='inicio')app.innerHTML=indexView();
    else if(r==='trilhas')app.innerHTML=tracksView();
    else if(r.startsWith('trilha/'))app.innerHTML=topicView(topic(r.split('/')[1])||topics[0]);
    else if(r==='laboratorio')app.innerHTML=laboratory();
    else if(r==='biblioteca')app.innerHTML=library();
    else if(r==='metodo')app.innerHTML=method();
    else{location.hash='#inicio';return;}
    footer();motion();
    if(r==='biblioteca')filterLibrary();
    if(r==='laboratorio')updateToolPreview();
    if(preserve)window.scrollTo({top:before,behavior:'auto'});
    else window.scrollTo({top:0,behavior:'auto'});
    progress();
  }

  let scrollFrame = 0;
  function progress(){
    if(scrollFrame)return;
    scrollFrame=requestAnimationFrame(()=>{
      scrollFrame=0;
      const node=document.getElementById('scroll-progress');
      if(!node)return;
      const max=document.documentElement.scrollHeight-window.innerHeight;
      const ratio=max>0?Math.max(0,Math.min(1,window.scrollY/max)):0;
      node.style.transform=`scaleX(${ratio})`;
    });
  }
  async function copyText(text: string){
    try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);toast('Texto copiado para a área de transferência.');return;}}catch{}
    const temp=document.createElement('textarea');temp.value=text;temp.style.position='fixed';temp.style.left='-9999px';document.body.appendChild(temp);temp.select();
    try{const ok=document.execCommand('copy');toast(ok?'Texto copiado para a área de transferência.':'Selecione e copie o texto exibido.');}catch{toast('Selecione e copie o texto exibido.');}finally{temp.remove();}
  }
  document.addEventListener('click',event=>{
    const target=event.target as HTMLElement;
    const anchor=target.closest<HTMLAnchorElement>('a[data-anchor]');
    if(anchor){event.preventDefault();const section=document.getElementById(anchor.dataset.anchor || '');section?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});return;}
    const goto=target.closest<HTMLButtonElement>('button[data-route]');if(goto){const destination=goto.dataset.route;if(route()===destination){window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}else{location.hash='#'+destination;}return;}
    const selection=target.closest<HTMLButtonElement>('button[data-lab]');if(selection){
      const next=selection.dataset.lab || 'delegacao';
      if(next===state.labTool)return;
      state.labTool=next;
      document.querySelectorAll<HTMLButtonElement>('[data-lab]').forEach(el=>{const active=el.dataset.lab===next;el.classList.toggle('is-active',active);el.setAttribute('aria-selected',String(active));el.querySelector<HTMLElement>('span')!.innerHTML=(active?'SELECIONADO':'ABRIR')+' '+arrow;});
      const panel=document.getElementById('lab-tool');
      if(panel){panel.innerHTML=labToolPanel();panel.setAttribute('aria-labelledby','tab-'+next);}
      updateToolPreview();
      document.getElementById('tab-'+next)?.focus({preventScroll:true});
      return;
    }
    const scenario=target.closest<HTMLButtonElement>('button[data-scenario]');if(scenario){const id=scenario.dataset.scenario || '';const choice=Number(scenario.dataset.choice);const t=topic(id);if(!t)return;const choices=readChoices();choices[id]=choice;saveChoices(choices);document.querySelectorAll<HTMLButtonElement>(`[data-scenario="${id}"]`).forEach(el=>{const active=Number(el.dataset.choice)===choice;el.classList.toggle('chosen',active);el.setAttribute('aria-pressed',String(active));});const result=document.getElementById('scenario-feedback-'+id);if(result)result.innerHTML=feedbackMarkup(t,choice);return;}
    const reset=target.closest<HTMLButtonElement>('button[data-reset-plan]');if(reset){const t=topic(reset.dataset.resetPlan || '');if(!t)return;const p=readProgress();p[t.id]=[];saveProgress(p);document.querySelectorAll<HTMLInputElement>(`input[data-plan="${t.id}"]`).forEach(el=>el.checked=false);document.getElementById('plan-aside-'+t.id)!.innerHTML=renderPlanAside(t);return;}
    const cp=target.closest<HTMLButtonElement>('button[data-copy-plan]');if(cp){const t=topic(cp.dataset.copyPlan || '');if(!t)return;copyText(`PLANO DE APLICAÇÃO — KOOR / ${t.short}\n\n`+t.plan.map(([day,h,d])=>`${day} — ${h}\n${d}`).join('\n\n')+`\n\nPergunta de reflexão: ${t.question}`);return;}
    if(target.closest('[data-copy-preview]')){copyText(document.getElementById('tool-preview')?.textContent||'');}
  });
  document.addEventListener('change',event=>{const target=event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const plan=target.closest<HTMLInputElement>('input[data-plan]');if(plan){const t=topic(plan.dataset.plan || '');if(!t)return;const i=Number(plan.dataset.step);const p=readProgress();const checked=new Set<number>(p[t.id]||[]);if(plan.checked)checked.add(i);else checked.delete(i);p[t.id]=[...checked];saveProgress(p);const aside=document.getElementById('plan-aside-'+t.id);if(aside)aside.innerHTML=renderPlanAside(t);return;}
    if(target.id==='library-topic'){state.filter=target.value;filterLibrary();return;}
    if(target.id==='library-kind'){state.kind=target.value;filterLibrary();return;}
    if(target.hasAttribute('data-tool-field'))updateToolPreview();
  });
  document.addEventListener('input',event=>{const target=event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;if(target.id==='library-search'){state.query=target.value;filterLibrary();return;}if(target.hasAttribute('data-tool-field'))updateToolPreview();});
  window.addEventListener('hashchange',()=>render());

  let resizeFrame = 0;
  window.addEventListener('resize',()=>{
    if(resizeFrame)return;
    resizeFrame=requestAnimationFrame(()=>{
      resizeFrame=0;
      const h=document.querySelector<HTMLElement>('.site-header');
      if(h)document.documentElement.style.setProperty('--koor-header-h',h.offsetHeight+'px');
      syncNavIndicator();
      progress();
    });
  },{passive:true});
  const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
  document.documentElement.classList.toggle('motion-enabled',!motionPreference.matches && 'IntersectionObserver' in window);
  motionPreference.addEventListener?.('change',e=>{document.documentElement.classList.toggle('motion-enabled',!e.matches && 'IntersectionObserver' in window);if(e.matches){app.querySelectorAll('[data-reveal]').forEach(n=>n.classList.add('shown'));}});
  window.addEventListener('scroll',progress,{passive:true});
  window.addEventListener('load',progress,{once:true});
  render();
