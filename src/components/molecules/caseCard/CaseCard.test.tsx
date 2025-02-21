import { render, screen, fireEvent } from '@testing-library/react';
import { CaseCard, CaseCardProps } from './CaseCard';

describe('CaseCard', () => {
  const defaultProps: CaseCardProps = {
    alt: 'Test Image',
    src: 'test-image.jpg',
    artist: 'Test Artist',
    title: 'Test Title',
    visit: 0,
    like: 10,
    handleLike: jest.fn(),
    handleVisit: jest.fn(),
    liked: false,
  };

  it('renders card with correct information', () => {
    render(<CaseCard {...defaultProps} />);
    
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
    expect(screen.getByText('Test Artist')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument(); // Like count
  });

  it('calls handleLike when like button is clicked', () => {
    render(<CaseCard {...defaultProps} />);
    
    const likeButton = screen.getByText('10').closest('button');
    if (likeButton) fireEvent.click(likeButton);

    expect(defaultProps.handleLike).toHaveBeenCalled();
  });

  it('calls handleVisit when visit button is clicked', () => {
    render(<CaseCard {...defaultProps} />);
    
    const visitButton = screen.getByText('0').closest('button');
    if (visitButton) fireEvent.click(visitButton);

    expect(defaultProps.handleVisit).toHaveBeenCalled();
  });
});
