namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_DATADOG_APPLICATION_ID: string;
    NEXT_PUBLIC_DATADOG_CLIENT_TOKEN: string;
    DD_AGENT_HOST?: string;
    DD_TRACE_AGENT_PORT?: string;
    NODE_ENV: 'development' | 'production' | 'test';
    VERSION?: string;
  }
}