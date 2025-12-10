import { useState } from "react";
import toast from "react-hot-toast";
import { IoCopy, IoCopyOutline } from "react-icons/io5";
import styled from "styled-components";

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
      <StyledButtonIcon onClick={handleCopy}>
        {copied ? <IoCopy /> : <IoCopyOutline />}
      </StyledButtonIcon>
    </StyledCopy>
  );
}

export default CopyText;
