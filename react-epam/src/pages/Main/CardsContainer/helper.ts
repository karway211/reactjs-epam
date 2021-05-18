import {
  ONLY_NUMBER,
  ONLY_URL,
  PRICE_ERROR_MESSAGE,
  URL_ERROR_MESSAGE,
  WARNING_MESSAGE,
  GENDER,
  GENDER_ERROR_MESSAGE,
} from "./Popup/store";

export const getErrorMessage = (elem: string, value: string): string | boolean =>
  ((value && elem === 'price' && !ONLY_NUMBER.test(value) && PRICE_ERROR_MESSAGE)
    || (value && elem === 'imageUrl' && !ONLY_URL.test(value) && URL_ERROR_MESSAGE)
    || (value && elem === 'gender' && !GENDER.test(value.trim()) && GENDER_ERROR_MESSAGE)
    || (!value && WARNING_MESSAGE)) ?? '';
