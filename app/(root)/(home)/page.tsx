import BackToTopButton from '@/components/BackToTopButton';
import Header from '@/components/Header';
import Projects from '@/components/Project';
import ScrollProgressBar from '@/components/ScrollProgressBar';

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
