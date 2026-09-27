// title・author・rating・commentの4つをpropsとして受け取るコンポーネント
function BookCard({ title, author, rating, comment }) {
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-2">著者：{author}</p>
      <p className="text-sm text-yellow-500 mb-2">評価：{"★".repeat(rating)}</p>
      <p className="text-sm text-gray-600">{comment}</p>
    </div>
  );
}

export default BookCard;