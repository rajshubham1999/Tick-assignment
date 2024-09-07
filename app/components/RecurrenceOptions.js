// 'use client';

// import useDateStore from '../store/useDateStore'

// const RecurrenceOptions = () => {
//   const { recurrencePattern, setRecurrencePattern, recurrenceValue, setRecurrenceValue, specificDays, setSpecificDays, nthDay, setNthDay } = useDateStore();

//   const handlePatternChange = (e) => setRecurrencePattern(e.target.value);
//   const handleValueChange = (e) => setRecurrenceValue(e.target.value);

//   return (
//     <div className="mt-6">
//       <label className="block text-sm font-medium text-gray-700">Recurrence Pattern</label>
//       <select value={recurrencePattern} onChange={handlePatternChange} className="mt-1 block w-full border border-gray-300 rounded-md">
//         <option value="daily">Daily</option>
//         <option value="weekly">Weekly</option>
//         <option value="monthly">Monthly</option>
//         <option value="yearly">Yearly</option>
//       </select>
//       <label className="block text-sm font-medium text-gray-700 mt-4">Every X:</label>
//       <input type="number" value={recurrenceValue} onChange={handleValueChange} className="mt-1 block w-full border border-gray-300 rounded-md" />
//       {/* Additional UI for specific days and nth day can be added here */}
//     </div>
//   );
// };

// export default RecurrenceOptions;


'use client';

import useDateStore from '../store/useDateStore'

const RecurrenceOptions = () => {
  const { recurrencePattern, setRecurrencePattern, recurrenceValue, setRecurrenceValue, specificDays, setSpecificDays, nthDay, setNthDay } = useDateStore();

  const handlePatternChange = (e) => setRecurrencePattern(e.target.value);
  const handleValueChange = (e) => setRecurrenceValue(e.target.value);
  const handleSpecificDayChange = (e) => {
    const day = e.target.value;
    setSpecificDays(specificDays.includes(day) ? specificDays.filter(d => d !== day) : [...specificDays, day]);
  };
  const handleNthDayChange = (e) => setNthDay(e.target.value);

  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-700">Recurrence Pattern</label>
      <select style={{padding:'5px'}}value={recurrencePattern} onChange={handlePatternChange} className="mt-1 block w-full border border-gray-300 rounded-md">
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <label className="block text-sm font-medium text-gray-700 mt-4">Every X:</label>
      <input style={{padding:'5px'}} type="number" value={recurrenceValue} onChange={handleValueChange} className="mt-1 block w-full border border-gray-300 rounded-md" />

      {recurrencePattern === 'weekly' && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Specific Days:</label>
          <div className="flex space-x-2 mt-1">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <label key={day} className="flex items-center space-x-1">
                <input 
                  type="checkbox" 
                  value={day} 
                  checked={specificDays.includes(day)} 
                  onChange={handleSpecificDayChange} 
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {recurrencePattern === 'monthly' && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Nth Day:</label>
          <input 
            type="number" 
            value={nthDay || ''} 
            onChange={handleNthDayChange} 
            className="mt-1 block w-full border border-gray-300 rounded-md" 
            placeholder="Enter the nth day (e.g., 2 for second Tuesday)"
            
          />
        </div>
      )}
    </div>
  );
};

export default RecurrenceOptions;
