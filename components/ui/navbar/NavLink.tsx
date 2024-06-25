import Link from "next/link";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function NavLink({ children, href }: NavLinkProps) {
  return <Link href={href}>{children}</Link>;
}
