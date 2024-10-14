import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src="/assets/profile.jpg"
            alt="Vathanak Sol"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <p className="text-lg mb-4">
            Hello! I am [Your Name], a passionate web developer and designer with [X] years of experience in creating beautiful, functional websites and applications.
          </p>
          <p className="text-lg mb-4">
            My journey in web development started [brief background]. Since then, I have worked on a variety of projects, from small business websites to large-scale web applications.
          </p>
          <p className="text-lg mb-4">
            I specialize in [your key skills/technologies], and I am always excited to learn new technologies and stay up-to-date with the latest trends in web development.
          </p>
          <p className="text-lg">
            When I am not coding, you can find me [your hobbies/interests].
          </p>
        </div>
      </div>
    </div>
  )
}