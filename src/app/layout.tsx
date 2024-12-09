// app/layout.tsx
import './globals.css'; // Ensure your global styles are imported here

export const metadata = {
  title: 'My Cool App',
  description: 'A Next.js app with proper layout structure',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
