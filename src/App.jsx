import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-indigo-500 selection:text-white">
      <main className="w-full max-w-xl bg-slate-900/80 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm text-center">
        <div className="flex items-center justify-center gap-6 mb-6">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
          </a>
          <span className="text-2xl text-slate-600 font-light">+</span>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={reactLogo} className="h-16 w-16 animate-spin [animation-duration:12s]" alt="React logo" />
          </a>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
          Tailwind CSS v4 Ready
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          React + Vite + Tailwind CSS
        </h1>

        <p className="text-slate-400 text-sm sm:text-base mb-8">
          Official recommended modern scaffold with Vite, React 19, and Tailwind CSS.
        </p>

        <div className="flex flex-col items-center gap-4 mb-8">
          <button
            type="button"
            onClick={() => setCount((c) => c + 1)}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 cursor-pointer"
          >
            Count is {count}
          </button>
          <p className="text-xs text-slate-500">
            Edit <code className="font-mono bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300">src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <footer className="pt-6 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            Vite Docs
          </a>
          <span>•</span>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            React Docs
          </a>
          <span>•</span>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            Tailwind CSS Docs
          </a>
        </footer>
      </main>
    </div>
  )
}
