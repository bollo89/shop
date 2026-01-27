function addDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

// NOTE: the code below has been changed from the course code to fix an issue
// with type coercion of strings to numbers.
// Our addDecimals function expects a number and returns a string, so it is not
// correct to call it passing a string as the argument.

export function calcPrices(orderItems) {
  const itemsPrice = orderItems.reduce(
    (acc, item) => acc + (item.price * 100 * item.qty) / 100,
    0
  );

  // dostawa – tu możesz zostawić jak jest albo dostosować do PLN
  const shippingPrice = itemsPrice > 100 ? 0 : 10;

  // VAT w PL (23%)
  const VAT_RATE = 0.23;

  // itemsPrice traktujemy jako BRUTTO, więc VAT wyciągamy "wstecz":
  // VAT = brutto * (vat / (1 + vat))
  const taxPrice = itemsPrice * (VAT_RATE / (1 + VAT_RATE));

  // total brutto = brutto + dostawa (VAT już jest w itemsPrice)
  const totalPrice = itemsPrice + shippingPrice;

  return {
    itemsPrice: addDecimals(itemsPrice),        // BRUTTO
    shippingPrice: addDecimals(shippingPrice),  // BRUTTO
    taxPrice: addDecimals(taxPrice),            // VAT "w środku"
    totalPrice: addDecimals(totalPrice),        // BRUTTO + dostawa
  };
}

