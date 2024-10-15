import BackToTopButton from '@/components/BackToTopButton';
import Header from '@/components/Header';
import Projects from '@/components/Project';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: "NakTech",
  description: "Portfolio Website",
};

export default function HomePage() {
  return (
    <>
      <ScrollProgressBar />
      <main>
            <Header />
            <Projects />
            <BackToTopButton />
      </main>
      
    </>
      
       
  );
}
