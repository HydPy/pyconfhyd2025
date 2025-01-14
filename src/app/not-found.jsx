"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ASSETS } from '@/conference';
import Link from 'next/link';

export default function NotFound() {
    useEffect(() => {
        const grid = document.querySelector('.grid');
        const rows = 2;
        const cols = 2;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const square = document.createElement('div');
                square.className = 'bg-orange-200 rounded-lg overflow-hidden';
                square.style.width = '300px'; // Width is twice the height
                square.style.height = '150px'; // Height
                const img = document.createElement('img');
                img.src = ASSETS.logoUrl;
                img.className = 'h-full w-full object-cover';
                img.alt = 'Logo';
                square.appendChild(img);
                grid.appendChild(square);
            }
        }

        gsap.from('.grid div', {
            scale: 0,
            opacity: 0,
            duration: 1,
            stagger: {
                each: 0.2,
                grid: [cols, rows], // 2 columns, 2 rows
                from: 'start' // Start from the first row
            },
            ease: 'back.out(1.2)',
            yoyo: true,
            repeat: -1,
            repeatDelay: 1
        });

        gsap.to('h1 span', {
            rotationY: 360,
            duration: 2,
            ease: 'elastic.out(1, 0.3)',
            repeat: -1,
            repeatDelay: 3
        });
    }, []);

    return (
        <div className="bg-orange-50 min-h-screen flex items-center justify-center">
            <main className="container mx-auto px-4 text-center pt-12 md:pt-20">
                <h1 className="text-6xl lg:text-8xl font-bold text-orange-600 mb-6" aria-label="404 - Page not found">
                    4<span className="inline-block">0</span>4
                </h1>
                <p className="text-xl lg:text-2xl text-orange-800 mb-8">Oops! The page you&apos;re looking for has vanished.</p>
                <Link href="/">
                    <a className="inline-block py-3 px-6 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300 mb-12 focus:outline-none focus:ring-2 focus:ring-orange-300" aria-label="Go back to home page">
                        Take Me Home.
                    </a>
                </Link>
                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto" aria-hidden="true">
                    {/* Grid of animated squares with images */}
                </div>
            </main>
        </div>
    );
}