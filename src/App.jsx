import DiaryEntry from './components/DiaryEntry'
import './index.css';
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-6 border-4 border-yellow-300 animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-6">📔 Meu Diário Animado</h1>
        <DiaryEntry />
      </div>
    </div>
  )
}

