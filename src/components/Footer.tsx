export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 glass mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Venkatesh Kothamasu. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Venky060905"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/k-venkatesh-b78293334/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kothamasuvenkatesh79@gmail.com"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
