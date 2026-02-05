import Link from "next/link";
import "./_buttons.scss";

type NavButtonProps = {
    children: React.ReactNode;
    href: string;
    textColor?: string;
    bgColor?: string;
    borderColor?: string;
};

export default function NavButton({
    children,
    href,
    textColor,
    bgColor,
    borderColor,
}: NavButtonProps) {
    const style = {
        "--btn-text": textColor,
        "--btn-bg": bgColor,
        "--btn-border": borderColor,
    } as React.CSSProperties;

    return (
        <Link href={href} className="uiButton navButton" style={style}>
            {children}
        </Link>
    );
}
