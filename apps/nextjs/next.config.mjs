import MillionLint from "@million/lint";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@acme/ui"],
};
export default MillionLint.next({
  rsc: true,
})(nextConfig);
