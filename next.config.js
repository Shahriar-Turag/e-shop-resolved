/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            "i.ibb.co",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "res.cloudinary.com"
        ]
    },
    env: {
        stripe_public_key: process.env.STRIPE_PUBLISHABLE_KEY,
    }
}

module.exports = nextConfig
