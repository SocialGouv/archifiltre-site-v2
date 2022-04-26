import { redirectToPreviewURL, setPreviewData } from '@prismicio/next';
import { NextApiHandler } from 'next';
import { Client, linkResolver } from '../../utils/prismic/helpers';

const PrismicPreview: NextApiHandler = async (req, res) => {
    const client = Client({ req });
    await setPreviewData({ req, res });
    await redirectToPreviewURL({ req, res, client, linkResolver });
};

export default PrismicPreview;
