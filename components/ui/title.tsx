import { Separator } from "@/components/ui/separator";

type TitleProps = {
    label: string;
}

const Title = ({ label }: TitleProps) => {
    return (
        <h1 className="text-xl font-semibold mb-6">
            {label}
            <Separator />
        </h1>
    );
}

export default Title;