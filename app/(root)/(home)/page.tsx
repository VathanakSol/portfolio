import Header from '@/components/Header';

import Projects from '@/components/Project';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import YoutubeSection from '@/components/YoutubeSection';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: "Home",
  description: "Portfolio Website",
};

export default function HomePage() {
  return (
    <>
      <ScrollProgressBar />
      <main>
          <Header />
          <YoutubeSection />
          <Projects />
      </main>
    </>
      
       
  );
}
