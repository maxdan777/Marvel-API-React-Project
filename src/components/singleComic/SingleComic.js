import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './singleComic.scss';
import xMen from '../../resources/img/x-men.png';

const SingleComic = () => {
    
    const [comic, setComic] = useState({});

    const {loading, error, getComics, clearError} = useMarvelService();

    useEffect(() => {
        updateComic();
        const timerId = setInterval(updateComic, 60000);

        return () => {
            clearInterval(timerId)
        }
    }, [])
    
    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const updateComic = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getComics(id) //подгружается персонаж по случайному id
            .then(onComicLoaded) //если id существует, персонаж подгружается
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View comic={comic}/> : null

    return (
        <div className="single-comic">
            {errorMessage}
            {spinner}
            {content}
            <a href="#" className="single-comic__back">Back to all</a>
        </div>
    )
}

const View = ({comic}) => {
    const {title, description, thumbnail, pageCount, language, price} = comic;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    return (
    <div className="single-comic__info">
        <img src={thumbnail} alt="Random comic" className="single-comic__img" style={imgStyle}/>
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">`${'Language:'} + {language}`</p>
        <div className="single-comic__price">{price}</div>
    </div>
    )
}

export default SingleComic;