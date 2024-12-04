import './globals.css';  // Importer le fichier CSS

export const metadata = {
  title: "Task Manager",
  description: "Manage your tasks efficiently",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">{children}</body>
    </html>
  );
}
