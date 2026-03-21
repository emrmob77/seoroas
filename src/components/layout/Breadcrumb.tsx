import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { breadcrumbSchema } from "@/lib/schema";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: "Ana Sayfa", url: "/" }, ...items];

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema(allItems)} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-1 text-sm text-gray">
          {allItems.map((item, index) => (
            <li key={item.url} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5" />}
              {index === allItems.length - 1 ? (
                <span className="text-dark font-medium">{item.name}</span>
              ) : (
                <Link href={item.url} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
