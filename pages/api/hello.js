// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSentry } from '@sentry/nextjs';

const doAsyncWork = () => Promise.reject(new Error('API Test 1'));
doAsyncWork();

const handler = async (req, res) => {
  throw new Error("API throw error test");
  res.status(200).json({ name: "John Doe" });
};

export default withSentry(handler);
