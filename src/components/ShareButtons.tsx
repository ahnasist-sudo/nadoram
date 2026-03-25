import { Share2, Link as LinkIcon, MessageCircle, Facebook } from "lucide-react";
import { toast } from "sonner";

export default function ShareButtons() {
  const shareUrl = window.location.href;

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("링크가 복사되었습니다.");
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
  };

  const shareToKakao = () => {
    // Note: This requires Kakao SDK. For now, we'll just show a toast.
    toast.info("카카오톡 공유 기능은 SDK 설정이 필요합니다.");
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
      
      <button 
        onClick={shareToKakao}
        className="flex items-center gap-2 px-6 py-3 bg-[#FEE500] text-black rounded-full hover:opacity-90 transition-all font-bold"
      >
        <MessageCircle size={18} />
        <span>카카오톡</span>
      </button>

      <button 
        onClick={shareToFacebook}
        className="flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white rounded-full hover:opacity-90 transition-all font-bold"
      >
        <Facebook size={18} />
        <span>페이스북</span>
      </button>
    </div>
  );
}
