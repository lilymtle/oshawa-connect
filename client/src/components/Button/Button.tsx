import "./Button.scss"

interface ButtonProps {
    className: string;
    variant: "primary" | "secondary" | "tertiary";
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ className, variant, label, onClick }: ButtonProps) {
    return (
        <button className={`${className} ${variant}`} onClick={onClick}>
            {label}
        </button>
    );
}