/** Domínio da plataforma Koor. As tuplas preservam a estrutura editorial. */
export type Pair = [string, string];
export type Metric = [string, string, string];
export interface Foundation {
  name: string; author: string; work: string; text: string; apply: string;
}
export interface Topic {
  id: string; num: string; short: string; title: string; eyebrow: string;
  lead: string; challenge: string; signal: string; question: string;
  foundations: Foundation[];
  cycle: { name: string; subtitle: string; steps: Pair[] };
  traps: Pair[];
  scenario: { title: string; context: string; choices: Pair[]; best: number };
  plan: Metric[];
  metrics: Metric[];
  refs: string[];
}
export interface ReadingLens {
  id: string; label: string; name: string; author: string; year: string;
  question: string; argument: string; limits: string; application: string;
  source: string; userPdf: string;
}
export interface Source {
  id: string; author: string; title: string; year: string; type: string;
  url: string; topic: string;
}
export interface HubState {
  labTool: string; query: string; filter: string; kind: string;
}
export type ProgressRecord = Record<string, number[]>;
export type ChoiceRecord = Record<string, number>;
