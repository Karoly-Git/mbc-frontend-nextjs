import Link from "next/link";
import "./_buttons.scss";

type NavButtonProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
};

export default function NavButton({
    children,
    href,
    className,
}: NavButtonProps) {
    return (
        <Link
            href={href}
            className={`uiButton navButton ${className}`}
        >
            {children}
        </Link>
    );
}
