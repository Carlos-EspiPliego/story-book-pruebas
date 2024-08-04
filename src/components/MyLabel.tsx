import './MyLabel.css';

export interface Props {
    /**
     * The text to display
     */
    label: string;
    /**
     * The size of the text
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * All Caps text
     */
    allCaps?: boolean;

    /**
     * Custom color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

    /**
     * Custom font color
     */
    fontColor?: string;
}

export const MyLabel = ({
    label, size = 'normal',
    color = 'text-primary',
    fontColor = 'black',
    allCaps = false
}: Props) => {
    return (
        <span className={`${size}  ${color}`} style={{ color: fontColor }}>
            
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}