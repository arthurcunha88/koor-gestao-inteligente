import { data, topics, sourceMap, state, ESC, brand, tLink, topic, label, arrow, countCompleted, readProgress, readChoices, topicVisual, topicVisualAlt, visuals, visualAlt } from '../core/context';
import { setTitle } from '../core/layout';
import type { Topic, Source } from '../types';
  export function sectionHeading(index: string,headline: string,description: string=''){
    const names: Record<string,string>={'01':'Para entender','02':'Para aplicar','03':'Onde é preciso cuidado','04':'Para exercitar o julgamento','05':'Para levar à equipe','06':'Para acompanhar','07':'Para continuar a leitura'};
    const section=names[index]||'Leitura e prática';
    return `<div class="topic-section-head" data-reveal><div><span class="section-eyebrow">${section}</span><h2 class="serif">${ESC(headline)}</h2></div><div>${description?`<p>${ESC(description)}</p>`:''}</div></div>`;
  }

  export function topicView(t: Topic){
    setTitle(t.short);
    const r=readProgress()[t.id]||[];
    const selected=readChoices()[t.id];
    const idx=topics.indexOf(t);const prev=topics[(idx+topics.length-1)%topics.length],next=topics[(idx+1)%topics.length];
    const sources=t.refs.map(id=>sourceMap[id]).filter(Boolean);
    const topicPct=(idx+1)/topics.length;
    return `<div class="shell"><section class="page-intro page-intro-grid page-intro-v3"><div><span class="section-eyebrow first-in" style="--delay:50ms">${ESC(t.eyebrow)}</span><h1 class="serif page-title first-in" style="--delay:100ms">${ESC(t.title)}</h1><p class="page-summary first-in" style="--delay:175ms">${ESC(t.lead)}</p><div class="topic-meter first-in" style="--delay:220ms"><div class="topic-meter-bar"><span style="transform:scaleX(${topicPct})"></span></div><small>Trilha ${t.num} de 5</small></div><div class="first-in" style="--delay:240ms;margin-top:27px"><a class="outline-link" href="#fundamentos" data-anchor="fundamentos">Ler fundamentos <span class="arrow">↓</span></a></div></div><aside class="page-visual first-in" style="--delay:180ms"><img src="${topicVisual(t.id)}" alt="${topicVisualAlt(t.id)}"><p>${ESC(t.challenge)}</p></aside></section></div>
      <div class="chapter-nav"><div class="shell chapter-nav-inner"><nav class="chapter-tabs" aria-label="Seções da trilha"><a href="#fundamentos" data-anchor="fundamentos">Fundamentos</a><a href="#metodo-ciclo" data-anchor="metodo-ciclo">Método</a><a href="#contrapontos" data-anchor="contrapontos">Contrapontos</a><a href="#caso" data-anchor="caso">Caso</a><a href="#aplicacao" data-anchor="aplicacao">Aplicação</a><a href="#indicadores" data-anchor="indicadores">Indicadores</a></nav></div></div>
      <section class="topic-section shell" id="fundamentos">${sectionHeading('01','Ideias para pensar e agir.','Os conceitos abaixo são interpretações didáticas das obras citadas. Eles servem como lentes de julgamento, não como fórmulas universais.')}
        <div class="foundation-list">${t.foundations.map((f,i)=>`<article class="foundation-item" data-reveal><span class="f-number">${String(i+1).padStart(2,'0')}</span><div><h3 class="foundation-name">${ESC(f.name)}</h3><div class="foundation-author">${ESC(f.author)}<br>${ESC(f.work)}</div></div><div class="foundation-description-wrap"><p class="foundation-description">${ESC(f.text)}</p><div class="foundation-apply"><b>Na prática</b>${ESC(f.apply)}</div></div></article>`).join('')}</div>
      </section>
      <section class="topic-section shell" id="metodo-ciclo">${sectionHeading('02','Da leitura ao método.','Síntese própria da Koor para orientar uma ação concreta. As etapas não constituem diagnóstico, certificação nem instrumento validado.')}
        <div class="cycle-header" data-reveal><span class="cycle-name">${ESC(t.cycle.name)}</span><p class="subline body-muted">${ESC(t.cycle.subtitle)}</p></div><div class="cycle-steps">${t.cycle.steps.map(([h,d],i)=>`<div class="cycle-step" data-reveal><span class="cycle-index">Etapa ${i+1}</span><h3>${ESC(h)}</h3><p>${ESC(d)}</p></div>`).join('')}</div>
      </section>
      <section class="topic-section shell" id="contrapontos">${sectionHeading('03','Quando uma boa ideia vira um erro.','Nenhum princípio funciona bem se aplicado sem contexto. Estes contrastes ajudam a reconhecer exageros comuns.')}
      <div class="trap-list">${t.traps.map(([h,d],i)=>`<article class="trap-card" data-reveal><span class="micro">Cuidado de aplicação</span><h3>${ESC(h)}</h3><p>${ESC(d)}</p></article>`).join('')}</div></section>
      <section class="topic-section shell" id="caso">${sectionHeading('04','O julgamento começa no caso.','Escolha uma abordagem e observe suas consequências prováveis. O exercício não é teste de perfil nem oferece respostas universais.')}
      <div class="scenario" data-reveal><div class="scenario-intro"><span class="micro">Situação para analisar</span><div><h3>${ESC(t.scenario.title)}</h3><p>${ESC(t.scenario.context)}</p></div><span class="micro">Discuta as alternativas</span></div><div class="scenario-body"><span class="micro">Qual caminho você adotaria?</span><div class="scenario-options">${t.scenario.choices.map(([text],i)=>`<button class="scenario-option ${selected===i?'chosen':''}" data-scenario="${t.id}" data-choice="${i}" aria-pressed="${selected===i}"><span class="scenario-letter">${['A','B','C'][i]}.</span><span>${ESC(text)}</span></button>`).join('')}</div><div id="scenario-feedback-${t.id}" aria-live="polite">${selected!==undefined?feedbackMarkup(t,selected):''}</div></div></div>
      </section>
      <section class="topic-section shell" id="aplicacao">${sectionHeading('05','Uma semana para começar.','Uma sequência curta, deliberadamente pequena. Marque o que foi realmente feito e use o registro como memória de prática.')}
        <div class="plan-layout"><div class="plan-list" data-reveal>${t.plan.map(([day,head,desc],i)=>`<label class="plan-item"><input type="checkbox" data-plan="${t.id}" data-step="${i}" ${r.includes(i)?'checked':''}><span class="plan-day">${ESC(day)}</span><span><b>${ESC(head)}</b><small>${ESC(desc)}</small></span></label>`).join('')}</div>
        <aside class="plan-aside" data-reveal id="plan-aside-${t.id}">${renderPlanAside(t)}</aside></div>
      </section>
      <section class="topic-section shell" id="indicadores">${sectionHeading('06','O que observar.','Indicadores são pontos de atenção para revisar processos. Não devem ser usados isoladamente para classificar o valor de pessoas.')}
        <div data-reveal><table class="data-table"><thead><tr><th>Indicador sugerido</th><th>Como observar</th><th>Cuidado de interpretação</th></tr></thead><tbody>${t.metrics.map(([a,b,c])=>`<tr><td>${ESC(a)}</td><td>${ESC(b)}</td><td>${ESC(c)}</td></tr>`).join('')}</tbody></table></div>
      </section>
      <section class="topic-section shell" id="fontes">${sectionHeading('07','As ideias têm origem.','As referências são registros bibliográficos, artigos ou páginas de editoras. Os textos deste hub são paráfrases e aplicações originais.')}
       <div class="foundation-list">${sources.map((s,i)=>`<div class="reference-mini" data-reveal><div><span class="micro">${ESC(s.type.toUpperCase())}</span><div style="font:400 27px/1.2 var(--display);margin-top:9px">${ESC(s.title)}</div><small style="font-size:12px;opacity:.7">${ESC(s.author)} ${s.year?'· '+ESC(s.year):''}</small></div><a href="${ESC(s.url)}" target="_blank" rel="noopener noreferrer">Consultar fonte ${arrow}</a></div>`).join('')}</div>
      </section>
      <div class="topic-next"><button data-route="trilha/${prev.id}"><span class="micro">Tema anterior</span><span class="next-title">${ESC(prev.short)}</span></button><button data-route="trilha/${next.id}"><span class="micro">Próximo tema</span><span class="next-title">${ESC(next.short)}</span></button></div>`;
  }

  export function feedbackMarkup(t: Topic,choice: number){const right=choice===t.scenario.best;return `<div class="scenario-feedback"><strong>${right?'Abordagem mais consistente neste cenário':'Ponto de atenção nesta abordagem'}</strong><p>${ESC(t.scenario.choices[choice][1])}</p></div>`;}

  export function renderPlanAside(t: Topic){let n=countCompleted(t);let pct=Math.round(n/t.plan.length*100);return `<span class="micro">PROGRESSO DE PRÁTICA</span><div class="big-percent">${pct}%</div><div class="progress-rail" role="progressbar" aria-label="Progresso da prática" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><div class="progress-fill" style="transform:scaleX(${pct/100})"></div></div><p>${n} de ${t.plan.length} ações realizadas. Progresso salvo neste navegador, sem conta e sem envio de dados.</p><div class="plan-buttons"><button class="mini-button" data-copy-plan="${t.id}">Copiar plano</button><button class="mini-button" data-reset-plan="${t.id}">Reiniciar</button></div>`;}

