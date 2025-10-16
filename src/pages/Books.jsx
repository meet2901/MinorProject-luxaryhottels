import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { getBooks, getPopularBooks } from '../services/bookService';

const BooksContainer = styled.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);

  @media (max-width: 768px) {
    padding: var(--space-xl) var(--space-md);
  }
`;

const BooksHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-3xl);
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 20px;
  padding: var(--space-3xl) var(--space-xl);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="books-pattern" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M10 10 L20 10 L20 20 L10 20 Z" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23books-pattern)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: var(--space-2xl) var(--space-lg);
    margin-bottom: var(--space-2xl);
  }
`;

const BooksTitle = styled.h1`
  margin-bottom: var(--space-lg);
  font-size: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: var(--space-md);
  }
`;

const BooksDescription = styled.p`
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.125rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SearchSection = styled.div`
  margin-bottom: var(--space-3xl);
  display: flex;
  gap: var(--space-lg);
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-md);
  }
`;

const SearchInput = styled.input`
  padding: var(--space-md) var(--space-lg);
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  width: 300px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);
  margin-bottom: var(--space-3xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
`;

const BookCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const BookCover = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .no-cover {
    font-size: 3rem;
    color: #adb5bd;
  }
`;

const BookInfo = styled.div`
  padding: var(--space-lg);

  h3 {
    font-size: 1.25rem;
    color: #333;
    margin-bottom: var(--space-sm);
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .author {
    color: #4facfe;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: var(--space-sm);
  }

  .year {
    color: #6c757d;
    font-size: 0.875rem;
    margin-bottom: var(--space-md);
  }

  .subjects {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-bottom: var(--space-md);

    .subject {
      background: rgba(79, 172, 254, 0.1);
      color: #4facfe;
      padding: var(--space-xs) var(--space-sm);
      border-radius: 15px;
      font-size: 0.75rem;
      font-weight: 500;
    }
  }
`;

const PaginationSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-3xl);

  .page-info {
    color: #6c757d;
    font-size: 0.9rem;
  }
`;

const PopularBooksSection = styled.div`
  margin-bottom: var(--space-3xl);
`;

const PopularBooksTitle = styled.h2`
  color: #333;
  margin-bottom: var(--space-xl);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
  }
`;

const PopularBooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-lg);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--space-md);
  }
`;

const PopularBookCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #e9ecef;
  text-align: center;

  .cover {
    height: 150px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }

    .no-cover {
      font-size: 2rem;
      color: #adb5bd;
    }
  }

  .info {
    padding: var(--space-md);

    h4 {
      font-size: 0.9rem;
      color: #333;
      margin-bottom: var(--space-xs);
      font-weight: 600;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .author {
      color: #4facfe;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;

function Books() {
  const [books, setBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popularLoading, setPopularLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('fiction');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);
  const [searchInput, setSearchInput] = useState('fiction');
  const booksPerPage = 20;

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        setPopularLoading(true);
        const data = await getPopularBooks();
        setPopularBooks(data);
      } catch (err) {
        console.error('Error fetching popular books:', err);
      } finally {
        setPopularLoading(false);
      }
    };

    fetchPopularBooks();
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getBooks(query, currentPage, booksPerPage);
        setBooks(data.books);
        setTotalBooks(data.total);
      } catch (err) {
        setError('Failed to load books. Please try again.');
        console.error('Error fetching books:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query, currentPage]);

  const handleSearch = () => {
    setQuery(searchInput);
    setCurrentPage(1);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const totalPages = Math.ceil(totalBooks / booksPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <BooksContainer>
      <BooksHeader data-aos="fade-up">
        <BooksTitle>Library</BooksTitle>
        <BooksDescription>
          Explore our extensive collection of books. Search through millions of titles from around the world.
        </BooksDescription>
      </BooksHeader>

      <SearchSection>
        <SearchInput
          type="text"
          placeholder="Search books..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleSearch}>Search</Button>
      </SearchSection>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>Loading books...</div>
      ) : error ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>{error}</div>
      ) : (
        <>
          <BooksGrid>
            {books.map((book) => (
              <BookCard key={book.key} data-aos="fade-up">
                <BookCover>
                  {book.cover ? (
                    <img src={book.cover} alt={book.title} />
                  ) : (
                    <div className="no-cover">📚</div>
                  )}
                </BookCover>
                <BookInfo>
                  <h3>{book.title}</h3>
                  <div className="author">by {book.author}</div>
                  {book.first_publish_year && (
                    <div className="year">Published: {book.first_publish_year}</div>
                  )}
                  {book.subjects.length > 0 && (
                    <div className="subjects">
                      {book.subjects.slice(0, 2).map((subject, index) => (
                        <span key={index} className="subject">{subject}</span>
                      ))}
                    </div>
                  )}
                  <Button variant="outline" size="small" style={{ width: '100%' }}>
                    View Details
                  </Button>
                </BookInfo>
              </BookCard>
            ))}
          </BooksGrid>

          {totalPages > 1 && (
            <PaginationSection>
              <Button
                variant="outline"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <div className="page-info">
                Page {currentPage} of {totalPages} ({totalBooks.toLocaleString()} total books)
              </div>
              <Button
                variant="outline"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </PaginationSection>
          )}
        </>
      )}

      <PopularBooksSection>
        <PopularBooksTitle data-aos="fade-up">Popular Books</PopularBooksTitle>
        {popularLoading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>Loading popular books...</div>
        ) : (
          <PopularBooksGrid>
            {popularBooks.slice(0, 8).map((book) => (
              <PopularBookCard key={book.key} data-aos="fade-up">
                <div className="cover">
                  {book.cover ? (
                    <img src={book.cover} alt={book.title} />
                  ) : (
                    <div className="no-cover">📖</div>
                  )}
                </div>
                <div className="info">
                  <h4>{book.title}</h4>
                  <div className="author">by {book.author}</div>
                </div>
              </PopularBookCard>
            ))}
          </PopularBooksGrid>
        )}
      </PopularBooksSection>
    </BooksContainer>
  );
}

export default Books;
