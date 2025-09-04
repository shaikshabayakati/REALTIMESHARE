import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1f1d1d] h-screen">
        <div >
        {children}
        </div>
      </body>
    </html>
  );
}
