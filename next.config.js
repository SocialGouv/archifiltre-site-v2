/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'x-robots-tag',
                        value: process.env.HEADER_ROBOTS_TAG,
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
