import "./Button.scss"

interface ButtonProps {
    className: string;
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ className, label, onClick }: ButtonProps) {
    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    );
}