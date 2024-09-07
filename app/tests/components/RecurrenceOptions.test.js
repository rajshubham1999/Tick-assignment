import { render, screen, fireEvent } from '@testing-library/react';
import RecurrenceOptions from '../components/RecurrenceOptions';
import useDateStore from '../store/useDateStore';

jest.mock('../store/useDateStore');

describe('RecurrenceOptions', () => {
  let setRecurrencePattern, setRecurrenceValue, setSpecificDays, setNthDay;

  beforeEach(() => {
    setRecurrencePattern = jest.fn();
    setRecurrenceValue = jest.fn();
    setSpecificDays = jest.fn();
    setNthDay = jest.fn();

    useDateStore.mockReturnValue({
      recurrencePattern: 'daily',
      setRecurrencePattern,
      recurrenceValue: 1,
      setRecurrenceValue,
      specificDays: [],
      setSpecificDays,
      nthDay: null,
      setNthDay,
    });
  });

  it('should render correctly', () => {
    render(<RecurrenceOptions />);
    
    expect(screen.getByLabelText(/Recurrence Pattern/i)).toBeInTheDocument();
  });

  it('should change the recurrence pattern correctly', () => {
    render(<RecurrenceOptions />);
    
    fireEvent.change(screen.getByLabelText(/Recurrence Pattern/i), { target: { value: 'weekly' } });
    
    expect(setRecurrencePattern).toHaveBeenCalledWith('weekly');
  });

  it('should change the recurrence value correctly', () => {
    render(<RecurrenceOptions />);
    
    fireEvent.change(screen.getByLabelText(/Every X/i), { target: { value: '2' } });
    
    expect(setRecurrenceValue).toHaveBeenCalledWith('2');
  });

  it('should handle specific days correctly for weekly pattern', () => {
    useDateStore.mockReturnValue({
      ...useDateStore(),
      recurrencePattern: 'weekly',
    });

    render(<RecurrenceOptions />);

    const mondayCheckbox = screen.getByLabelText(/Mon/i);
    
    fireEvent.click(mondayCheckbox);
    
    expect(setSpecificDays).toHaveBeenCalled();
  });

  it('should handle nth day correctly for monthly pattern', () => {
    useDateStore.mockReturnValue({
      ...useDateStore(),
      recurrencePattern: 'monthly',
    });

    render(<RecurrenceOptions />);

    const nthDayInput = screen.getByLabelText(/Nth Day/i);
    
    fireEvent.change(nthDayInput, { target: { value: '2' } });
    
    expect(setNthDay).toHaveBeenCalledWith('2');
  });
});
