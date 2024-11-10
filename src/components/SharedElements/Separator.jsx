const Separator = ({
  orientation = 'horizontal',
  color = 'bg-gray-300',
  className = '',
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      className={`
        ${isHorizontal ? 'w-full h-px' : 'h-auto w-px'}
        ${color}
        ${className}
      `}
      role="separator"
    />
  );
};

export default Separator;
