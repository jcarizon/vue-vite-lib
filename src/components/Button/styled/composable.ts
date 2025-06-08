export function useButtonClick(onClick?: () => void) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return { handleClick };
}