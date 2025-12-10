import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledCopy = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledButtonIcon = styled.button`
  &:focus {
    outline: none;
  }
`;

const StyledText = styled.span`
  opacity: 0.5;
`;

function CopyText({ text }) {
  const [copied, setCopied] = useState(false);
  const { isDarkMode } = useDarkMode();
  console.log(isDarkMode);
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      toast.error(`${err}`);
    }
  }
  return (
    <StyledCopy>
      <StyledText>{text}</StyledText>
      <StyledButtonIcon
        onClick={handleCopy}
        style={isDarkMode ? { color: "black" } : { color: "black" }}
      >
        {copied ? "Copied!" : "Copy"}
      </StyledButtonIcon>
    </StyledCopy>
  );
}

export default CopyText;
