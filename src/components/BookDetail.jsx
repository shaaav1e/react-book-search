const BookDetail = ({ book, onClose }) => {
  if (!book) return null; // Ensures modal doesn't render if no book is selected

  return (
    <div className="fixed inset-0 bg-slate-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 max-w-2xl p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {book.title || "Untitled"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 "
          >
            {/* ✕ */}
            <i className="ri-close-circle-fill text-2xl"></i>
          </button>
        </div>

        {/* Scrollable Content Wrapper */}
        <div className="mt-4 max-h-[60vh] overflow-y-auto p-2">
          <div className="flex flex-col md:flex-row">
            {/* Book Thumbnail */}
            {book.imageLinks?.thumbnail ? (
              <img
                src={book.imageLinks.thumbnail}
                alt={book.title}
                className="w-40 h-60 object-cover rounded-lg mr-4"
              />
            ) : (
              <div className="w-40 h-60 bg-gray-300 dark:bg-gray-600 flex items-center justify-center rounded-lg mr-4">
                <p className="text-gray-500 dark:text-gray-400">No Image</p>
              </div>
            )}

            {/* Book Information */}
            <div className="flex-1">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Authors:</strong>{" "}
                {book.authors?.join(", ") || "Unknown"}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {book.description || "No description available."}
              </p>
            </div>
          </div>
        </div>

        {/* Close Button - Always Visible */}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
