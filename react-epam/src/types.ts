export type DataCardsType = {
  [key: string]: string,
  price: string,
  title: string,
  imageUrl: string,
  gender: string,
}
export type ErrorCardsType = {
  [key: string]: string | boolean,
  price: string | boolean,
  title: string | boolean,
  imageUrl: string | boolean,
  gender: string | boolean,
}

export type RefsType = {
  [key: string]: HTMLInputElement | null,
  titleRef: HTMLInputElement | null,
  priceRef: HTMLInputElement | null,
  imageUrlRef: HTMLInputElement | null,
  genderRef: HTMLInputElement | null,
}
