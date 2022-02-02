export var userData;
export var ordersData = {
  data: [],
  name: "Proszę wybrać typ zamówienia"
};

export function setUserData(newUserData) {
  userData = newUserData;
}

export function setOrdersDataToNotPaid() {
  ordersData.data = userData.NotPaidOrderListDB;
  ordersData.name = "Nieopłacone";
}
export function setOrdersDataToNotSent() {
  ordersData.data = userData.NotSentOrderListDB;
  ordersData.name = "Niewysłane";
}
export function setOrdersDataToReturns() {
  ordersData.data = userData.ReturnsOrderListDB;
  ordersData.name = "Zwroty";
}
