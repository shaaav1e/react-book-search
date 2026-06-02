const BookDetail = ({ book, onClose }) => {
  if (!book) return null; // Ensures modal doesn't render if no book is selected

  const topics = Array.isArray(book.subjects) ? book.subjects : [];
  const languages = Array.isArray(book.languages) ? book.languages : [];
  const publishers = Array.isArray(book.publishers) ? book.publishers : [];
  const isbns = Array.isArray(book.isbn) ? book.isbn : [];
  const fallbackParts = [];
  if (book.subtitle) fallbackParts.push(book.subtitle);
  if (topics.length) fallbackParts.push(`Topics: ${topics.slice(0, 6).join(", ")}`);
  if (publishers.length) {
    fallbackParts.push(`Publishers: ${publishers.slice(0, 2).join(", ")}`);
  }
  if (book.pageCount) fallbackParts.push(`Pages: ${book.pageCount}`);
  if (languages.length) fallbackParts.push(`Languages: ${languages.slice(0, 3).join(", ")}`);
  const description =
    book.description && book.description !== "No description available."
      ? book.description
      : fallbackParts.join(" • ") || "No extra details available.";

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-50 text-slate-900 rounded-xl shadow-2xl w-11/12 max-w-3xl p-6 border border-white/10">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900">
              {book.title || "Untitled"}
            </h3>
            {book.publishedYear && (
              <p className="text-sm text-slate-500">
                First published {book.publishedYear}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700"
          >
            {/* ✕ */}
            <i className="ri-close-circle-fill text-2xl"></i>
          </button>
        </div>

        {/* Scrollable Content Wrapper */}
        <div className="mt-4 max-h-[60vh] overflow-y-auto p-2">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="shrink-0">
              <img
                src={book.imageLinks?.thumbnail}
                alt={book.title}
                className="w-40 h-60 object-cover rounded-lg shadow-lg border border-white/10"
              />
            </div>

            <div className="flex-1">
              <p className="text-slate-700">
                <span className="font-semibold">Authors:</span>{" "}
                {book.authors?.join(", ") || "Unknown"}
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-600 sm:grid-cols-2">
                {book.editionCount && (
                  <p>
                    <span className="font-semibold">Editions:</span>{" "}
                    {book.editionCount}
                  </p>
                )}
                {book.pageCount && (
                  <p>
                    <span className="font-semibold">Pages:</span>{" "}
                    {book.pageCount}
                  </p>
                )}
                {languages.length > 0 && (
                  <p>
                    <span className="font-semibold">Languages:</span>{" "}
                    {languages.slice(0, 3).join(", ")}
                  </p>
                )}
                {publishers.length > 0 && (
                  <p>
                    <span className="font-semibold">Publishers:</span>{" "}
                    {publishers.slice(0, 2).join(", ")}
                  </p>
                )}
                {isbns.length > 0 && (
                  <p>
                    <span className="font-semibold">ISBN:</span>{" "}
                    {isbns[0]}
                  </p>
                )}
              </div>
              <p className="text-slate-700 mt-3 leading-7">
                {description}
              </p>
              {topics.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {topics.slice(0, 6).map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Close Button - Always Visible */}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
