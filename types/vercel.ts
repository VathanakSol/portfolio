export interface VercelDeployment {
  uid: string;
  name: string;
  url: string;
  state: 'BUILDING' | 'ERROR' | 'INITIALIZING' | 'QUEUED' | 'READY' | 'CANCELED' | 'DEPLOYED';
  alias?: string[];
  createdAt: number;
  buildingAt: number;
  ready?: number;
}

export interface DeploymentStatus {
  isBuilding: boolean;
  state: string;
  progress?: number;
  estimatedCompletion?: string;
  productionUrl?: string;
  deploymentUrl?: string;
  message?: string;
}