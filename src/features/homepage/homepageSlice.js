import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  contents: [],
  status: 'idle',
};

const groupByN = (n, data) => {
  const result = [];
  for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
  return result;
};

export const fetchQoutes = createAsyncThunk(
  'homepage/fetchQuotes',
  async () => {
    const symbols = ['IBM', 'AAPL', 'AMZN', 'META', 'MSFT'];
    const symbols2 = groupByN(3, symbols);
    const apikey = process.env.REACT_APP_STOCKDATA_API_KEY;
    let quotes = [];
    await Promise.all(
      symbols2.map(async (arr) => {
        const prefix = 'https://api.stockdata.org/v1/data/quote?symbols=';
        const suffix = `&api_token=${apikey}`;
        const input = arr.toString();
        const response = await fetch(prefix + input + suffix);
        const rawQuote = await response.json();
        quotes = quotes.concat(rawQuote.data);
      }),
    );
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
