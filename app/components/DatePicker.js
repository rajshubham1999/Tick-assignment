// 'use client';

// import { useState } from 'react';
// import useDateStore from '../store/useDateStore';
// import RecurrenceOptions from './RecurrenceOptions';
// import DatePreview from './DatePreview';

// const DatePicker = () => {
//   const { startDate, endDate, setStartDate, setEndDate } = useDateStore();
//   const [tempStartDate, setTempStartDate] = useState(startDate);
//   const [tempEndDate, setTempEndDate] = useState(endDate);

//   const handleStartDateChange = (e) => setTempStartDate(e.target.value);
//   const handleEndDateChange = (e) => setTempEndDate(e.target.value);
//   const applyDates = () => {
//     setStartDate(tempStartDate);
//     setEndDate(tempEndDate);
//   };

//   return (
//     <div className="p-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Start Date</label>
//         <input type="date" value={tempStartDate} onChange={handleStartDateChange} className="mt-1 block w-full border border-gray-300 rounded-md" />
//       </div>
//       <div className="mt-4">
//         <label className="block text-sm font-medium text-gray-700">End Date</label>
//         <input type="date" value={tempEndDate} onChange={handleEndDateChange} className="mt-1 block w-full border border-gray-300 rounded-md" />
//       </div>
//       <button onClick={applyDates} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Apply Dates</button>
//       <RecurrenceOptions />
//       <DatePreview />
//     </div>
//   );
// };

// export default DatePicker;


'use client';

import { useState } from 'react';
import useDateStore from '../store/useDateStore';
import RecurrenceOptions from './RecurrenceOptions';
import DatePreview from './DatePreview';

const DatePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate, generatePreviewDates } = useDateStore();
  const [tempStartDate, setTempStartDate] = useState(startDate);
  const [tempEndDate, setTempEndDate] = useState(endDate);

  const handleStartDateChange = (e) => setTempStartDate(e.target.value);
  const handleEndDateChange = (e) => setTempEndDate(e.target.value);

  const applyDates = () => {
    setStartDate(tempStartDate);
    setEndDate(tempEndDate);
    generatePreviewDates(); // Generate preview dates based on selected recurrence pattern
  };

  return (
    <div className="p-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input style={{padding:'5px'}} type="date" value={tempStartDate} onChange={handleStartDateChange} className="mt-1 block w-full border border-gray-300 rounded-md" />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input style={{padding:'5px'}}type="date" value={tempEndDate} onChange={handleEndDateChange} className="mt-1 block w-full border border-gray-300 rounded-md" />
      </div>
      <button onClick={applyDates} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Apply Dates</button>
      <RecurrenceOptions />
      <DatePreview />
    </div>
  );
};

export default DatePicker;
