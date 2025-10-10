import { CITY_LIST, mockOffers } from "../../mocks/offers";
import OffersFavoritesCard from "../OffersFavoritesCard";

const OffersFavoritesList = () => {



  return (
    <ul className='favorites__list'>
      {
        CITY_LIST.map((cityName, index) => (
          <OffersFavoritesCard
            key={index}
            cityName={cityName}
            sortOffersByCityName = {
              mockOffers.filter((offers) => offers.city.name === cityName)
            }
          />
        ))
      }
    </ul>
  );
}

export default OffersFavoritesList;