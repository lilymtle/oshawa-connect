import "./Pill.scss"

interface PillProps {
    id: number;
    category: string;
    style: React.CSSProperties;
}

export default function Pill({ id, category, style }: PillProps) {
    return (
        <div key={id} className="pill" style={style}>
            {category}
        </div>
    )
}