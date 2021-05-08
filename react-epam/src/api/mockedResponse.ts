export const mockedResponse = [
  {
    id: 1,
    price: '476',
    title: 'AK-74M',
    imageUrl: 'https://ak-api.kalashnikovgroup.ru/upload/iblock/9b0/9b006ee79b5465c9154b857120eab8ac.jpg',
    gender: 'male',
  },
  {
    id: 2,
    price: '356',
    title: 'КС-К',
    imageUrl: 'https://ak-api.kalashnikovgroup.ru/upload/iblock/550/5508cd931098c1e81e0c6b95a1c2e432.jpg',
    gender: 'male',
  },
  {
    id: 3,
    price: '300',
    title: 'AK-12',
    imageUrl: 'https://ak-api.kalashnikovgroup.ru/upload/iblock/790/790d6cbcdc45811756759244d4febcd2.jpg',
    gender: 'male',
  },
  {
    id: 7,
    price: '256',
    title: 'ППК-20',
    imageUrl: 'https://ak-api.kalashnikovgroup.ru/upload/iblock/d38/d38c1bf894771d22164694278fa407d2.jpg',
    gender: 'male',
  },
  {
    id: 4,
    price: '456',
    title: 'СВД',
    imageUrl: 'https://ak-api.kalashnikovgroup.ru/upload/iblock/671/67169b80e99438ba466ea15c3c8532a4.jpg',
    gender: 'female',
  },
  {
    id: 5,
    price: '556',
    title: 'AK-308',
    imageUrl: 'https://ak-api.kalashnikovgroup.ru/upload/iblock/fb1/fb1cff303a97170fcaa3481bdef1f1bf.jpg',
    gender: 'male',
  },
  {
    id: 6,
    price: '245',
    title: 'AK-103',
    imageUrl: 'https://ak-api.kalashnikovgroup.ru/upload/iblock/3a0/3a0f4766786cf3cf381e03fe3b5fbfc8.jpg',
    gender: 'male',
  },
  {
    id: 8,
    price: '756',
    title: 'СВДМ',
    imageUrl: 'https://ak-api.kalashnikovgroup.ru/upload/iblock/45a/45a85996f86c57478f24a617a18b0ca0.jpg',
    gender: 'female',
  },
];

export type MockedResponseType = typeof mockedResponse;
export type MockedResponseItemType = {
  id: number,
  price: string,
  title: string,
  imageUrl: string,
  gender: string,
}
