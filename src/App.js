import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Modal from './components/Modal';
import Loader from './components/Loader'
import ImagesApi from './components/ApiService';


const App = () => {
  const [images, setImages] = useState('');
  const [currentPage, setCurrentPage] = useState('');
  const [currentPageImages, setCurrentPageImages] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  useEffect(() => {
    if (searchQuery) {
      fetchImages();
    }
  }, [searchQuery]);

  const fetchImages = () => {
    setIsLoading(true);
    ImagesApi
      .fetchImage(searchQuery, currentPage)
      .then((images) => {
        if (currentPage === 1) {
          setImages(images.hits)
        } else {
          setImages((prevState) => [...prevState, ...images.hits]);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch((error) => setError(error))
      .finally(() =>{
        setIsLoading(false);
        setCurrentPage((prevPage) => prevPage + 1);
        setCurrentPageImages((prevState) => prevState + 12);
      });
  };  

  const toggleModal = () => {
    setShowModal(!showModal)
  };

  const handleFormSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    setCurrentPage(1);
    setImages([]);
    setError(null);
  };

  const onClickImageGalleryItem = (e) => {
    setModalUrl(e.currentTarget.getAttribute('url'));
    setModalAlt(e.currentTarget.getAttribute('alt'));
    toggleModal();
  };
    
    // const  = !(currentPageImages.length < 12) && !isLoading;
    const renderLoadMoreButton = !(currentPageImages < 12) && !isLoading;

    return (
      <>
        <Searchbar onSubmit={handleFormSubmit} />
        {error && (
          <p> something went wrong ... {error} </p>
        )}
        <ImageGallery>
          { images && images.map(({ id, tags, webformatURL, largeImageURL }) => (
            <ImageGalleryItem key={id} alt={tags} src={webformatURL} url={largeImageURL} onClick={onClickImageGalleryItem} />
          ))}
        </ImageGallery>
        {isLoading && <Loader name={searchQuery}/>}
        
         { renderLoadMoreButton && 
          <Button onClick={fetchImages} />}
        
        {showModal &&
          (<Modal onClose={toggleModal}
            src={modalUrl} alt={modalAlt}>
          <button type="button" onClick={toggleModal}>
            Close
          </button>
        </Modal>)}
        </>
  )
          }

export default App;