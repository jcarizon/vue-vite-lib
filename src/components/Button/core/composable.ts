export function useClick(onClick?: () => void) {
  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return {
    handleClick,
  };
}