import { IBaseOffer } from "../../mocks/offers";
import CityPlaceCard from "../CityPlaceCard";

interface OffersListProps {
  offers: IBaseOffer[];
}

const OffersList = ({ offers }: OffersListProps) => {

  return (
    <>
      {
        offers.map((offer) => (
          <CityPlaceCard
            key={offer.id}
            offer={offer}
            pageName={'MainPage'}
          />
        ))
      }
    </>
  );
}

export default OffersList;
