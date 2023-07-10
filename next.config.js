/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', 'images.unsplash.com',
      "t-f9-zpcloud.zdn.vn", "t-f8-zpcloud.zdn.vn",
      "f9-zpcloud.zdn.vn",
      "s3.us-west-2.amazonaws.com",
      "www.notion.so",
    ],
  },
};

module.exports = nextConfig;