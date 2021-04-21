export const getPhoneMask = (phone: string): string => {
  const x = phone
    .replace(/\D/g, '')
    .slice(-9)
    .match(/(\d{2})(\d{3})(\d{2})(\d{2})/);
  return `8-0${x![1]}-${x![2]}-${x![3]}-${x![4]}`;
}
