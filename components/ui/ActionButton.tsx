import "./_buttons.scss";

type ActionButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    textColor?: string;
    bgColor?: string;
    borderColor?: string;
    type?: "button" | "submit";
};

export default function ActionButton({
    children,
    onClick,
    textColor,
    bgColor,
    borderColor,
    type = "button",
}: ActionButtonProps) {
    const style = {
        "--btn-text": textColor,
        "--btn-bg": bgColor,
        "--btn-border": borderColor,
    } as React.CSSProperties;

    return (
        <button
            type={type}
            className="uiButton actionButton"
            style={style}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
