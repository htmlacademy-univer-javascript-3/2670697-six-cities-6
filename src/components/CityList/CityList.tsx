import { useState } from "react";
import { CityOffer } from "../../mocks/offers";

const CityList = () => {

  // const CITY_LIST: string[] = [
  //   'Paris',
  //   'Cologne',
  //   'Brussels',
  //   'Amsterdam',
  //   'Hamburg',
  //   'Dusseldorf'
  // ] as const;

  const [isChooseCity, setChooseCity] = useState<string>('Amsterdam');

  const handelChooseCity = (city: string) => {
    setChooseCity(city);
  };

  return (
    <>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.PARIS)}>
        {
          (isChooseCity === CityOffer.PARIS)
            ?
            <a className={`locations__item-link tabs__item tabs__item--active`} href='#'>
              <span>{CityOffer.PARIS}</span>
            </a>
            :
            <a className={`locations__item-link tabs__item `} href='#'>
              <span>{CityOffer.PARIS}</span>
            </a>
        }
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.COLOGNE)}>
        {
          (isChooseCity === CityOffer.COLOGNE)
            ?
            <a className={`locations__item-link tabs__item tabs__item--active`} href='#'>
              <span>{CityOffer.COLOGNE}</span>
            </a>
            :
            <a className={`locations__item-link tabs__item `} href='#'>
              <span>{CityOffer.COLOGNE}</span>
            </a>
        }
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.BRUSSELS)}>
        {
          (isChooseCity === CityOffer.BRUSSELS)
            ?
            <a className={`locations__item-link tabs__item tabs__item--active`} href='#'>
              <span>{CityOffer.BRUSSELS}</span>
            </a>
            :
            <a className={`locations__item-link tabs__item `} href='#'>
              <span>{CityOffer.BRUSSELS}</span>
            </a>
        }
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.AMSTERDAM)}>
        {
          (isChooseCity === CityOffer.AMSTERDAM)
            ?
            <a className={`locations__item-link tabs__item tabs__item--active`} href='#'>
              <span>{CityOffer.AMSTERDAM}</span>
            </a>
            :
            <a className={`locations__item-link tabs__item `} href='#'>
              <span>{CityOffer.AMSTERDAM}</span>
            </a>
        }
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.HAMBURG)}>
        {
          (isChooseCity === CityOffer.HAMBURG)
            ?
            <a className={`locations__item-link tabs__item tabs__item--active`} href='#'>
              <span>{CityOffer.HAMBURG}</span>
            </a>
            :
            <a className={`locations__item-link tabs__item `} href='#'>
              <span>{CityOffer.HAMBURG}</span>
            </a>
        }
      </li>
      <li className='locations__item' onClick={() => handelChooseCity(CityOffer.DUSSELDORF)}>
        {
          (isChooseCity === CityOffer.DUSSELDORF)
            ?
            <a className={`locations__item-link tabs__item tabs__item--active`} href='#'>
              <span>{CityOffer.DUSSELDORF}</span>
            </a>
            :
            <a className={`locations__item-link tabs__item `} href='#'>
              <span>{CityOffer.DUSSELDORF}</span>
            </a>
        }
      </li>
    </>
  );
}

export default CityList;
