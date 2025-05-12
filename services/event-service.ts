import { EventEmitter } from 'events';

class EventService {
  private static instance: EventService;
  public readonly deploymentEvents: EventEmitter;

  private constructor() {
    this.deploymentEvents = new EventEmitter();
    this.deploymentEvents.setMaxListeners(100);
  }

  public static getInstance(): EventService {
    if (!EventService.instance) {
      EventService.instance = new EventService();
    }
    return EventService.instance;
  }
}

export const eventService = EventService.getInstance();