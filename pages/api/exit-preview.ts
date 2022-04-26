import { exitPreview } from '@prismicio/next';
import { NextApiHandler } from 'next';

const PrismicExitPreview: NextApiHandler = async (req, res) => {
    await exitPreview({ req, res });
};

export default PrismicExitPreview;
