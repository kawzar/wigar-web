export default {
  target: "static",
  env: {
    bucket_slug: process.env.bucket_slug,
    read_key: process.env.read_key,
  },
};
