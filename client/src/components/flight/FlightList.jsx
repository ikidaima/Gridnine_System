import React from 'react';
import FlightCard from './FlightCard';

const flights = {
  "result" :
     {
        "flights" :
           [
              {
                 "hasExtendedFare" : false,
                 "flight" :
                    {
                       "carrier" :
                          {
                             "uid" : "AF",
                             "caption" : "Air France",
                             "airlineCode" : "AF"
                          },
                       "price" :
                          {
                             "total" :
                                {
                                   "amount" : "105368",
                                   "currency" : "руб.",
                                   "currencyCode" : "RUB"
                                },
                             "totalFeeAndTaxes" :
                                {
                                   "amount" : "11663.00",
                                   "currency" : "руб.",
                                   "currencyCode" : "RUB"
                                },
                             "rates" :
                                {
                                   "totalUsd" :
                                      {
                                         "amount" : "1308.92",
                                         "currencyCode" : "EUR"
                                      },
                                   "totalEur" :
                                      {
                                         "amount" : "1484.06",
                                         "currencyCode" : "USD"
                                      }
                                },
                             "passengerPrices" :
                                [
                                   {
                                      "total" :
                                         {
                                            "amount" : "105368.00",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         },
                                      "passengerType" :
                                         {
                                            "uid" : "ADULT",
                                            "caption" : "Взрослый"
                                         },
                                      "singlePassengerTotal" :
                                         {
                                            "amount" : "105368.00",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         },
                                      "passengerCount" : 1,
                                      "tariff" :
                                         {
                                            "amount" : "93705.00",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         },
                                      "feeAndTaxes" :
                                         {
                                            "amount" : "11663.00",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         }
                                   }
                                ]
                          },
                       "servicesStatuses" :
                          {
                             "baggage" :
                                {
                                   "uid" : "FREE",
                                   "caption" : "Бесплатно"
                                },
                             "exchange" :
                                {
                                   "uid" : "FREE",
                                   "caption" : "Бесплатно"
                                },
                             "refund" :
                                {
                                   "uid" : "OFF",
                                   "caption" : "Недоступно"
                                }
                          },
                       "legs" :
                          [
                             {
                                "duration" : 735,
                                "segments" :
                                   [
                                      {
                                         "classOfServiceCode" : "I",
                                         "classOfService" :
                                            {
                                               "uid" : "BUSINESS",
                                               "caption" : "Бизнес"
                                            },
                                         "departureAirport" :
                                            {
                                               "uid" : "SVO",
                                               "caption" : "ШЕРЕМЕТЬЕВО"
                                            },
                                         "departureCity" :
                                            {
                                               "uid" : "MOW",
                                               "caption" : "Москва"
                                            },
                                         "aircraft" :
                                            {
                                               "uid" : "321",
                                               "caption" : "АЭРОБУС321"
                                            },
                                         "travelDuration" : 245,
                                         "arrivalCity" :
                                            {
                                               "uid" : "PAR",
                                               "caption" : "ПАРИЖ"
                                            },
                                         "arrivalDate" : "2020-08-18T09:15:00",
                                         "flightNumber" : "1655",
                                         "techStopInfos" :
                                            [
                                            ],
                                         "departureDate" : "2020-08-18T06:10:00",
                                         "stops" : 0,
                                         "servicesDetails" :
                                            {
                                               "freeCabinLuggage" :
                                                  {
                                                  },
                                               "paidCabinLuggage" :
                                                  {
                                                  },
                                               "tariffName" : "BUSINESS FLEX",
                                               "fareBasis" :
                                                  {
                                                     "ADULT" : "IS50AENB"
                                                  },
                                               "freeLuggage" :
                                                  {
                                                     "ADULT" :
                                                        {
                                                           "pieces" : 2,
                                                           "nil" : false,
                                                           "unit" : "шт"
                                                        }
                                                  },
                                               "paidLuggage" :
                                                  {
                                                  }
                                            },
                                         "airline" :
                                            {
                                               "uid" : "AF",
                                               "caption" : "Air France",
                                               "airlineCode" : "AF"
                                            },
                                         "starting" : true,
                                         "arrivalAirport" :
                                            {
                                               "uid" : "CDG",
                                               "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                            }
                                      },
                                      {
                                         "classOfServiceCode" : "I",
                                         "classOfService" :
                                            {
                                               "uid" : "BUSINESS",
                                               "caption" : "Бизнес"
                                            },
                                         "departureAirport" :
                                            {
                                               "uid" : "CDG",
                                               "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                            },
                                         "departureCity" :
                                            {
                                               "uid" : "PAR",
                                               "caption" : "ПАРИЖ"
                                            },
                                         "aircraft" :
                                            {
                                               "uid" : "320",
                                               "caption" : "А320"
                                            },
                                         "travelDuration" : 85,
                                         "arrivalCity" :
                                            {
                                               "uid" : "LON",
                                               "caption" : "ЛОНДОН"
                                            },
                                         "arrivalDate" : "2020-08-18T16:25:00",
                                         "flightNumber" : "1280",
                                         "techStopInfos" :
                                            [
                                            ],
                                         "departureDate" : "2020-08-18T16:00:00",
                                         "stops" : 0,
                                         "servicesDetails" :
                                            {
                                               "freeCabinLuggage" :
                                                  {
                                                  },
                                               "paidCabinLuggage" :
                                                  {
                                                  },
                                               "tariffName" : "BUSINESS FLEX",
                                               "fareBasis" :
                                                  {
                                                     "ADULT" : "IS50AENB"
                                                  },
                                               "freeLuggage" :
                                                  {
                                                     "ADULT" :
                                                        {
                                                           "pieces" : 2,
                                                           "nil" : false,
                                                           "unit" : "шт"
                                                        }
                                                  },
                                               "paidLuggage" :
                                                  {
                                                  }
                                            },
                                         "airline" :
                                            {
                                               "uid" : "AF",
                                               "caption" : "Air France",
                                               "airlineCode" : "AF"
                                            },
                                         "starting" : false,
                                         "arrivalAirport" :
                                            {
                                               "uid" : "LHR",
                                               "caption" : "Лондон, Хитроу"
                                            }
                                      }
                                   ]
                             },
                             {
                                "duration" : 1400,
                                "segments" :
                                   [
                                      {
                                         "classOfServiceCode" : "I",
                                         "classOfService" :
                                            {
                                               "uid" : "BUSINESS",
                                               "caption" : "Бизнес"
                                            },
                                         "departureAirport" :
                                            {
                                               "uid" : "LHR",
                                               "caption" : "Лондон, Хитроу"
                                            },
                                         "departureCity" :
                                            {
                                               "uid" : "LON",
                                               "caption" : "ЛОНДОН"
                                            },
                                         "aircraft" :
                                            {
                                               "uid" : "319",
                                               "caption" : "AirbusA319"
                                            },
                                         "travelDuration" : 80,
                                         "arrivalCity" :
                                            {
                                               "uid" : "PAR",
                                               "caption" : "ПАРИЖ"
                                            },
                                         "arrivalDate" : "2020-08-19T19:55:00",
                                         "flightNumber" : "1281",
                                         "techStopInfos" :
                                            [
                                            ],
                                         "departureDate" : "2020-08-19T17:35:00",
                                         "stops" : 0,
                                         "servicesDetails" :
                                            {
                                               "freeCabinLuggage" :
                                                  {
                                                  },
                                               "paidCabinLuggage" :
                                                  {
                                                  },
                                               "tariffName" : "BUSINESS FLEX",
                                               "fareBasis" :
                                                  {
                                                     "ADULT" : "IS50AENB"
                                                  },
                                               "freeLuggage" :
                                                  {
                                                     "ADULT" :
                                                        {
                                                           "pieces" : 2,
                                                           "nil" : false,
                                                           "unit" : "шт"
                                                        }
                                                  },
                                               "paidLuggage" :
                                                  {
                                                  }
                                            },
                                         "airline" :
                                            {
                                               "uid" : "AF",
                                               "caption" : "Air France",
                                               "airlineCode" : "AF"
                                            },
                                         "starting" : true,
                                         "arrivalAirport" :
                                            {
                                               "uid" : "CDG",
                                               "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                            }
                                      },
                                      {
                                         "classOfServiceCode" : "I",
                                         "classOfService" :
                                            {
                                               "uid" : "BUSINESS",
                                               "caption" : "Бизнес"
                                            },
                                         "departureAirport" :
                                            {
                                               "uid" : "CDG",
                                               "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                            },
                                         "departureCity" :
                                            {
                                               "uid" : "PAR",
                                               "caption" : "ПАРИЖ"
                                            },
                                         "aircraft" :
                                            {
                                               "uid" : "321",
                                               "caption" : "АЭРОБУС321"
                                            },
                                         "travelDuration" : 240,
                                         "arrivalCity" :
                                            {
                                               "uid" : "MOW",
                                               "caption" : "Москва"
                                            },
                                         "arrivalDate" : "2020-08-20T18:55:00",
                                         "flightNumber" : "4898",
                                         "techStopInfos" :
                                            [
                                            ],
                                         "departureDate" : "2020-08-20T13:55:00",
                                         "stops" : 0,
                                         "servicesDetails" :
                                            {
                                               "freeCabinLuggage" :
                                                  {
                                                  },
                                               "paidCabinLuggage" :
                                                  {
                                                  },
                                               "tariffName" : "BUSINESS FLEX",
                                               "fareBasis" :
                                                  {
                                                     "ADULT" : "IS50AENB"
                                                  },
                                               "freeLuggage" :
                                                  {
                                                     "ADULT" :
                                                        {
                                                           "pieces" : 2,
                                                           "nil" : false,
                                                           "unit" : "шт"
                                                        }
                                                  },
                                               "paidLuggage" :
                                                  {
                                                  }
                                            },
                                         "airline" :
                                            {
                                               "uid" : "AF",
                                               "caption" : "Air France",
                                               "airlineCode" : "AF"
                                            },
                                         "starting" : false,
                                         "arrivalAirport" :
                                            {
                                               "uid" : "SVO",
                                               "caption" : "ШЕРЕМЕТЬЕВО"
                                            },
                                         "operatingAirline" :
                                            {
                                               "uid" : "SU1",
                                               "caption" : "Аэрофлот - российские авиалинии",
                                               "airlineCode" : "SU"
                                            }
                                      }
                                   ]
                             }
                          ],
                       "exchange" :
                          {
                             "ADULT" :
                                {
                                   "exchangeableBeforeDeparture" : true,
                                   "exchangeAfterDeparture" :
                                      {
                                         "amount" : "0",
                                         "currency" : "руб.",
                                         "currencyCode" : "RUB"
                                      },
                                   "exchangeBeforeDeparture" :
                                      {
                                         "amount" : "0",
                                         "currency" : "руб.",
                                         "currencyCode" : "RUB"
                                      },
                                   "exchangeableAfterDeparture" : true
                                }
                          },
                       "isTripartiteContractDiscountApplied" : false,
                       "international" : false,
                       "seats" :
                          [
                             {
                                "count" : 1,
                                "type" :
                                   {
                                      "uid" : "ADULT",
                                      "caption" : "Взрослый"
                                   }
                             }
                          ],
                       "refund" :
                          {
                             "ADULT" :
                                {
                                   "refundableBeforeDeparture" : false,
                                   "refundableAfterDeparture" : false
                                }
                          }
                    },
                 "flightToken" : "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\nM7ftO8Pb5bd1HqPpYZhi/Siz3v8DVhk9RxGiAAA="
              },
              {
                 "hasExtendedFare" : false,
                 "flight" :
                    {
                       "carrier" :
                          {
                             "uid" : "KL",
                             "caption" : "KLM",
                             "airlineCode" : "KL"
                          },
                       "price" :
                          {
                             "total" :
                                {
                                   "amount" : "36491",
                                   "currency" : "руб.",
                                   "currencyCode" : "RUB"
                                },
                             "totalFeeAndTaxes" :
                                {
                                   "amount" : "10326.00",
                                   "currency" : "руб.",
                                   "currencyCode" : "RUB"
                                },
                             "rates" :
                                {
                                   "totalUsd" :
                                      {
                                         "amount" : "453.30",
                                         "currencyCode" : "EUR"
                                      },
                                   "totalEur" :
                                      {
                                         "amount" : "513.96",
                                         "currencyCode" : "USD"
                                      }
                                },
                             "passengerPrices" :
                                [
                                   {
                                      "total" :
                                         {
                                            "amount" : "36491.00",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         },
                                      "passengerType" :
                                         {
                                            "uid" : "ADULT",
                                            "caption" : "Взрослый"
                                         },
                                      "singlePassengerTotal" :
                                         {
                                            "amount" : "36491.00",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         },
                                      "passengerCount" : 1,
                                      "tariff" :
                                         {
                                            "amount" : "26165.00",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         },
                                      "feeAndTaxes" :
                                         {
                                            "amount" : "10326.00",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         }
                                   }
                                ]
                          },
                       "servicesStatuses" :
                          {
                             "baggage" :
                                {
                                   "uid" : "OFF",
                                   "caption" : "Недоступно"
                                },
                             "exchange" :
                                {
                                   "uid" : "FREE",
                                   "caption" : "Бесплатно"
                                },
                             "refund" :
                                {
                                   "uid" : "OFF",
                                   "caption" : "Недоступно"
                                }
                          },
                       "legs" :
                          [
                             {
                                "duration" : 355,
                                "segments" :
                                   [
                                      {
                                         "classOfServiceCode" : "T",
                                         "classOfService" :
                                            {
                                               "uid" : "ECONOMY",
                                               "caption" : "Эконом"
                                            },
                                         "departureAirport" :
                                            {
                                               "uid" : "SVO",
                                               "caption" : "ШЕРЕМЕТЬЕВО"
                                            },
                                         "departureCity" :
                                            {
                                               "uid" : "MOW",
                                               "caption" : "Москва"
                                            },
                                         "aircraft" :
                                            {
                                               "uid" : "73В",
                                               "caption" : "Боинг 737-700 (винглетс) Пассажирский/BBJ1"
                                            },
                                         "travelDuration" : 210,
                                         "arrivalCity" :
                                            {
                                               "uid" : "AMS",
                                               "caption" : "АМСТЕРДАМ"
                                            },
                                         "arrivalDate" : "2020-08-18T19:30:00",
                                         "flightNumber" : "904",
                                         "techStopInfos" :
                                            [
                                            ],
                                         "departureDate" : "2020-08-18T17:00:00",
                                         "stops" : 0,
                                         "servicesDetails" :
                                            {
                                               "freeCabinLuggage" :
                                                  {
                                                  },
                                               "paidCabinLuggage" :
                                                  {
                                                  },
                                               "tariffName" : "ECONOMY LIGHT2",
                                               "fareBasis" :
                                                  {
                                                     "ADULT" : "TS55ABLG"
                                                  },
                                               "freeLuggage" :
                                                  {
                                                     "ADULT" :
                                                        {
                                                           "nil" : true
                                                        }
                                                  },
                                               "paidLuggage" :
                                                  {
                                                  }
                                            },
                                         "airline" :
                                            {
                                               "uid" : "KL",
                                               "caption" : "KLM",
                                               "airlineCode" : "KL"
                                            },
                                         "starting" : true,
                                         "arrivalAirport" :
                                            {
                                               "uid" : "AMS",
                                               "caption" : "Схипхол"
                                            }
                                      },
                                      {
                                         "classOfServiceCode" : "T",
                                         "classOfService" :
                                            {
                                               "uid" : "ECONOMY",
                                               "caption" : "Эконом"
                                            },
                                         "departureAirport" :
                                            {
                                               "uid" : "AMS",
                                               "caption" : "Схипхол"
                                            },
                                         "departureCity" :
                                            {
                                               "uid" : "AMS",
                                               "caption" : "АМСТЕРДАМ"
                                            },
                                         "aircraft" :
                                            {
                                               "uid" : "73Х",
                                               "caption" : "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                            },
                                         "travelDuration" : 85,
                                         "arrivalCity" :
                                            {
                                               "uid" : "LON",
                                               "caption" : "ЛОНДОН"
                                            },
                                         "arrivalDate" : "2020-08-18T20:55:00",
                                         "flightNumber" : "1033",
                                         "techStopInfos" :
                                            [
                                            ],
                                         "departureDate" : "2020-08-18T20:30:00",
                                         "stops" : 0,
                                         "servicesDetails" :
                                            {
                                               "freeCabinLuggage" :
                                                  {
                                                  },
                                               "paidCabinLuggage" :
                                                  {
                                                  },
                                               "tariffName" : "ECONOMY LIGHT2",
                                               "fareBasis" :
                                                  {
                                                     "ADULT" : "TS55ABLG"
                                                  },
                                               "freeLuggage" :
                                                  {
                                                     "ADULT" :
                                                        {
                                                           "nil" : true
                                                        }
                                                  },
                                               "paidLuggage" :
                                                  {
                                                  }
                                            },
                                         "airline" :
                                            {
                                               "uid" : "KL",
                                               "caption" : "KLM",
                                               "airlineCode" : "KL"
                                            },
                                         "starting" : false,
                                         "arrivalAirport" :
                                            {
                                               "uid" : "LHR",
                                               "caption" : "Лондон, Хитроу"
                                            }
                                      }
                                   ]
                             },
                             {
                                "duration" : 1195,
                                "segments" :
                                   [
                                      {
                                         "classOfServiceCode" : "L",
                                         "classOfService" :
                                            {
                                               "uid" : "ECONOMY",
                                               "caption" : "Эконом"
                                            },
                                         "departureAirport" :
                                            {
                                               "uid" : "LHR",
                                               "caption" : "Лондон, Хитроу"
                                            },
                                         "departureCity" :
                                            {
                                               "uid" : "LON",
                                               "caption" : "ЛОНДОН"
                                            },
                                         "aircraft" :
                                            {
                                               "uid" : "319",
                                               "caption" : "AirbusA319"
                                            },
                                         "travelDuration" : 75,
                                         "arrivalCity" :
                                            {
                                               "uid" : "PAR",
                                               "caption" : "ПАРИЖ"
                                            },
                                         "arrivalDate" : "2020-08-19T08:35:00",
                                         "flightNumber" : "1081",
                                         "techStopInfos" :
                                            [
                                            ],
                                         "departureDate" : "2020-08-19T06:20:00",
                                         "stops" : 0,
                                         "servicesDetails" :
                                            {
                                               "freeCabinLuggage" :
                                                  {
                                                  },
                                               "paidCabinLuggage" :
                                                  {
                                                  },
                                               "tariffName" : "ECONOMY LIGHT2",
                                               "fareBasis" :
                                                  {
                                                     "ADULT" : "LS50ABLG"
                                                  },
                                               "freeLuggage" :
                                                  {
                                                     "ADULT" :
                                                        {
                                                           "nil" : true
                                                        }
                                                  },
                                               "paidLuggage" :
                                                  {
                                                  }
                                            },
                                         "airline" :
                                            {
                                               "uid" : "AF",
                                               "caption" : "Air France",
                                               "airlineCode" : "AF"
                                            },
                                         "starting" : true,
                                         "arrivalAirport" :
                                            {
                                               "uid" : "CDG",
                                               "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                            }
                                      },
                                      {
                                         "classOfServiceCode" : "L",
                                         "classOfService" :
                                            {
                                               "uid" : "ECONOMY",
                                               "caption" : "Эконом"
                                            },
                                         "departureAirport" :
                                            {
                                               "uid" : "CDG",
                                               "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                            },
                                         "departureCity" :
                                            {
                                               "uid" : "PAR",
                                               "caption" : "ПАРИЖ"
                                            },
                                         "aircraft" :
                                            {
                                               "uid" : "321",
                                               "caption" : "АЭРОБУС321"
                                            },
                                         "travelDuration" : 220,
                                         "arrivalCity" :
                                            {
                                               "uid" : "MOW",
                                               "caption" : "Москва"
                                            },
                                         "arrivalDate" : "2020-08-20T04:15:00",
                                         "flightNumber" : "4860",
                                         "techStopInfos" :
                                            [
                                            ],
                                         "departureDate" : "2020-08-19T23:35:00",
                                         "stops" : 0,
                                         "servicesDetails" :
                                            {
                                               "freeCabinLuggage" :
                                                  {
                                                  },
                                               "paidCabinLuggage" :
                                                  {
                                                  },
                                               "tariffName" : "ECONOMY LIGHT2",
                                               "fareBasis" :
                                                  {
                                                     "ADULT" : "LS50ABLG"
                                                  },
                                               "freeLuggage" :
                                                  {
                                                     "ADULT" :
                                                        {
                                                           "nil" : true
                                                        }
                                                  },
                                               "paidLuggage" :
                                                  {
                                                  }
                                            },
                                         "airline" :
                                            {
                                               "uid" : "AF",
                                               "caption" : "Air France",
                                               "airlineCode" : "AF"
                                            },
                                         "starting" : false,
                                         "arrivalAirport" :
                                            {
                                               "uid" : "SVO",
                                               "caption" : "ШЕРЕМЕТЬЕВО"
                                            },
                                         "operatingAirline" :
                                            {
                                               "uid" : "SU1",
                                               "caption" : "Аэрофлот - российские авиалинии",
                                               "airlineCode" : "SU"
                                            }
                                      }
                                   ]
                             }
                          ],
                       "exchange" :
                          {
                             "ADULT" :
                                {
                                   "exchangeableBeforeDeparture" : true,
                                   "exchangeAfterDeparture" :
                                      {
                                         "amount" : "0",
                                         "currency" : "руб.",
                                         "currencyCode" : "RUB"
                                      },
                                   "exchangeBeforeDeparture" :
                                      {
                                         "amount" : "0",
                                         "currency" : "руб.",
                                         "currencyCode" : "RUB"
                                      },
                                   "exchangeableAfterDeparture" : true
                                }
                          },
                       "isTripartiteContractDiscountApplied" : false,
                       "international" : false,
                       "seats" :
                          [
                             {
                                "count" : 1,
                                "type" :
                                   {
                                      "uid" : "ADULT",
                                      "caption" : "Взрослый"
                                   }
                             }
                          ],
                       "refund" :
                          {
                             "ADULT" :
                                {
                                   "refundableBeforeDeparture" : false,
                                   "refundableAfterDeparture" : false
                                }
                          }
                    },
                 "flightToken" : "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"
              },
              {
                 "hasExtendedFare" : false,
                 "flight" :
                    {
                       "carrier" :
                          {
                             "uid" : "AF",
                             "caption" : "Air France",
                             "airlineCode" : "AF"
                          },
                       "price" :
                          {
                             "total" :
                                {
                                   "amount" : "104598",
                                   "currency" : "руб.",
                                   "currencyCode" : "RUB"
                                },
                             "totalFeeAndTaxes" :
                                {
                                   "amount" : "10893.00",
                                   "currency" : "руб.",
                                   "currencyCode" : "RUB"
                                },
                             "rates" :
                                {
                                   "totalUsd" :
                                      {
                                         "amount" : "1299.35",
                                         "currencyCode" : "EUR"
                                      },
                                   "totalEur" :
                                      {
                                         "amount" : "1473.21",
                                         "currencyCode" : "USD"
                                      }
                                },
                             "passengerPrices" :
                                [
                                   {
                                      "total" :
                                         {
                                            "amount" : "104598.00",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         },
                                      "passengerType" :
                                         {
                                            "uid" : "ADULT",
                                            "caption" : "Взрослый"
                                         },
                                      "singlePassengerTotal" :
                                         {
                                            "amount" : "104598.00",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         },
                                      "passengerCount" : 1,
                                      "tariff" :
                                         {
                                            "amount" : "93705.00",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         },
                                      "feeAndTaxes" :
                                         {
                                            "amount" : "10893.00",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         }
                                   }
                                ]
                          },
                       "servicesStatuses" :
                          {
                             "baggage" :
                                {
                                   "uid" : "FREE",
                                   "caption" : "Бесплатно"
                                },
                             "exchange" :
                                {
                                   "uid" : "FREE",
                                   "caption" : "Бесплатно"
                                },
                             "refund" :
                                {
                                   "uid" : "OFF",
                                   "caption" : "Недоступно"
                                }
                          },
                       "legs" :
                          [
                             {
                                "duration" : 895,
                                "segments" :
                                   [
                                      {
                                         "classOfServiceCode" : "I",
                                         "classOfService" :
                                            {
                                               "uid" : "BUSINESS",
                                               "caption" : "Бизнес"
                                            },
                                         "departureAirport" :
                                            {
                                               "uid" : "SVO",
                                               "caption" : "ШЕРЕМЕТЬЕВО"
                                            },
                                         "departureCity" :
                                            {
                                               "uid" : "MOW",
                                               "caption" : "Москва"
                                            },
                                         "aircraft" :
                                            {
                                               "uid" : "320",
                                               "caption" : "А320"
                                            },
                                         "travelDuration" : 240,
                                         "arrivalCity" :
                                            {
                                               "uid" : "PAR",
                                               "caption" : "ПАРИЖ"
                                            },
                                         "arrivalDate" : "2020-08-18T22:00:00",
                                         "flightNumber" : "1455",
                                         "techStopInfos" :
                                            [
                                            ],
                                         "departureDate" : "2020-08-18T19:00:00",
                                         "stops" : 0,
                                         "servicesDetails" :
                                            {
                                               "freeCabinLuggage" :
                                                  {
                                                  },
                                               "paidCabinLuggage" :
                                                  {
                                                  },
                                               "tariffName" : "BUSINESS FLEX",
                                               "fareBasis" :
                                                  {
                                                     "ADULT" : "IS50AENB"
                                                  },
                                               "freeLuggage" :
                                                  {
                                                     "ADULT" :
                                                        {
                                                           "pieces" : 2,
                                                           "nil" : false,
                                                           "unit" : "шт"
                                                        }
                                                  },
                                               "paidLuggage" :
                                                  {
                                                  }
                                            },
                                         "airline" :
                                            {
                                               "uid" : "AF",
                                               "caption" : "Air France",
                                               "airlineCode" : "AF"
                                            },
                                         "starting" : true,
                                         "arrivalAirport" :
                                            {
                                               "uid" : "CDG",
                                               "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                            }
                                      },
                                      {
                                         "classOfServiceCode" : "I",
                                         "classOfService" :
                                            {
                                               "uid" : "BUSINESS",
                                               "caption" : "Бизнес"
                                            },
                                         "departureAirport" :
                                            {
                                               "uid" : "CDG",
                                               "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                            },
                                         "departureCity" :
                                            {
                                               "uid" : "PAR",
                                               "caption" : "ПАРИЖ"
                                            },
                                         "aircraft" :
                                            {
                                               "uid" : "320",
                                               "caption" : "А320"
                                            },
                                         "travelDuration" : 85,
                                         "arrivalCity" :
                                            {
                                               "uid" : "LON",
                                               "caption" : "ЛОНДОН"
                                            },
                                         "arrivalDate" : "2020-08-19T07:55:00",
                                         "flightNumber" : "1680",
                                         "techStopInfos" :
                                            [
                                            ],
                                         "departureDate" : "2020-08-19T07:30:00",
                                         "stops" : 0,
                                         "servicesDetails" :
                                            {
                                               "freeCabinLuggage" :
                                                  {
                                                  },
                                               "paidCabinLuggage" :
                                                  {
                                                  },
                                               "tariffName" : "BUSINESS FLEX",
                                               "fareBasis" :
                                                  {
                                                     "ADULT" : "IS50AENB"
                                                  },
                                               "freeLuggage" :
                                                  {
                                                     "ADULT" :
                                                        {
                                                           "pieces" : 2,
                                                           "nil" : false,
                                                           "unit" : "шт"
                                                        }
                                                  },
                                               "paidLuggage" :
                                                  {
                                                  }
                                            },
                                         "airline" :
                                            {
                                               "uid" : "AF",
                                               "caption" : "Air France",
                                               "airlineCode" : "AF"
                                            },
                                         "starting" : false,
                                         "arrivalAirport" :
                                            {
                                               "uid" : "LHR",
                                               "caption" : "Лондон, Хитроу"
                                            }
                                      }
                                   ]
                             },
                             {
                                "duration" : 520,
                                "segments" :
                                   [
                                      {
                                         "classOfServiceCode" : "I",
                                         "classOfService" :
                                            {
                                               "uid" : "BUSINESS",
                                               "caption" : "Бизнес"
                                            },
                                         "departureAirport" :
                                            {
                                               "uid" : "LHR",
                                               "caption" : "Лондон, Хитроу"
                                            },
                                         "departureCity" :
                                            {
                                               "uid" : "LON",
                                               "caption" : "ЛОНДОН"
                                            },
                                         "aircraft" :
                                            {
                                               "uid" : "319",
                                               "caption" : "AirbusA319"
                                            },
                                         "travelDuration" : 80,
                                         "arrivalCity" :
                                            {
                                               "uid" : "PAR",
                                               "caption" : "ПАРИЖ"
                                            },
                                         "arrivalDate" : "2020-08-19T19:55:00",
                                         "flightNumber" : "1281",
                                         "techStopInfos" :
                                            [
                                            ],
                                         "departureDate" : "2020-08-19T17:35:00",
                                         "stops" : 0,
                                         "servicesDetails" :
                                            {
                                               "freeCabinLuggage" :
                                                  {
                                                  },
                                               "paidCabinLuggage" :
                                                  {
                                                  },
                                               "tariffName" : "BUSINESS FLEX",
                                               "fareBasis" :
                                                  {
                                                     "ADULT" : "IS50AENB"
                                                  },
                                               "freeLuggage" :
                                                  {
                                                     "ADULT" :
                                                        {
                                                           "pieces" : 2,
                                                           "nil" : false,
                                                           "unit" : "шт"
                                                        }
                                                  },
                                               "paidLuggage" :
                                                  {
                                                  }
                                            },
                                         "airline" :
                                            {
                                               "uid" : "AF",
                                               "caption" : "Air France",
                                               "airlineCode" : "AF"
                                            },
                                         "starting" : true,
                                         "arrivalAirport" :
                                            {
                                               "uid" : "CDG",
                                               "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                            }
                                      },
                                      {
                                         "classOfServiceCode" : "I",
                                         "classOfService" :
                                            {
                                               "uid" : "BUSINESS",
                                               "caption" : "Бизнес"
                                            },
                                         "departureAirport" :
                                            {
                                               "uid" : "CDG",
                                               "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                            },
                                         "departureCity" :
                                            {
                                               "uid" : "PAR",
                                               "caption" : "ПАРИЖ"
                                            },
                                         "aircraft" :
                                            {
                                               "uid" : "321",
                                               "caption" : "АЭРОБУС321"
                                            },
                                         "travelDuration" : 220,
                                         "arrivalCity" :
                                            {
                                               "uid" : "MOW",
                                               "caption" : "Москва"
                                            },
                                         "arrivalDate" : "2020-08-20T04:15:00",
                                         "flightNumber" : "4860",
                                         "techStopInfos" :
                                            [
                                            ],
                                         "departureDate" : "2020-08-19T23:35:00",
                                         "stops" : 0,
                                         "servicesDetails" :
                                            {
                                               "freeCabinLuggage" :
                                                  {
                                                  },
                                               "paidCabinLuggage" :
                                                  {
                                                  },
                                               "tariffName" : "BUSINESS FLEX",
                                               "fareBasis" :
                                                  {
                                                     "ADULT" : "IS50AENB"
                                                  },
                                               "freeLuggage" :
                                                  {
                                                     "ADULT" :
                                                        {
                                                           "pieces" : 2,
                                                           "nil" : false,
                                                           "unit" : "шт"
                                                        }
                                                  },
                                               "paidLuggage" :
                                                  {
                                                  }
                                            },
                                         "airline" :
                                            {
                                               "uid" : "AF",
                                               "caption" : "Air France",
                                               "airlineCode" : "AF"
                                            },
                                         "starting" : false,
                                         "arrivalAirport" :
                                            {
                                               "uid" : "SVO",
                                               "caption" : "ШЕРЕМЕТЬЕВО"
                                            },
                                         "operatingAirline" :
                                            {
                                               "uid" : "SU1",
                                               "caption" : "Аэрофлот - российские авиалинии",
                                               "airlineCode" : "SU"
                                            }
                                      }
                                   ]
                             }
                          ],
                       "exchange" :
                          {
                             "ADULT" :
                                {
                                   "exchangeableBeforeDeparture" : true,
                                   "exchangeAfterDeparture" :
                                      {
                                         "amount" : "0",
                                         "currency" : "руб.",
                                         "currencyCode" : "RUB"
                                      },
                                   "exchangeBeforeDeparture" :
                                      {
                                         "amount" : "0",
                                         "currency" : "руб.",
                                         "currencyCode" : "RUB"
                                      },
                                   "exchangeableAfterDeparture" : true
                                }
                          },
                       "isTripartiteContractDiscountApplied" : false,
                       "international" : false,
                       "seats" :
                          [
                             {
                                "count" : 1,
                                "type" :
                                   {
                                      "uid" : "ADULT",
                                      "caption" : "Взрослый"
                                   }
                             }
                          ],
                       "refund" :
                          {
                             "ADULT" :
                                {
                                   "refundableBeforeDeparture" : false,
                                   "refundableAfterDeparture" : false
                                }
                          }
                    },
                 "flightToken" : "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\nogAA"
              }
           ]
     }
};

const FlightList = () => {

  return (
    <ul className="flight__list">
      {
        flights.result.flights.map(flight => {
          return (
            <li className="flight__item" key={flight.flightToken}>
              <FlightCard flight={flight.flight} />
            </li>
          )
        })
      }
    </ul>
  )
};

export default FlightList;