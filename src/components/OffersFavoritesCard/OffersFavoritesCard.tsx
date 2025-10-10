import { IBaseOffer } from "../../mocks/offers";
import CityPlaceCard from "../CityPlaceCard";

interface OffersFavoritesCardProps {
  cityName: string;
  sortOffersByCityName: IBaseOffer[]; 
}

const OffersFavoritesCard = ({ 
  cityName, sortOffersByCityName }: OffersFavoritesCardProps
) => {

  const sortOffersByIsFavorite: IBaseOffer[] = sortOffersByCityName.filter((offers) => offers.isFavorite === true);


  if(sortOffersByIsFavorite.length === 0) {
    return (
      <></>
    );
  }

  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#'>
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className='favorites__places'>
        {
          sortOffersByIsFavorite.map((offer) => (
            <CityPlaceCard
              key={offer.id}
              offer={offer}
              pageName={'FavoritesPage'}
            />
          ))
        }
      </div>
    </li>
  );
}

export default OffersFavoritesCard;
