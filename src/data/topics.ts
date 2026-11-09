import type { Topic } from '../types';
import { pessoas } from './topics/pessoas';
import { comunicacao } from './topics/comunicacao';
import { decisoes } from './topics/decisoes';
import { conflitos } from './topics/conflitos';
import { etica } from './topics/etica';

export const topics: Topic[] = [pessoas, comunicacao, decisoes, conflitos, etica];
