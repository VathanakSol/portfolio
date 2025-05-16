"use client";

import { useEffect } from 'react';
import { datadogRum, RumInitConfiguration } from '@datadog/browser-rum';

const DatadogRUM = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const config: RumInitConfiguration = {
        applicationId: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID!,
        clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN!,
        site: 'datadoghq.com',
        service: 'nextjs-frontend',
        env: process.env.NODE_ENV,
        version: process.env.VERSION,
        trackResources: true,
        trackLongTasks: true,
        defaultPrivacyLevel: 'mask-user-input' as const,
      };

      datadogRum.init(config);
      datadogRum.startSessionReplayRecording();
    }
  }, []);

  return null;
};

export default DatadogRUM;