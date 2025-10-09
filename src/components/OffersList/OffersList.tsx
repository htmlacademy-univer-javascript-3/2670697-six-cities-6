import { IBaseOffer, mockOffers } from "../../mocks/offers";
import CityPlaceCard from "../CityPlaceCard";

interface OffersListProps {
  city: string;
}

const OffersList = ({ city }: OffersListProps) => {

  const OFFERS_LIST: IBaseOffer[] = mockOffers.filter((offers) => offers.city.name === city);

  return (
    <>
    {
      OFFERS_LIST.map((offer) => (
        <CityPlaceCard
          key={offer.id}
          offer={offer}
        />
      ))
    }
    </>
  );
}

export default OffersList;
