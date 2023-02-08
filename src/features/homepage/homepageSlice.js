import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  contents: [],
  status: 'idle',
};

export const fetchQoutes = createAsyncThunk(
  'homepage/fetchQuotes',
  async () => {
    // const symbols = ['IBM', 'AAPL', 'AMZN', 'META', 'MSFT'];
    // const apikey = process.env.REACT_APP_API_KEY;
    const quotes = [
      {
        '01. symbol': 'MSFT',
        '02. open': '3.6200',
        '03. high': '3.6900',
        '04. low': '3.3900',
        '05. price': '3.4400',
        '06. volume': '117940570',
        '07. latest trading day': '2023-02-06',
        '08. previous close': '3.6500',
        '09. change': '-0.2100',
        '10. change percent': '-5.7534%',
      },
      {
        '01. symbol': 'IBM',
        '02. open': '135.8300',
        '03. high': '136.3200',
        '04. low': '134.9500',
        '05. price': '136.1800',
        '06. volume': '4841300',
        '07. latest trading day': '2023-02-06',
        '08. previous close': '136.9400',
        '09. change': '-0.7600',
        '10. change percent': '-0.5550%',
      },
      {
        '01. symbol': 'AAPL',
        '02. open': '135.8300',
        '03. high': '136.3200',
        '04. low': '134.9500',
        '05. price': '136.1800',
        '06. volume': '4841300',
        '07. latest trading day': '2023-02-06',
        '08. previous close': '136.9400',
        '09. change': '-0.7600',
        '10. change percent': '-0.5550%',
      },
      {
        '01. symbol': 'AMZN',
        '02. open': '135.8300',
        '03. high': '136.3200',
        '04. low': '134.9500',
        '05. price': '136.1800',
        '06. volume': '4841300',
        '07. latest trading day': '2023-02-06',
        '08. previous close': '136.9400',
        '09. change': '-0.7600',
        '10. change percent': '-0.5550%',
      },
      {
        '01. symbol': 'META',
        '02. open': '135.8300',
        '03. high': '136.3200',
        '04. low': '134.9500',
        '05. price': '136.1800',
        '06. volume': '4841300',
        '07. latest trading day': '2023-02-06',
        '08. previous close': '136.9400',
        '09. change': '-0.7600',
        '10. change percent': '-0.5550%',
      },
    ];
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
    // console.log(quotes);
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
        console.log(`Quotes = ${quotes}`);
        return { ...state, contents: quotes };
      });
  },
});

export default homepageSlice.reducer;
export const selectAllQuotes = (state) => state.homepage.contents;
export const selectState = (state) => state.homepage.status;
