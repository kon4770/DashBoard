import { loremIpsum, username, name, surname } from "react-lorem-ipsum";

export const userDataList = [
  {
    id: "156",
    data: {
      salesWeek: [
        { week: "W1", profit: 50, unit: 123 },
        { week: "W2", profit: 300, unit: 523 },
        { week: "W3", profit: 45, unit: 344 },
        { week: "W4", profit: 437, unit: 435 },
        { week: "W5", profit: 123, unit: 463 },
        { week: "W6", profit: 87, unit: 135 },
        { week: "W7", profit: 123, unit: 124 },
        { week: "W8", profit: 110, unit: 331 },
        { week: "W9", profit: 574, unit: 753 },
        { week: "W10", profit: 675, unit: 131 },
        { week: "W11", profit: 553, unit: 344 },
        { week: "W12", profit: 456, unit: 133 }
      ],
      salesMonth: [
        { month: "Jan", profit: 123, unit: 123 },
        { month: "Feb", profit: 150, unit: 742 },
        { month: "Mar", profit: 10, unit: 123 },
        { month: "Apr", profit: 22, unit: 453 },
        { month: "May", profit: 84, unit: 123 },
        { month: "Jun", profit: 120, unit: 457 },
        { month: "Jul", profit: 110, unit: 123 },
        { month: "Aug", profit: 254, unit: 873 },
        { month: "Sep", profit: 29, unit: 123 },
        { month: "Oct", profit: 118, unit: 354 },
        { month: "Nov", profit: 312, unit: 238 },
        { month: "Dec", profit: 12, unit: 123 }
      ],
      salesDay: [
        { day: "Monday", profit: 12, unit: 123 },
        { day: "Tuesday", profit: 200, unit: 456 },
        { day: "Wednesday", profit: 312, unit: 678 },
        { day: "Thursday", profit: 127, unit: 312 },
        { day: "Friday", profit: 345, unit: 644 },
        { day: "Saturday", profit: 180, unit: 123 },
        { day: "Sunday", profit: 123, unit: 675 }
      ],
      OrdersDB: {
        Nieopłacone: 85,
        Niewysłane: 34,
        Zwroty: 75,
        Nowe: 8
      },
      FeedbackWszystkieDB: [
        {
          id: "811",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 3 }),
          ocena: 2
        },
        {
          id: "366",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 2 }),
          ocena: 5
        },
        {
          id: "367",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 3 }),
          ocena: 3
        }
      ],
      FeedbackPozytywneDB: [
        {
          id: "473",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 1 }),
          ocena: 4
        },
        {
          id: "378",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 2 }),
          ocena: 5
        }
      ],
      FeedbackNegatywneDB: [
        {
          id: "156",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 3 }),
          ocena: 2
        },
        {
          id: "378",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 4 }),
          ocena: 1
        },
        {
          id: "178",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 3 }),
          ocena: 2
        },
        {
          id: "377",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 4 }),
          ocena: 1
        }
      ],
      SalesQualityFeedbackDB: {
        fieldToImprove: [
          {
            id: "156",
            nazwa: "Szybkość wysyłki",
            ocena: 2
          },
          {
            id: "377",
            nazwa: "Komunikacja z klientem",
            ocena: 1
          }
        ],
        field: [
          {
            id: "156",
            nazwa: "Szybkość wysyłki",
            ocena: 1
          },
          {
            id: "377",
            nazwa: "Komunikacja z klientem",
            ocena: 2
          },
          {
            id: "773",
            nazwa: "Opakowanie",
            ocena: 3
          },
          {
            id: "224",
            nazwa: "Szybkość wysyłki",
            ocena: 1
          },
          {
            id: "788",
            nazwa: "Komunikacja z klientem",
            ocena: 2
          },
          {
            id: "456",
            nazwa: "Opakowanie",
            ocena: 3
          }
        ],
        score: 73,
        rating: {
          value: 4,
          name: "Dobrym"
        }
      },
      NotPaidOrderListDB: [
        {
          id: "1234-4321-1256",
          Name: "HyperX Cloud Alpha HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4567-1256",
          Name: "HyperX Cloud Beta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-4567-1256",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-3744-1256",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4567-1222",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-8888-1256",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4444-1256",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-3333-7722",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-8888-4766",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4448-5454",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-7777-4145",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        }
      ],
      NotSentOrderListDB: [
        {
          id: "1234-4321-1256",
          Name: "HyperX Cloud Alpha HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4567-1256",
          Name: "HyperX Cloud Beta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-4567-1256",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-3744-1256",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4567-1222",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-8888-1256",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4444-1256",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-3333-7722",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-8888-4766",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4448-5454",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-7777-4145",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        }
      ],
      ReturnsOrderListDB: [
        {
          id: "1234-4321-1256",
          Name: "HyperX Cloud Alpha HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4567-1256",
          Name: "HyperX Cloud Beta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-4567-1256",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-3744-1256",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4567-1222",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-8888-1256",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4444-1256",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-3333-7722",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-8888-4766",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4448-5454",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-7777-4145",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        }
      ]
    }
  },
  {
    id: "133",
    data: {
      salesWeek: [
        { week: "W1", profit: 50, unit: 150 },
        { week: "W2", profit: 100, unit: 120 },
        { week: "W3", profit: 30, unit: 123 },
        { week: "W4", profit: 107, unit: 45 },
        { week: "W5", profit: 95, unit: 357 },
        { week: "W6", profit: 150, unit: 126 },
        { week: "W7", profit: 120, unit: 145 },
        { week: "W8", profit: 110, unit: 544 },
        { week: "W9", profit: 54, unit: 652 },
        { week: "W10", profit: 129, unit: 157 },
        { week: "W11", profit: 48, unit: 89 },
        { week: "W12", profit: 43, unit: 78 }
      ],
      salesMonth: [
        { month: "Jan", profit: 170, unit: 780 },
        { month: "Feb", profit: 150, unit: 742 },
        { month: "Mar", profit: 10, unit: 652 },
        { month: "Apr", profit: 33, unit: 453 },
        { month: "May", profit: 84, unit: 786 },
        { month: "Jun", profit: 120, unit: 457 },
        { month: "Jul", profit: 110, unit: 586 },
        { month: "Aug", profit: 90, unit: 873 },
        { month: "Sep", profit: 29, unit: 123 },
        { month: "Oct", profit: 118, unit: 786 },
        { month: "Nov", profit: 48, unit: 238 },
        { month: "Dec", profit: 12, unit: 377 }
      ],
      salesDay: [
        { day: "Monday", profit: 100, unit: 782 },
        { day: "Tuesday", profit: 200, unit: 456 },
        { day: "Wednesday", profit: 50, unit: 678 },
        { day: "Thursday", profit: 127, unit: 312 },
        { day: "Friday", profit: 105, unit: 644 },
        { day: "Saturday", profit: 180, unit: 129 },
        { day: "Sunday", profit: 150, unit: 675 }
      ],
      OrdersDB: {
        Nieopłacone: 46,
        Niewysłane: 21,
        Zwroty: 12,
        Nowe: 3
      },
      FeedbackWszystkieDB: [
        {
          id: "811",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 3 }),
          ocena: 4
        },
        {
          id: "366",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 2 }),
          ocena: 3
        },
        {
          id: "367",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 3 }),
          ocena: 1
        }
      ],
      FeedbackPozytywneDB: [
        {
          id: "473",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 1 }),
          ocena: 5
        },
        {
          id: "378",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 2 }),
          ocena: 4
        }
      ],
      FeedbackNegatywneDB: [
        {
          id: "156",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 3 }),
          ocena: 1
        },
        {
          id: "378",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 4 }),
          ocena: 2
        },
        {
          id: "178",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 3 }),
          ocena: 1
        },
        {
          id: "377",
          nazwa: username(),
          tekst: loremIpsum({ avgSentencesPerParagraph: 4 }),
          ocena: 2
        }
      ],
      SalesQualityFeedbackDB: {
        fieldToImprove: [
          {
            id: "156",
            nazwa: "Szybkość wysyłki",
            ocena: 1
          },
          {
            id: "377",
            nazwa: "Komunikacja z klientem",
            ocena: 2
          }
        ],
        field: [
          {
            id: "156",
            nazwa: "Szybkość wysyłki",
            ocena: 1
          },
          {
            id: "377",
            nazwa: "Komunikacja z klientem",
            ocena: 2
          },
          {
            id: "773",
            nazwa: "Opakowanie",
            ocena: 3
          },
          {
            id: "224",
            nazwa: "Szybkość wysyłki",
            ocena: 1
          },
          {
            id: "788",
            nazwa: "Komunikacja z klientem",
            ocena: 2
          },
          {
            id: "456",
            nazwa: "Opakowanie",
            ocena: 3
          }
        ],
        score: 89,
        rating: {
          value: 5,
          name: "Boskim"
        }
      },
      NotPaidOrderListDB: [
        {
          id: "1234-4321-1256",
          Name: "HyperX Cloud Alpha HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4567-1256",
          Name: "HyperX Cloud Beta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-4567-1256",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-3744-1256",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4567-1222",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-8888-1256",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4444-1256",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-3333-7722",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-8888-4766",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4448-5454",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-7777-4145",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        }
      ],
      NotSentOrderListDB: [
        {
          id: "1234-4321-1256",
          Name: "HyperX Cloud Alpha HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4567-1256",
          Name: "HyperX Cloud Beta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-4567-1256",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-3744-1256",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4567-1222",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-8888-1256",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4444-1256",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-3333-7722",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-8888-4766",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4448-5454",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-7777-4145",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        }
      ],
      ReturnsOrderListDB: [
        {
          id: "1234-4321-1256",
          Name: "HyperX Cloud Alpha HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4567-1256",
          Name: "HyperX Cloud Beta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-4567-1256",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-3744-1256",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4567-1222",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-8888-1256",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4444-1256",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-3333-7722",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "4477-8888-4766",
          Name: "HyperX Cloud Gamma HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-4448-5454",
          Name: "HyperX Cloud Delta HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        },
        {
          id: "1234-7777-4145",
          Name: "HyperX Cloud Epsilon HX-HSCA-RD/EM",
          Price: `${Math.round(10 + Math.random() * (5000 - 10))}`,
          BuyersName: name(),
          BuyersSurname: surname()
        }
      ]
    }
  },
  {
    id: "123",
    data: {
      salesWeek: [],
      salesMonth: [],
      salesDay: [],
      OrdersDB: {
        Nieopłacone: 0,
        Niewysłane: 0,
        Zwroty: 0,
        Nowe: 0
      },
      FeedbackWszystkieDB: [],
      FeedbackPozytywneDB: [],
      FeedbackNegatywneDB: [],
      SalesQualityFeedbackDB: {
        fieldToImprove: [],
        field: [],
        score: 0,
        rating: {
          value: 1,
          name: "świetnym"
        }
      },
      NotPaidOrderListDB: [],
      NotSentOrderListDB: [],
      ReturnsOrderListDB: []
    }
  }
];
