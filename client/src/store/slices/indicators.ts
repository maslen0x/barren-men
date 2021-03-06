import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Indicator, IndicatorsState } from '../types/indicators'

const initialState: IndicatorsState = {
  loading: false,
  indicators: []
}

const indicatorsSlice = createSlice({
  name: 'indicators',
  initialState,
  reducers: {
    setIndicators(state, action: PayloadAction<Indicator[]>) {
      state.indicators = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    }
  }
})

export const { setIndicators, setLoading } = indicatorsSlice.actions

export default indicatorsSlice.reducer