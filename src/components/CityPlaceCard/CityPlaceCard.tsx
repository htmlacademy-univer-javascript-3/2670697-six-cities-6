// import { type FC } from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IBaseOffer } from '../../mocks/offers';

interface CityPlaceCardProps {
  offer: IBaseOffer;
  pageName: string;
}

const CityPlaceCard = ({ offer, pageName }: CityPlaceCardProps) => {

  // const [isHover, setHover] = useState<boolean>(false);

  // const handleMouseEnter = () => {
  // console.log(`Навел на ${offer.id}`);
  // setHover(true);
  // };

  // const handleMouseLeave = () => {
  // console.log(`Покинул ${offer.id}`);
  // setHover(false);
  // };

  const styleForMainPage = (pageName === 'MainPage') ? 'cities' : '';
  const styleForFavoritesPage = (pageName === 'FavoritesPage') ? 'favorites' : '';

  const widthForImg = (pageName === 'MainPage') ? '260' : '150';
  const heightForImg = (pageName === 'MainPage') ? '200' : '110';

  const chooseStyleName = styleForMainPage || styleForFavoritesPage;

  return (
    <Link to={`/offer/${offer.id}`}>
      <article
        className={`${chooseStyleName}__card place-card`}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      >
        {
          offer.isPremium && (
            <div className='place-card__mark'>
              <span>Premium</span>
            </div>
          )
        }

        <div className={`${chooseStyleName}__image-wrapper place-card__image-wrapper`}>
          <a href='#'>
            <img
              className='place-card__image'
              src={offer.previewImage}
              width={widthForImg}
              height={heightForImg}
              alt='Place image'
            />
          </a>
        </div>
        <div className={`${(styleForFavoritesPage) ? 'favorites__card-info' : ''} place-card__info`}>
          <div className='place-card__price-wrapper'>
            <div className='place-card__price'>
              <b className='place-card__price-value'>&euro;{offer.price}</b>
              <span className='place-card__price-text'>&#47;&nbsp;night</span>
            </div>
            <button
              className={`
              place-card__bookmark-button 
              ${(offer.isFavorite) ? 'place-card__bookmark-button--active' : ''}
              button`}
              type='button'
            >
              <svg className='place-card__bookmark-icon' width='18' height='19'>
                <use href='#icon-bookmark'></use>
              </svg>
              <span className='visually-hidden'>To bookmarks</span>
            </button>
          </div>
          <div className='place-card__rating rating'>
            <div className='place-card__stars rating__stars'>
              <span style={{ width: `${offer.rating * 100 / 5}%` }}></span>
              <span className='visually-hidden'>{offer.rating}</span>
            </div>
          </div>
          <h2 className='place-card__name'>
            <a href='#'>{offer.title}</a>
          </h2>
          <p className='place-card__type'>{offer.type}</p>
        </div>
      </article>
    </Link>
  );
};

export default CityPlaceCard;
