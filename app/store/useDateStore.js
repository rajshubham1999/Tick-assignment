
// import { create } from 'zustand'

// const useDateStore = create((set) => ({
//   startDate: null,
//   endDate: null,
//   recurrencePattern: 'daily',
//   recurrenceValue: 1,
//   specificDays: [],
//   nthDay: null,
//   setStartDate: (date) => set({ startDate: date }),
//   setEndDate: (date) => set({ endDate: date }),
//   setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
//   setRecurrenceValue: (value) => set({ recurrenceValue: value }),
//   setSpecificDays: (days) => set({ specificDays: days }),
//   setNthDay: (day) => set({ nthDay: day }),
// }));

// export default useDateStore;


import { create } from 'zustand'
import { addDays, addWeeks, addMonths, addYears } from 'date-fns';

const useDateStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrencePattern: 'daily',
  recurrenceValue: 1,
  specificDays: [],
  nthDay: null,
  previewDates: [],
  
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  setRecurrenceValue: (value) => set({ recurrenceValue: value }),
  setSpecificDays: (days) => set({ specificDays: days }),
  setNthDay: (day) => set({ nthDay: day }),
  generatePreviewDates: () => set((state) => {
    const previewDates = [];
    const { startDate, endDate, recurrencePattern, recurrenceValue } = state;
    if (startDate && endDate) {
      let currentDate = new Date(startDate);
      const end = new Date(endDate);
      
      while (currentDate <= end) {
        previewDates.push(new Date(currentDate));
        
        switch (recurrencePattern) {
          case 'daily':
            currentDate = addDays(currentDate, parseInt(recurrenceValue));
            break;
          case 'weekly':
            currentDate = addWeeks(currentDate, parseInt(recurrenceValue));
            break;
          case 'monthly':
            currentDate = addMonths(currentDate, parseInt(recurrenceValue));
            break;
          case 'yearly':
            currentDate = addYears(currentDate, parseInt(recurrenceValue));
            break;
          default:
            break;
        }
      }
    }
    return { previewDates };
  }),
}));

export default useDateStore;
