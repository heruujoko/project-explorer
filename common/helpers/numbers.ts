export const priceFormat = (num: number): string => {
  try {
    const formatted = new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(
      num,
    );

    return `Rp. ${formatted}`;
  } catch (err) {
    return `-`;
  }
}
