"use client";

import { useEffect } from 'react';
import { ASSETS } from '@/conference';
import Link from 'next/link';
import { Heading, Paragraph } from '@/components/Typography';


export default function NotFound() {
    useEffect(() => {
        const grid = document.querySelector('.grid');
        const rows = 2;
        const cols = 2;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const square = document.createElement('div');
                square.className = 'bg-orange-200 rounded-lg overflow-hidden transform transition-transform duration-500 ease-out hover:scale-110';
                square.style.width = '300px'; 
                square.style.height = '150px'; 
                const img = document.createElement('img');
                img.src = ASSETS.logoUrl;
                img.className = 'h-full w-full object-cover';
                img.alt = 'Logo';
                square.appendChild(img);
                grid.appendChild(square);
            }
        }
    }, []);

    return (
        <div className="bg-orange-50 min-h-screen flex items-center justify-center">
            <main className="container mx-auto px-4 text-center pt-12 md:pt-20">
                <Heading level={1} className="text-6xl lg:text-8xl font-bold text-primary-700 mb-6"  aria-label="404 - Page not found">
                    4<span className="inline-block">0</span>4
                </Heading>
                <Paragraph className="text-xl lg:text-2xl text-secondary-600 mb-8">
                    Oops! The page you&apos;re looking for has vanished.
                </Paragraph>
                <Link href="/" className="inline-block py-3 px-6 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300 mb-12 focus:outline-none focus:ring-2 focus:ring-orange-300" aria-label="Go back to home page">
                    Take Me Home.
                </Link>
                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto" aria-hidden="true">
                    {/* Grid of animated squares with images */}
                </div>
            </main>
        </div>
    );
}