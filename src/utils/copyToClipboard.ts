export const copyToClipboard = (text: string, setCopied: (value: boolean) => void): void => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
          .then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
          })
          .catch(err => {
              console.error('Failed to copy: ', err);
              fallbackCopyTextToClipboard(text, setCopied);
          });
  } else {
      fallbackCopyTextToClipboard(text, setCopied);
  }
};

const fallbackCopyTextToClipboard = (text: string, setCopied: (value: boolean) => void): void => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
  } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
  }
  document.body.removeChild(textArea);
};