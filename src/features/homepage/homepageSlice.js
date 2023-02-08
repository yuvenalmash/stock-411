import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  contents: [],
  status: 'idle',
};

export const fetchQoutes = createAsyncThunk(
  'homepage/fetchQuotes',
  async () => {
    const quotes = [
      {
        '01. symbol': 'MSFT',
        '02. open': '260.5300',
        '03. high': '268.7750',
        '04. low': '260.0800',
        '05. price': '267.5600',
        '06. volume': '50841365',
        '07. latest trading day': '2023-02-07',
        '08. previous close': '256.7700',
        '09. change': '10.7900',
        '10. change percent': '4.2022%',
      },
      {
        '01. symbol': 'IBM',
        '02. open': '135.6700',
        '03. high': '136.4000',
        '04. low': '134.4500',
        '05. price': '135.8400',
        '06. volume': '3737553',
        '07. latest trading day': '2023-02-07',
        '08. previous close': '136.1800',
        '09. change': '-0.3400',
        '10. change percent': '-0.2497%',
      },
      {
        '01. symbol': 'AAPL',
        '02. open': '150.6400',
        '03. high': '155.2300',
        '04. low': '150.6400',
        '05. price': '154.6500',
        '06. volume': '83322551',
        '07. latest trading day': '2023-02-07',
        '08. previous close': '151.7300',
        '09. change': '2.9200',
        '10. change percent': '1.9245%',
      },
      {
        '01. symbol': 'AMZN',
        '02. open': '101.1700',
        '03. high': '102.4100',
        '04. low': '98.0800',
        '05. price': '102.1100',
        '06. volume': '119501301',
        '07. latest trading day': '2023-02-07',
        '08. previous close': '102.1800',
        '09. change': '-0.0700',
        '10. change percent': '-0.0685%',
      },
      {
        '01. symbol': 'META',
        '02. open': '185.5750',
        '03. high': '193.7799',
        '04. low': '184.4000',
        '05. price': '191.6200',
        '06. volume': '47080662',
        '07. latest trading day': '2023-02-07',
        '08. previous close': '186.0600',
        '09. change': '5.5600',
        '10. change percent': '2.9883%',
      },
    ];
    // const symbols = ['IBM', 'AAPL', 'AMZN', 'META', 'MSFT'];
    // const apikey = process.env.REACT_APP_API_KEY;
    // const quotes = [];
    // await Promise.all(
    //   symbols.map(async (symbol) => {
    //     const response = await fetch(
    //       `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apikey}`,
    //     );
    //     const rawQuote = await response.json();
    //     const quote = rawQuote[Object.keys(rawQuote)[0]];
    //     quotes.push(quote);
    //   }),
    // );
    return quotes;
  },
);

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQoutes.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchQoutes.fulfilled, (state, action) => {
        const quotes = action.payload;
        return { ...state, contents: quotes };
      });
  },
});

export default homepageSlice.reducer;
export const selectAllQuotes = (state) => state.homepage.contents;
export const selectState = (state) => state.homepage.status;
