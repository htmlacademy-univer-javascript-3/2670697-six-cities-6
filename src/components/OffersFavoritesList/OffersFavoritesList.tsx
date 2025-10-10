import { CITY_LIST, mockOffers } from '../../mocks/offers';
import OffersFavoritesCard from '../OffersFavoritesCard';

const OffersFavoritesList = () => (
  <ul className='favorites__list'>
    {
      CITY_LIST.map((cityName) => (
        <OffersFavoritesCard
          key={cityName}
          cityName={cityName}
          sortOffersByCityName={
            mockOffers.filter((offers) => offers.city.name === cityName)
          }
        />
      ))
    }
  </ul>
);

export default OffersFavoritesList;
