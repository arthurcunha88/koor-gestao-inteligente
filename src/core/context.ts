import { data } from '../data';
import type { Topic, Source, HubState, ProgressRecord, ChoiceRecord } from '../types';
  const visuals={hero:'assets/hero-team.jpg',coaching:'assets/coaching.jpg',workshop:'assets/workshop.jpg'};
  const visualAlt={hero:'Reunião de liderança colaborativa em uma sala iluminada.',coaching:'Conversa individual de coaching entre líder e liderado.',workshop:'Equipe em workshop de planejamento e priorização.'};
  function topicVisual(id: string){return ( {pessoas:visuals.coaching,comunicacao:visuals.coaching,decisoes:visuals.hero,conflitos:visuals.workshop,etica:visuals.hero} as Record<string,string> )[id]||visuals.hero;}
  function topicVisualAlt(id: string){return ( {pessoas:'Conversa de desenvolvimento individual.',comunicacao:'Momento de escuta ativa e feedback.',decisoes:'Reunião de decisão com equipe.',conflitos:'Workshop coletivo para alinhar interesses.',etica:'Equipe debatendo critérios e responsabilidade.'} as Record<string,string> )[id]||visualAlt.hero;}

  const topics = data.topics;
  const sourceMap: Record<string, Source> = Object.fromEntries(data.sources.map(s => [s.id,s]));
  const app = document.querySelector<HTMLElement>('#app')!;
  const state: HubState = {labTool:'delegacao',query:'',filter:'todos',kind:'todos'};
  const ESC = (s: unknown) => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'} as Record<string,string>)[c]);
  let logoSequence = 0;
  const brand = (className: string = '', inverted: boolean = false) => {
    const maskId = `koor-logo-mask-${++logoSequence}`;
    return `<svg class="koor-mark ${className}" viewBox="0 0 100 100" aria-hidden="true" focusable="false" style="color:${inverted ? 'var(--paper)' : 'var(--accent)'}">
      <defs><mask id="${maskId}" maskUnits="userSpaceOnUse"><rect width="100" height="100" fill="white"/><path d="M33 20.5V81.5 M33 50L94.6 .9 M33 50L72.3 81.2" stroke="black" stroke-width="14.4" fill="none"/></mask></defs>
      <circle cx="50" cy="50" r="46.4" fill="currentColor" mask="url(#${maskId})"/></svg>`;
  };
  const route = () => (decodeURIComponent(location.hash.slice(1)) || 'inicio').replace(/^\/+/, '');
  const tLink = (id: string) => `#trilha/${id}`;
  const topic = (id: string) => topics.find(t=>t.id===id);
  const label = (text: string,cls: string = '') => `<div class="kicker ${cls}">${ESC(text)}</div>`;
  const arrow = `<span class="arrow" aria-hidden="true">↗</span>`;
  let memoryProgress: ProgressRecord = {};
  let memoryChoices: ChoiceRecord = {};
  function countCompleted(t: Topic){const ids=readProgress()[t.id]||[];return ids.filter(i=>Number.isInteger(i)&&i>=0&&i<t.plan.length).length;}
  function readProgress(): ProgressRecord{try{return JSON.parse(localStorage.getItem('koor_progress_v1')||'{}')||{};}catch{return memoryProgress;}}
  function saveProgress(obj: ProgressRecord){memoryProgress=obj;try{localStorage.setItem('koor_progress_v1',JSON.stringify(obj));}catch{/* Progresso da sessão permanece em memória. */}}
  function readChoices(): ChoiceRecord{try{return JSON.parse(localStorage.getItem('koor_choices_v1')||'{}')||{};}catch{return memoryChoices;}}
  function saveChoices(obj: ChoiceRecord){memoryChoices=obj;try{localStorage.setItem('koor_choices_v1',JSON.stringify(obj));}catch{}}
  let toastTimeout: ReturnType<typeof setTimeout> | undefined;
  function toast(message: string){const el=document.querySelector<HTMLElement>('#toast')!;el.textContent=message;el.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('show'),2600);}

export { visuals, visualAlt, topicVisual, topicVisualAlt, topics, sourceMap, app, state, ESC, brand, route, tLink, topic, label, arrow, countCompleted, readProgress, saveProgress, readChoices, saveChoices, toast };
export { data };
