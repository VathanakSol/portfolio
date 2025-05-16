import { datadogRum } from '@datadog/browser-rum';

type RumAction = {
  type: string;
  name?: string;
  context?: Record<string, unknown>;
};

export const trackAction = ({ type, name, context }: RumAction) => {
  if (process.env.NODE_ENV === 'production') {
    datadogRum.addAction(type, { ...context, actionName: name });
  }
};

// Example usage in a component
trackAction({
  type: 'click',
  name: 'checkout-button',
  context: { plan: 'premium' }
});