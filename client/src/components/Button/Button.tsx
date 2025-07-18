import "./Button.scss"

interface ButtonProps {
    className: string;
    type?: "button" | "submit"
    variant: "primary" | "secondary" | "tertiary";
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ className, type="button", variant, label, onClick }: ButtonProps) {
    return (
        <button type={type} className={`${className} ${variant}`} onClick={onClick}>
            {label}
        </button>
    );
}