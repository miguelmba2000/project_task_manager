import Link from "next/link";

export default function Navigation({ activeSection }) {
  const sections = [
    { name: "All", href: "/" },
    { name: "Open", href: "/open" },
    { name: "Closed", href: "/closed" },
  ];

  return (
    <nav className="space-x-4">
      {sections.map((section) => (
        <Link
          key={section.name}
          href={section.href}
          className={`px-4 py-2 rounded ${
            activeSection === section.name ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {section.name}
        </Link>
      ))}
    </nav>
  );
}
