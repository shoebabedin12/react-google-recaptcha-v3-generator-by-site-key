import React, { useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import CaptchaButton from './CaptchaButton';

function App() {
  const [siteKey, setSiteKey] = useState('');
  const [activeKey, setActiveKey] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveKey(siteKey); // provider activate
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Enter reCAPTCHA Site Key</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter site key"
          value={siteKey}
          onChange={(e) => setSiteKey(e.target.value)}
          style={{ width: 400, padding: 8 }}
        />
        <br /><br />
        <button type="submit">Activate reCAPTCHA</button>
      </form>

      {activeKey && (
        <GoogleReCaptchaProvider
          reCaptchaKey={activeKey}
          key={activeKey} // 🔑 important: re-mount provider
        >
          <CaptchaButton />
        </GoogleReCaptchaProvider>
      )}
    </div>
  );
}

export default App;
