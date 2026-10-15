// Les chapitres de Terminus, dans l'ordre. Voir docs/scenarios/terminus.md.
import type { Chapitre } from '../monde';
import { eveil } from './eveil';
import { bourg } from './bourg';

export const CHAPITRES: Chapitre[] = [eveil, bourg];
