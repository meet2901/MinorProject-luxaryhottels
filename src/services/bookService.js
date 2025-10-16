const API_BASE_URL = 'https://openlibrary.org';

export const getBooks = async (query = 'fiction', page = 1, limit = 20) => {
  try {
    const offset = (page - 1) * limit;
    const response = await fetch(`${API_BASE_URL}/search.json?q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    const data = await response.json();
    return {
      books: data.docs.map(book => ({
        key: book.key,
        title: book.title,
        author: book.author_name ? book.author_name[0] : 'Unknown',
        cover: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null,
        first_publish_year: book.first_publish_year,
        publisher: book.publisher ? book.publisher[0] : 'Unknown',
        isbn: book.isbn ? book.isbn[0] : null,
        language: book.language ? book.language[0] : 'Unknown',
        subjects: book.subject ? book.subject.slice(0, 3) : []
      })),
      total: data.num_found,
      page,
      limit
    };
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const getBookDetails = async (bookKey) => {
  try {
    const response = await fetch(`${API_BASE_URL}${bookKey}.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch book details');
    }
    const data = await response.json();
    return {
      title: data.title,
      authors: data.authors ? data.authors.map(author => author.key) : [],
      description: data.description ? (typeof data.description === 'string' ? data.description : data.description.value) : 'No description available',
      covers: data.covers || [],
      subjects: data.subjects || [],
      publish_date: data.publish_date,
      publishers: data.publishers || [],
      number_of_pages: data.number_of_pages,
      languages: data.languages || []
    };
  } catch (error) {
    console.error('Error fetching book details:', error);
    throw error;
  }
};

export const getPopularBooks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/trending/daily.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch popular books');
    }
    const data = await response.json();
    return data.works.map(work => ({
      key: work.key,
      title: work.title,
      author: work.author_name ? work.author_name[0] : 'Unknown',
      cover: work.cover_i ? `https://covers.openlibrary.org/b/id/${work.cover_i}-M.jpg` : null,
      first_publish_year: work.first_publish_year
    }));
  } catch (error) {
    console.error('Error fetching popular books:', error);
    throw error;
  }
};
