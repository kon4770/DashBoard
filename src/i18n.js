import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Panel sprzedawcy": "Seller dashboard",
      "Ostatni Rok": "Last Year",
      "Ilość nowych zamowień:": "New orders count:",
      Wyloguj: "Sigh out",

      "Wykres sprzedaży": "Sales chart",
      Zamówienia: "Orders",
      "Ranking ofert": "Offer ranking",
      "Najnowsze opinie": "Recent feedback",
      "Jakość sprzedaży": "Sales quality",
      "Twoje pukty:": "Your current score:",
      "Tryb nocny": "Night mode",
      Jesteś: "You are",
      Boskim: "Excellent",
      Dobrym: "Good",
      sprzedawcą: "seller",
      "Nie ma danych": "No data",

      "Rozwijaj się poprzez:": "Improve by working on:",
      "Szybkość wysyłki": "Shipping speed",
      "Komunikacja z klientem": "Communication",

      "Typ danych": "Data type",
      Obrót: "Money circulation",
      "Liczba sprzedanych sztuk": "Sold items",

      "Typ wykresu": "Chart type",
      Słupkowy: "Bar",
      Liniowy: "Line",

      "Zakres czasu": "Time span",
      Dzień: "Day",
      Tydzień: "Week",
      Miesiąc: "Month",

      Zarobek: "Profit",
      Ilość: "Units",

      Wiecej: "More",

      Nieopłacone: "Unpaid",
      Niewysłane: "Unsent",
      Zwroty: "Returns",
      Pozytywne: "Positive",
      Negatywne: "Negative",
      Wszystkie: "All",
      "Nazwa produktu": "Product Name",
      "Zaloguj się do Menadżera Sprzedaży": "Sign in to Sales Manager",
      "Niepoprawna nazwa użytkownika i/lub hasło.":
        "Incorrect username or password.",
      Hasło: "Password",
      "Nazwa użytkownika": "Username",
      "Zaloguj się": "Sign In",
      Śledź: "Track Order",
      "Numer Zamówienia: ": "Order Id: ",
      "Proszę wybrać typ zamówienia": "Please select order type",
      "Brak oceny sprzedaży!": "No sale rating!"
    }
  }
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
export default i18n;
