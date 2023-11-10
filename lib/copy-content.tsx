'use client'

import { useToast } from "@/components/ui/use-toast";

interface CopyContentProps {
    title: string;
    label: string;
    content: string;
}

const CopyContent = ({ title, label, content }: CopyContentProps) => {
    const { toast } = useToast();

    function copyToClipboard(text: string) {
        const textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    }

    function handleClipboard() {
        copyToClipboard('raphael@ndrws.dev');
        toast({
            title: `${title} copied to clipboard`,
            description: content,
        });
    }

    return (
        <span
            className='text-sm text-gray-400 font-medium'
            onClick={handleClipboard}
        >
            {label}
        </span>
    )
}


export default CopyContent