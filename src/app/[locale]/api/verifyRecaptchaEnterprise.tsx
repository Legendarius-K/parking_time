import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { recaptchaValue } = req.body;

  if (!recaptchaValue) {
    return res.status(400).json({ message: 'reCAPTCHA value is missing' });
  }

  const apiKey = process.env.RECAPTCHA_API_KEY;
  const verificationUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/parking-time-1718202052475/assessments?key=${apiKey}`;

  const requestBody = {
    event: {
      token: recaptchaValue,
      siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      expectedAction: 'contact_form',
    },
  };

  try {
    const response = await fetch(verificationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (data.tokenProperties.valid) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ success: false, error: data.tokenProperties.invalidReason });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export default handler;
