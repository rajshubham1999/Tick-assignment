// // 'use client';

// // import useDateStore from '../store/useDateStore'

// // const DatePreview = () => {
// //   const { startDate, endDate, recurrencePattern, recurrenceValue } = useDateStore();

// //   const generatePreviewDates = () => {
// //     // Logic to generate and return a list of dates based on recurrencePattern and recurrenceValue
// //     return []; // Replace with actual logic
// //   };

// //   return (
// //     <div className="mt-6">
// //       <h3 className="text-lg font-medium">Date Preview</h3>
// //       <div className="mt-2">
// //         {/* Display the dates in a mini calendar or list */}
// //         {generatePreviewDates().map(date => (
// //           <div key={date} className="p-2 border border-gray-300 rounded-md mt-1">
// //             {date}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default DatePreview;


// 'use client';

// import useDateStore from '../store/useDateStore';
// import { format } from 'date-fns';

// const DatePreview = () => {
//   const { previewDates } = useDateStore();

//   return (
//     <div className="mt-6">
//       <h3 className="text-lg font-medium">Date Preview</h3>
//       <div className="mt-2 grid grid-cols-3 gap-4">
//         {previewDates.map(date => (
//           <div key={date} className="p-2 border border-gray-300 rounded-md text-center">
//             {format(new Date(date), 'yyyy-MM-dd')}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DatePreview;


'use client';

import useDateStore from '../store/useDateStore';
import { format } from 'date-fns';

const DatePreview = () => {
  const { previewDates, recurrencePattern } = useDateStore();

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium">Date Preview</h3>
      <div className="mt-2 grid grid-cols-3 gap-4">
        {previewDates.map(date => (
          <div key={date} className="p-2 border border-gray-300 rounded-md text-center">
            <div className="text-sm font-semibold">{recurrencePattern.toUpperCase()}</div>
            <div className="text-lg">{format(new Date(date), 'yyyy-MM-dd')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePreview;
