import { useTheme } from "styled-components";

const CloseIcon = () => {
  const theme = useTheme();
  return (
    <svg width={"20px"} height={"20px"} fill={theme.textColors.primary}>
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
};

export default CloseIcon;
