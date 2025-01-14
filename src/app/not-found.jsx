"use client";

import { useEffect } from 'react';
import gsap from 'gsap';

export default function NotFound() {
    useEffect(() => {
        const grid = document.querySelector('.grid');
        for (let i = 0; i < 3; i++) {
            const square = document.createElement('div');
            square.className = 'bg-orange-200 rounded-lg aspect-square';
            grid.appendChild(square);
        }

        gsap.from('.grid div', {
            scale: 0,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'back.out(1.7)',
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
                <p className="text-xl lg:text-2xl text-orange-800 mb-8">Oops! The page you're looking for has vanished.</p>
                <a href="/"
                    className="inline-block py-3 px-6 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300 mb-12 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    aria-label="Go back to home page">
                    Take Me Home.
                </a>
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto" aria-hidden="true">
                    
                    {/* Grid of animated squares */}
                </div>
            </main>
        </div>
    );
}