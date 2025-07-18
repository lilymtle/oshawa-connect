import "./Button.scss"

interface ButtonProps {
    className: string;
    type?: "button" | "submit"
    variant: "primary" | "secondary" | "tertiary";
    disabled?: boolean;
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ className, type="button", variant, disabled, label, onClick }: ButtonProps) {
    return (
        <button type={type} className={`${className} ${variant}`} disabled={disabled} onClick={onClick}>
            {label}
        </button>
    );
}