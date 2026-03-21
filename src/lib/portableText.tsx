import type { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">{children}</h3>,
    normal: ({ children }) => <p className="text-base leading-7 text-gray-700 mb-4">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-blue-600 hover:text-blue-700 underline"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  },
};
