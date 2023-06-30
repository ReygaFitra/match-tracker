'use client';
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';

export const metadata = {
  title: 'Match Tracker',
  description: 'Football match tracker mini apps',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
