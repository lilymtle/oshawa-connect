import "./Pill.scss"

interface PillProps {
    id: number;
    category: string;
    style: React.CSSProperties;
    emoji: string;
}

export default function Pill({ id, category, style, emoji}: PillProps) {
    return (
        <div key={id} className="pill" style={style}>
            <div className="pill__circle"><span className="pill__emoji">{emoji}</span></div>
            {category}
        </div>
    )
}