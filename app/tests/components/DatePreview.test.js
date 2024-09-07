import { render, screen } from '@testing-library/react';
import DatePreview from '../components/DatePreview';
import useDateStore from '../store/useDateStore';

jest.mock('../store/useDateStore');

describe('DatePreview', () => {
  it('should render without dates initially', () => {
    useDateStore.mockReturnValue({
      previewDates: [],
      recurrencePattern: 'daily',
    });

    render(<DatePreview />);

    expect(screen.getByText(/Date Preview/i)).toBeInTheDocument();
    expect(screen.queryByText(/DAILY/i)).not.toBeInTheDocument();
  });

  it('should render preview dates correctly', () => {
    useDateStore.mockReturnValue({
      previewDates: ['2024-09-01', '2024-09-02'],
      recurrencePattern: 'daily',
    });

    render(<DatePreview />);

    expect(screen.getAllByText(/DAILY/i)).toHaveLength(2);
    expect(screen.getByText('2024-09-01')).toBeInTheDocument();
    expect(screen.getByText('2024-09-02')).toBeInTheDocument();
  });
});
