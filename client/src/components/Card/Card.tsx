import "./Card.scss"

interface CardProps {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode; 
};

export default function Card({ className, style, children }: CardProps) {
    return(
        <div className={`card ${className}`} style={style}>
            {children}
        </div>
    );
}