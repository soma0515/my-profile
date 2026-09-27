import BookCard from './components/BookCard';

// 書籍データ（タイトル・著者・評価・コメントを含む3冊以上）
// 各要素にidを持たせ、mapのkeyにはそのid（データ固有の値）を使う
const books = [
  {
    id: 1,
    title: 'リーダブルコード',
    author: 'Dustin Boswell, Trevor Foucher',
    rating: 5,
    comment: 'コードの読みやすさについて具体的に学べる一冊。',
  },
  {
    id: 2,
    title: 'JavaScript Primer',
    author: '一般社団法人 JS Primer 推進委員会',
    rating: 4,
    comment: '基礎から丁寧に解説されていて初心者にもおすすめ。',
  },
  {
    id: 3,
    title: 'プロを目指す人のためのTypeScript入門',
    author: '鈴木 僚太',
    rating: 5,
    comment: '型の考え方が体系的に理解できる良書。',
  },
  {
    id: 4,
    title: 'エンジニアの知的生産術',
    author: '西尾 泰和',
    rating: 4,
    comment: '学び方そのものについて考えさせられる一冊。',
  },
];

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">おすすめ書籍紹介</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              rating={book.rating}
              comment={book.comment}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;