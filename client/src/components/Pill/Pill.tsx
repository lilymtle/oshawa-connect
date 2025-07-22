/* --- styling --- */
import "./Pill.scss"

/* --- props and types ---*/
interface PillProps {
    id: number;
    category: string;
    style: React.CSSProperties;
    emoji: string;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    selected?: boolean;
}

export default function Pill({ id, category, style, emoji, onClick, selected}: PillProps) {
    return (
        <div key={id} className={`pill ${ selected ? "pill--selected" : ""}`} style={style} onClick={onClick}>
            <div className="pill__circle"><span className="pill__emoji">{emoji}</span></div>
            {category}
        </div>
    )
}