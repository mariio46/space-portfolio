import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/main/star-background';
import Navbar from '@/components/main/navbar';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Space Portfolio',
    description: 'Portfolio website with space theme.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body
                className={cn(
                    figtree.className,
                    'overflow-y-auto overflow-x-hidden bg-[#030014] font-sans antialiased',
                )}>
                <StarsCanvas />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
