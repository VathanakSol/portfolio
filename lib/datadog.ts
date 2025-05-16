import tracer from 'dd-trace';

type DatadogConfig = {
  service: string;
  env: string | undefined;
  version: string | undefined;
  logInjection: boolean;
};

const initializeTracer = (config: Partial<DatadogConfig> = {}) => {
  const defaultConfig: DatadogConfig = {
    service: 'nextjs-app',
    env: process.env.NODE_ENV,
    version: process.env.VERSION,
    logInjection: true,
    ...config
  };

  tracer.init(defaultConfig);
  return tracer;
};

const datadogTracer = initializeTracer();

export { datadogTracer as tracer };