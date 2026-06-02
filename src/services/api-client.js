const BASE_URL = "https://openlibrary.org";
const COVER_BASE_URL = "https://covers.openlibrary.org/b/id";

function toVolumeInfo(doc) {
  const coverId = doc.cover_i;
  const thumbnail = coverId
    ? `${COVER_BASE_URL}/${coverId}-M.jpg`
    : "https://placehold.co/180x280";

  return {
    id: doc.key,
    volumeInfo: {
      title: doc.title || "No Title Available on the Web",
      subtitle: doc.subtitle || "",
      authors: doc.author_name || ["Unknown Authors"],
      imageLinks: { thumbnail },
      description: doc.first_sentence?.[0] || "No description available.",
      subjects: Array.isArray(doc.subject) ? doc.subject : [],
      publishedYear: doc.first_publish_year || null,
      editionCount: doc.edition_count || null,
      languages: Array.isArray(doc.language) ? doc.language : [],
      publishers: Array.isArray(doc.publisher) ? doc.publisher : [],
      isbn: Array.isArray(doc.isbn) ? doc.isbn : [],
      pageCount: doc.number_of_pages_median || null,
    },
  };
}

async function fetchBooks(query, controller) {
  try {
    const response = await fetch(
      `${BASE_URL}/search.json?q=${encodeURIComponent(query)}&limit=20`,
      {
        signal: controller.signal,
      }
    );
    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }
    const data = await response.json();
    return Array.isArray(data.docs) ? data.docs.map(toVolumeInfo) : [];
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Fetch aborted", error.message);
      throw error;
    }
    return [];
  }
}

export default fetchBooks;
