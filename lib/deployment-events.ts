import { EventEmitter } from 'events';
import { DeploymentStatus } from '@/types/vercel';

export const deploymentEvents = new EventEmitter<{
  'deployment-update': [DeploymentStatus];
}>();

deploymentEvents.setMaxListeners(100);