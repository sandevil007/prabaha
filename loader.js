'use client'

export default function myImageLoader({ src, width, quality }) {
    return `http://prabaha.in${src}?w=${width}&q=${quality || 75}`
}