import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  category: Category[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //   const category = await sanityClient.fetch(query)
}
