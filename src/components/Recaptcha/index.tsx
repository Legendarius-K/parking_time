import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha: React.FC<{ onChange: (value: string | null) => void }> = ({ onChange }) => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    console.error('Missing reCAPTCHA site key');
    return null;
  }

  return (
    <ReCAPTCHA
      sitekey={siteKey}
      onChange={onChange}
    />
  );
};

export default Recaptcha;