import { Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";

export default function ShareButtons() {
  const shareUrl = window.location.href;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("링크가 복사되었습니다.");
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-12">
      <button 
        onClick={copyLink}
        className="flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/20 transition-all text-primary font-medium"
      >
        <LinkIcon size={18} />
        <span>링크 복사</span>
      </button>
    </div>
  );
}
