export default function Contact() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-slate-700">You can reach me through any of the options below.</p>

      <div className="mt-6 space-y-3 max-w-md">
        <a href="mailto:baburanaani@gmail.com" className="block bg-white dark:bg-slate-800 border px-4 py-3 rounded hover:shadow">📧 Email: baburanaani@gmail.com</a>

        <a href="https://wa.me/9242898355" target="_blank" rel="noreferrer" className="block bg-white dark:bg-slate-800 border px-4 py-3 rounded hover:shadow">💬 WhatsApp: Start a chat</a>

        <a href="https://www.linkedin.com/in/aniruddha-rana-86b097284/" target="_blank" rel="noreferrer" className="block bg-white dark:bg-slate-800 border px-4 py-3 rounded hover:shadow">🔗 LinkedIn: View profile</a>
      </div>
    </main>
  )
}
