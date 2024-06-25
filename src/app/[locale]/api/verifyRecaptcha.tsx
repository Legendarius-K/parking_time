import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { recaptchaValue } = req.body;

  if (!recaptchaValue) {
    return res.status(400).json({ success: false, error: 'reCAPTCHA value is missing' });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaValue}`;

  try {
    const response = await fetch(verificationUrl, {
      method: 'POST'
    });

    const data = await response.json();

    if (data.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, error: 'reCAPTCHA verification failed' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export default handler;