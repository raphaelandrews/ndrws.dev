import { Separator } from "./separator";

type SubtitleProps = {
    label: string;
    icon: React.ReactNode;
}

const Subtitle = ({ label, icon }: SubtitleProps) => {
    return (
        <>
        <h2 className="flex gap-2 items-center font-semibold mb-2">
            {icon} {label}
        </h2 >
        <Separator />
        </>
    );
}

export default Subtitle;