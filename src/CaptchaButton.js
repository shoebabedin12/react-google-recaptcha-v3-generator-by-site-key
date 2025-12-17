import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const CaptchaButton = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!executeRecaptcha) {
      alert('reCAPTCHA not ready');
      return;
    }

    const generatedToken = await executeRecaptcha('user_action');
    setToken(generatedToken);
    setCopied(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(token);
    setCopied(true);
  };

  return (
    <div style={{ marginTop: 30 }}>
      <button onClick={handleGenerate}>
        Generate Token
      </button>

      {token && (
        <div style={{ marginTop: 20 }}>
          <textarea
            value={token}
            readOnly
            rows={5}
            style={{ width: '100%', padding: 10 }}
          />

          <button
            onClick={handleCopy}
            style={{ marginTop: 10 }}
          >
            {copied ? 'Copied ✔' : 'Copy Token'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CaptchaButton;
