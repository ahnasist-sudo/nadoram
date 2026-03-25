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
        className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
      >
        <LinkIcon size={18} className="text-primary" />
        <span>링크 복사</span>
      </button>
    </div>
  );
}
