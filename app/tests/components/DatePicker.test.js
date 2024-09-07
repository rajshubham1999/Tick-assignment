import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from '../components/DatePicker';
import useDateStore from '../store/useDateStore';

jest.mock('../store/useDateStore');

describe('DatePicker', () => {
  let setStartDate, setEndDate, generatePreviewDates;

  beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    generatePreviewDates = jest.fn();

    useDateStore.mockReturnValue({
      startDate: null,
      endDate: null,
      setStartDate,
      setEndDate,
      generatePreviewDates,
    });
  });

  it('should render correctly', () => {
    render(<DatePicker />);
    
    expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/End Date/i)).toBeInTheDocument();
  });

  it('should update start date and end date on change', () => {
    render(<DatePicker />);
    
    const startDateInput = screen.getByLabelText(/Start Date/i);
    const endDateInput = screen.getByLabelText(/End Date/i);
    
    fireEvent.change(startDateInput, { target: { value: '2024-09-01' } });
    fireEvent.change(endDateInput, { target: { value: '2024-09-10' } });

    expect(startDateInput.value).toBe('2024-09-01');
    expect(endDateInput.value).toBe('2024-09-10');
  });

  it('should apply dates and generate preview dates when clicking Apply Dates button', () => {
    render(<DatePicker />);

    fireEvent.click(screen.getByText(/Apply Dates/i));
    
    expect(setStartDate).toHaveBeenCalled();
    expect(setEndDate).toHaveBeenCalled();
    expect(generatePreviewDates).toHaveBeenCalled();
  });
});
