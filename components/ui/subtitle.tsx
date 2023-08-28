interface SubtitleProps {
    label: string;
}

const Subtitle = ({ label }: SubtitleProps) => {
    return (
        <h2 className="text-xs text-muted-foreground font-medium mb-2">
            {label}
        </h2>
    );
}

export default Subtitle;