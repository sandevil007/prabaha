'use client'

export default function myImageLoader({ src, width, height, quality }) {
    return `https://prabaha.in${src}?w=${width}&h=${height}&q=${quality || 75}`
}