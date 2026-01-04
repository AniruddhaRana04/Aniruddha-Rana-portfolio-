export default function About() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">About — Aniruddha Rana</h1>
      <p className="text-slate-550">Hello! I’m Aniruddha Rana, a passionate Computer Applications student pursuing my Bachelor of Computer Application (BCA) from Midnapore College (Autonomous), affiliated with Vidyasagar University. I have a strong interest in web development, Python programming, and building real-world digital solutions.
        <br /> <br />
        I have hands-on experience in developing web applications, including my academic project “HomeFixHub”, a platform designed to connect customers with skilled home service providers. This project helped me gain practical exposure to frontend development, backend logic, and problem-solving.
        <br /> <br />
        With a solid academic background and a keen desire to learn new technologies, I continuously work on improving my technical skills and adapting to modern development practices. I believe in writing clean, efficient code and creating user-friendly applications that solve real-life problems.
        <br /> <br />
        I am currently looking for opportunities to learn, grow, and contribute in the field of software and web development.</p>

      <div className="mt-6">
        <a href="/resume.pdf" className="inline-block bg-slate-800 text-white px-4 py-2 rounded" target="_blank" rel="noopener noreferrer" download aria-label="Download resume">Download resume</a>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside mt-2 text-slate-600 dark:text-slate-300">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Tailwind CSS</li>
            <li>Python</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
        </ul>
      </section>
    </main>
  )
}
