export interface IOffers {
  'id': string;
  'title': string;
  'type': string;
  'price': number;
  'previewImage': string;
  'city': {
    'name': string;
    'location': {
      'latitude': number;
      'longitude': number;
      'zoom': number;
    };
  };
  'location': {
    'latitude': number;
    'longitude': number;
    'zoom': number;
  };
  'isFavorite': boolean;
  'isPremium': boolean;
  'rating': number;
}

export const allOffers: IOffers[] = [
  {
    'id': '29940fa3-97a6-4bd6-ba65-2e2859f93568',
    'title': 'Wood and stone place',
    'type': 'house',
    'price': 399,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.3
  },
  {
    'id': '2f8c2241-a128-4b25-9999-972c9b1a2153',
    'title': 'Perfectly located Castro',
    'type': 'house',
    'price': 606,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2
  },
  {
    'id': '82527cdc-8bf6-4ac0-babd-30e5435848e6',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 279,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5
  },
  {
    'id': '8750799e-459c-43d8-bd41-d54877e8e7b9',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 155,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1
  },
  {
    'id': 'c494ff72-e7eb-42fb-b1ad-e75a4a3f0fc2',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 138,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8
  },
  {
    'id': '12cd3f5f-bb01-4ba7-8a55-cdfe5317311e',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 216,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.8
  },
  {
    'id': 'a3baec0d-424e-4971-b42f-32bb1fe634db',
    'title': 'Perfectly located Castro',
    'type': 'house',
    'price': 550,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2
  },
  {
    'id': '46c8d3e2-9914-4f27-bd36-d03f04bb305a',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 123,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2
  },
  {
    'id': '9540dd60-99a2-4712-b4bb-dd38a3e538f7',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 288,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84761,
      'longitude': 2.356499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': '8788546c-e6e8-4306-98b4-a58b105062cb',
    'title': 'Tile House',
    'type': 'house',
    'price': 957,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.862610000000004,
      'longitude': 2.369499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.8
  },
  {
    'id': '3d12be26-823b-424a-a671-86421f3ecfcb',
    'title': 'Perfectly located Castro',
    'type': 'apartment',
    'price': 174,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83861,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': '25d2da9d-0905-4c34-8775-5b201a729188',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 146,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.861610000000006,
      'longitude': 2.340499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  },
  {
    'id': '148be577-398c-4e79-b3de-353d33b5499e',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 345,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87861,
      'longitude': 2.357499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': '6d666300-1ed1-407c-8b74-7c2c11d86d5f',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 479,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.877610000000004,
      'longitude': 2.333499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.4
  },
  {
    'id': '1959c9d7-2af6-427e-a113-52aeb9701cb0',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 456,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83961,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': 'debe677f-c10b-48ac-83fd-a2b1a12ac236',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 248,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.865610000000004,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2
  },
  {
    'id': '79bae056-e788-4b89-a11f-dba8784d9758',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 407,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.846610000000005,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '10c43776-9ba5-414c-af7a-26617e4a1e4e',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 343,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.6
  },
  {
    'id': 'f89eebac-69fc-4280-8441-08eb8739c89a',
    'title': 'House in countryside',
    'type': 'apartment',
    'price': 387,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.843610000000005,
      'longitude': 2.338499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8
  },
  {
    'id': '2d81234f-fd63-4f6f-abb3-9e08d4ace14f',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 124,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84461,
      'longitude': 2.374499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': '59172588-45fa-4275-ada3-fe77c2308f53',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 200,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.6
  },
  {
    'id': '4d6ea069-f4b8-4765-9af7-715d3f3417d0',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 991,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': 'd78ed0fa-6e73-49d5-b8df-cdfce4a8adc2',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 126,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.934361,
      'longitude': 6.943974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8
  },
  {
    'id': 'b9f16ccd-b0f2-410f-8e65-5388135043d2',
    'title': 'House in countryside',
    'type': 'room',
    'price': 155,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.947361,
      'longitude': 6.9799739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5
  },
  {
    'id': '8ebbe6b7-ba60-46a6-a576-a83738e02de3',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 143,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.967974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5
  },
  {
    'id': 'c14dcfea-4f5e-4ea0-9b61-aa8e14de82f0',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 452,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.941361,
      'longitude': 6.956974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.3
  },
  {
    'id': '755b1f83-ad4c-4b8e-ad76-cd6673faa238',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 231,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.916361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  },
  {
    'id': 'a384ea6e-dc95-4bce-bbdf-d9656025d2b8',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 488,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.949361,
      'longitude': 6.976974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '8e776d52-5966-4993-b94a-0e2c34865e3c',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 359,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.913361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': '6869d079-71fc-4c03-b9f2-96478e879d1c',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 465,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.930361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1
  },
  {
    'id': 'ade7ade7-fba5-48fb-930c-30789d7ededd',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 936,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.5
  },
  {
    'id': '97bd4e3c-7974-4e0a-9fb6-dd2fc63993fe',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 233,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.918461,
      'longitude': 6.969974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '34aba0ec-1f77-430f-8074-54caeac31777',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 136,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.957361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '346ee75c-f2b8-4a5e-b619-35da824bbb3e',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 401,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.951361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': '7096fecf-49a5-4261-8116-55ee105a7492',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 406,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.959361,
      'longitude': 6.978974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8
  },
  {
    'id': 'c1d4208a-a03a-45c0-b279-d2cbbdeb8d4e',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 336,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.960974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.4
  },
  {
    'id': '90012d6f-ced8-46d6-9245-209cbe2606b2',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 270,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.954361,
      'longitude': 6.982974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.3
  },
  {
    'id': '1ee2b0a8-d310-402b-a506-d2997691db1b',
    'title': 'Perfectly located Castro',
    'type': 'house',
    'price': 288,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.962974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.6
  },
  {
    'id': '8e77e1d7-c595-4bb9-a147-2fc144cca90c',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'hotel',
    'price': 182,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.917361,
      'longitude': 6.977974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.8
  },
  {
    'id': 'dd3939fb-0670-4d8e-9938-4230ccad5b04',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 760,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.945361,
      'longitude': 6.935974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': '1831d2ef-e7fe-4cb2-afb4-cdf320cd7b04',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 350,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.854557,
      'longitude': 4.364697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.6
  },
  {
    'id': 'b2588414-94d5-4643-bf57-4c9713dca44f',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 457,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.8
  },
  {
    'id': '0003edce-62b0-4ad5-ac9e-abdbe5b8c84d',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 209,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.827557,
      'longitude': 4.336697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': '4d721aa7-d685-4498-9a65-c3738c03508a',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 371,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.833557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': 'a6ea64fa-5811-4704-9846-6dc75cc28803',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'house',
    'price': 352,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.837557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': '8b8b1cb8-64f2-4226-9039-1cfacf2a12f7',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 464,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.849557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': '3b1934f4-5e91-4bd1-8562-c2bd15917e42',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 234,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.852557,
      'longitude': 4.3376969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.3
  },
  {
    'id': 'baab0565-ad6b-47fa-9da0-e64e295a30db',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 920,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.828556999999996,
      'longitude': 4.362697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': '3e2e90b5-0950-4c70-bd12-76c12db7fe9f',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 212,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.835556999999994,
      'longitude': 4.354697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': '49a68c32-f2f5-4212-93ab-fde1a24bc636',
    'title': 'House in countryside',
    'type': 'room',
    'price': 171,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.8
  },
  {
    'id': '5f7b7d5f-0825-402c-b204-7ef814a5170b',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 168,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.839557,
      'longitude': 4.346697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': '6b784dc5-fba4-42b6-b54c-972f952d02c1',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 122,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.844556999999995,
      'longitude': 4.346697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.5
  },
  {
    'id': 'ab79fc4a-bbc6-4852-94e4-fe2ff17e08a0',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 460,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.865556999999995,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': '4a321918-eb19-455a-b05b-130b9a7b4e1b',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 251,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.869557,
      'longitude': 4.332697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.7
  },
  {
    'id': 'bb9640a2-0133-412d-becc-f3a504ef664d',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 202,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.860557,
      'longitude': 4.376697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6
  },
  {
    'id': 'd0a80090-3d20-4309-8a41-3f12c913e4a4',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 174,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.862556999999995,
      'longitude': 4.375697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.1
  },
  {
    'id': 'bdcd1f8e-90e9-42f4-a20f-779d7c754be8',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 273,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.3536969999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1
  },
  {
    'id': '5eb82d26-000a-4913-9eb8-2e54113a7598',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 193,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.822556999999996,
      'longitude': 4.347697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.6
  },
  {
    'id': '314bbf87-1cc7-48df-9161-bd1625458d62',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 166,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.357697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': 'ac570e75-6aba-42ac-ae84-2db22524e70e',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 334,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.363696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': 'f64a6ae4-6617-41de-9e71-5ce578e12cb9',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 156,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36554,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.7
  },
  {
    'id': 'd61e14a9-50cf-44a1-b4e3-ef7f5398afe5',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 116,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.902976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.4
  },
  {
    'id': 'e235e3d7-88b0-419f-adf9-57b8a303dfa4',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'room',
    'price': 227,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.397540000000006,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1
  },
  {
    'id': '5142502c-a038-4c58-9f54-0bd0f80188d6',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 323,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37454,
      'longitude': 4.881976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': '52d681a0-110a-44b7-8759-e44667ba34f8',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 369,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.367540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.6
  },
  {
    'id': '86123c29-3b87-4908-a9ca-1523306cd546',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 411,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.361540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '1dfd3908-5423-4ef3-8417-7846dc9f46d8',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 221,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35754,
      'longitude': 4.9179759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9
  },
  {
    'id': '63cc3a10-ffec-41bd-9974-9dc3d5218f96',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 718,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37854,
      'longitude': 4.894976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9
  },
  {
    'id': '6a33f80b-8765-43ca-bc18-51d83906fb52',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'hotel',
    'price': 455,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36854,
      'longitude': 4.887976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.2
  },
  {
    'id': '8e3c158a-15c6-47e3-967e-4f222a799da7',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 491,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.370540000000005,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.8
  },
  {
    'id': '3dc54739-1755-40d9-9db3-dadc3018c023',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 289,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.389540000000004,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5
  },
  {
    'id': '55dc6418-5be6-4dd1-b72a-2ccaf72abdd2',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 338,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35054,
      'longitude': 4.908976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.6
  },
  {
    'id': '11105088-00bf-4155-8715-61ba7975d049',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 357,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37154,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.1
  },
  {
    'id': '2b5029e8-4c0a-4705-8e38-72dff36aeadf',
    'title': 'The house among olive ',
    'type': 'room',
    'price': 233,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.364540000000005,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3
  },
  {
    'id': '202adc2d-6707-41fa-9f54-566a26b038f8',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 304,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.911976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.2
  },
  {
    'id': '2f7d6726-941b-43bb-87ba-c1373ac78dad',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 446,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36354,
      'longitude': 4.889976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3
  },
  {
    'id': '70377f5c-d69c-4a3f-a504-f32b0d633190',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'house',
    'price': 158,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.388540000000006,
      'longitude': 4.899976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3
  },
  {
    'id': 'ca18a572-1004-401d-b819-64a2fe417ff3',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 445,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.36954,
      'longitude': 4.914976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.4
  },
  {
    'id': 'e7152f0c-1086-40d5-bf4c-800fbeba5115',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 150,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37554,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2
  },
  {
    'id': '639fc3e2-bf94-4504-b222-387b084cc409',
    'title': 'Perfectly located Castro',
    'type': 'house',
    'price': 746,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.886976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9
  },
  {
    'id': 'efbd7809-8467-4499-a7f4-9ec260d05e67',
    'title': 'Perfectly located Castro',
    'type': 'house',
    'price': 419,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 10.018654000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.2
  },
  {
    'id': 'd3166b3c-de79-48d7-a5dc-5ee3bb59d127',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 270,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.538341,
      'longitude': 9.976654000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': '271ad601-a00e-4e98-bc38-7b28b9f8d500',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 722,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.563341,
      'longitude': 10.019654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3
  },
  {
    'id': '00aeaa6b-79f8-4dce-8b79-bbb5d4d615b5',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 338,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.529341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': 'edacb551-4ec6-4a71-97fb-72d0bf065e8e',
    'title': 'The Joshua Tree House',
    'type': 'room',
    'price': 169,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.565341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': 'e3eb3e86-b159-4955-a668-c23b8b55ed60',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 284,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.546341000000005,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3
  },
  {
    'id': '010d8f96-34a6-456d-8441-e579385e3bed',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 396,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.565341000000004,
      'longitude': 9.978654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8
  },
  {
    'id': '78596cce-e19b-4232-9ea1-9d45eb786758',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 225,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.570341000000006,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6
  },
  {
    'id': '3480ef7b-a999-4e67-83c3-808ec1f6a0b5',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 233,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 10.001654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.3
  },
  {
    'id': '5a9758ef-850c-40d4-a241-092b9436a0f9',
    'title': 'House in countryside',
    'type': 'apartment',
    'price': 392,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 10.009654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.6
  },
  {
    'id': '6f9a2232-1347-4cf3-b5c2-f485aaa3e8f2',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 178,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 9.994654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': '71880ffd-14aa-4da1-8a70-88cbed0bae4f',
    'title': 'Waterfront with extraordinary view',
    'type': 'house',
    'price': 531,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 9.982654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.5
  },
  {
    'id': 'f99dc96c-2943-41ce-84d8-3a2c94c3fc50',
    'title': 'Perfectly located Castro',
    'type': 'apartment',
    'price': 456,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.540341000000005,
      'longitude': 10.025654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': '6f385f13-262a-460b-86e8-38e24d28bede',
    'title': 'House in countryside',
    'type': 'room',
    'price': 243,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.555341000000006,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.3
  },
  {
    'id': '5a37dde6-721d-433a-b11f-0d80c75eadb7',
    'title': 'The house among olive ',
    'type': 'hotel',
    'price': 239,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.534341000000005,
      'longitude': 9.998654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.2
  },
  {
    'id': 'f7918526-256a-4ff7-9b82-30f5b32afba3',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 230,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.563341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': '3df3c0d6-3f31-45c3-9990-9c083ab6840c',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 181,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.574341000000004,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': 'f1c4feb0-8399-40fc-8f3a-8a52da5e8941',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 276,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 10.025654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': '5182e8eb-0bdc-4567-acaf-d3857c33be74',
    'title': 'Tile House',
    'type': 'house',
    'price': 103,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.550341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3
  },
  {
    'id': '54999a92-bb3a-4478-9675-1d047159f75b',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 324,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 9.999654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': 'ca61fa37-776f-445a-bb9d-07852cd8b915',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 593,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.236402000000005,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.5
  },
  {
    'id': '1abb95c6-be66-4474-833e-e5a775520c7c',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 272,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.210402,
      'longitude': 6.798314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5
  },
  {
    'id': 'ca1018e3-5ccd-48bd-bcb9-c15bce1405b7',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 430,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.211402,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.7
  },
  {
    'id': 'c1f1261c-1c97-4a0a-90b4-ca44b617b3cd',
    'title': 'House in countryside',
    'type': 'house',
    'price': 788,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.228402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.9
  },
  {
    'id': 'd97345c0-7fdc-4501-908b-32aea7d18b60',
    'title': 'House in countryside',
    'type': 'house',
    'price': 458,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.204402,
      'longitude': 6.7773140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.9
  },
  {
    'id': 'bcd66295-b71d-4cba-aa03-6619948c0d8a',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 443,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.217402,
      'longitude': 6.7693140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.4
  },
  {
    'id': 'e05d5062-b5ad-4f4b-afda-417db0c6486d',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 339,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.241402,
      'longitude': 6.782314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1
  },
  {
    'id': 'cd6e4d08-c63e-4856-a469-13c30ef61e12',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 105,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.235402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4
  },
  {
    'id': '44527728-5b9f-4774-a922-6fba1768fc93',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 424,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.237402,
      'longitude': 6.779314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2
  },
  {
    'id': 'd8f38c5d-fb0f-42d0-96f1-98e36b1718a5',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 117,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.237402,
      'longitude': 6.797314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '2df346d5-ee6f-467d-bc29-1d7ffbf0ef14',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'house',
    'price': 291,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.222402,
      'longitude': 6.786314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.2
  },
  {
    'id': '0673e569-4284-451a-96d5-68656b697fe0',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 187,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.232402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4
  },
  {
    'id': 'a7a8338a-7bc6-4e56-a564-193929384732',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'room',
    'price': 232,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.216402,
      'longitude': 6.758314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3
  },
  {
    'id': '0e24b714-9846-4975-bec7-06cc942d0494',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 446,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.205402,
      'longitude': 6.7613140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.3
  },
  {
    'id': 'e212e6ca-f393-4462-a0c1-12c561bbed31',
    'title': 'The house among olive ',
    'type': 'house',
    'price': 801,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.248402000000006,
      'longitude': 6.763314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '6ec53c63-416a-47e3-8845-e4717185fa84',
    'title': 'Waterfront with extraordinary view',
    'type': 'hotel',
    'price': 490,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.250402,
      'longitude': 6.7853140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.4
  },
  {
    'id': '143fa171-28fb-4548-a827-8c4dda675c59',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 220,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.239402000000005,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.4
  },
  {
    'id': '2dd400a0-7b36-406e-bccf-96ad1b7976c3',
    'title': 'House in countryside',
    'type': 'house',
    'price': 906,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.243402,
      'longitude': 6.791314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.2
  },
  {
    'id': '64065ede-3efb-4d84-bce4-9afc5725de31',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 138,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.214402,
      'longitude': 6.764314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1
  },
  {
    'id': 'af1fd4c0-9810-42c7-a90e-c78413e58dbe',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 360,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.225402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  }
];

export const AMSTERDAM_OFFERS: IOffers[] = allOffers.filter((offers) => offers.city.name === 'Amsterdam');
