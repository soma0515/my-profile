import { useState } from 'react';

// おみくじの結果一覧（配列で管理）
const results = [
  { label: '大吉', color: 'text-red-700', border: 'border-red-700' },
  { label: '中吉', color: 'text-orange-700', border: 'border-orange-700' },
  { label: '小吉', color: 'text-amber-600', border: 'border-amber-600' },
  { label: '吉', color: 'text-emerald-700', border: 'border-emerald-700' },
  { label: '末吉', color: 'text-sky-700', border: 'border-sky-700' },
  { label: '凶', color: 'text-stone-600', border: 'border-stone-600' },
];

function App() {
  // 今表示している結果（最初は未実施なのでnull）
  const [result, setResult] = useState(null);

  // ボタンを押したときにランダムで1つ選ぶ
  const drawOmikuji = () => {
    const randomIndex = Math.floor(Math.random() * results.length);
    setResult(results[randomIndex]);
  };

  return (
    <main className="min-h-screen bg-[#f7f1e3] flex items-center justify-center p-4">
      <div className="bg-[#fffdf8] border-2 border-[#8b1a1a] rounded-lg shadow-xl p-10 w-full max-w-sm text-center relative">

        {/* 上下の飾り罫線 */}
        <div className="absolute top-3 left-3 right-3 border-t border-[#8b1a1a]/30"></div>
        <div className="absolute bottom-3 left-3 right-3 border-b border-[#8b1a1a]/30"></div>

        <h1 className="text-3xl font-extrabold text-[#8b1a1a] mb-2 tracking-widest">
          御 神 籤
        </h1>
        <p className="text-xs text-stone-400 mb-8 tracking-wide">OMIKUJI</p>

        <div className="h-28 flex items-center justify-center mb-8">
          {result ? (
            <p className={`text-5xl font-extrabold ${result.color} drop-shadow-sm animate-[fadeIn_0.3s_ease-in]`}>
              {result.label}
            </p>
          ) : (
            <p className="text-stone-400 text-sm">ボタンを押して運試し</p>
          )}
        </div>

        {/* 大きめのボタン + hoverで目立たせる */}
        <button
          onClick={drawOmikuji}
          className="w-full bg-[#8b1a1a] text-[#fffdf8] text-lg font-bold py-4 rounded-md
                     shadow-md transition-all duration-300
                     hover:bg-[#a52424] hover:scale-105 hover:shadow-xl
                     active:scale-95"
        >
          おみくじを引く
        </button>
      </div>
    </main>
  );
}

export default App;