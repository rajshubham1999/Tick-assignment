import { act } from 'react-dom/test-utils';
import useDateStore from '../store/useDateStore';
import { renderHook } from '@testing-library/react-hooks';
import { addDays, addWeeks, addMonths, addYears } from 'date-fns';

describe('useDateStore', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useDateStore());

    expect(result.current.startDate).toBeNull();
    expect(result.current.endDate).toBeNull();
    expect(result.current.recurrencePattern).toBe('daily');
    expect(result.current.recurrenceValue).toBe(1);
    expect(result.current.specificDays).toEqual([]);
    expect(result.current.nthDay).toBeNull();
    expect(result.current.previewDates).toEqual([]);
  });

  it('should set start and end dates', () => {
    const { result } = renderHook(() => useDateStore());

    act(() => {
      result.current.setStartDate('2024-09-06');
      result.current.setEndDate('2024-09-13');
    });

    expect(result.current.startDate).toBe('2024-09-06');
    expect(result.current.endDate).toBe('2024-09-13');
  });

  it('should generate preview dates correctly for daily pattern', () => {
    const { result } = renderHook(() => useDateStore());

    act(() => {
      result.current.setStartDate('2024-09-01');
      result.current.setEndDate('2024-09-05');
      result.current.setRecurrencePattern('daily');
      result.current.setRecurrenceValue(1);
      result.current.generatePreviewDates();
    });

    expect(result.current.previewDates.length).toBe(5);
  });

  it('should generate preview dates correctly for weekly pattern', () => {
    const { result } = renderHook(() => useDateStore());

    act(() => {
      result.current.setStartDate('2024-09-01');
      result.current.setEndDate('2024-09-29');
      result.current.setRecurrencePattern('weekly');
      result.current.setRecurrenceValue(1);
      result.current.generatePreviewDates();
    });

    expect(result.current.previewDates.length).toBe(5);
  });

  // Add similar tests for monthly and yearly recurrence patterns.
});
