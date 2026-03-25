import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SiteSettings } from "../../types";
import { toast } from "sonner";

const settingsSchema = z.object({
  title: z.string().min(1, "제목을 입력해주세요"),
  subtitle: z.string().min(1, "부제목을 입력해주세요"),
  date: z.string().min(1, "날짜를 입력해주세요"),
  location: z.string().min(1, "장소를 입력해주세요"),
  locationDetail: z.string().min(1, "상세 주소를 입력해주세요"),
  aboutText: z.string().min(1, "소개글을 입력해주세요"),
  phone: z.string().min(1, "연락처를 입력해주세요"),
  email: z.string().email("올바른 이메일 형식을 입력해주세요").min(1, "이메일을 입력해주세요"),
  donationAccount: z.string().min(1, "후원계좌를 입력해주세요"),
  primaryColor: z.string(),
  heroImage: z.string(),
});

type SettingsFormData = z.infer<typeof settingsSchema>;

interface SettingsFormProps {
  initialData: SiteSettings;
  onSave: (data: SiteSettings) => void;
}

export default function SettingsForm({ initialData, onSave }: SettingsFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: initialData,
  });

  const onSubmit = (data: SettingsFormData) => {
    onSave(data as SiteSettings);
    toast.success("설정이 저장되었습니다.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-2xl">
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-muted-foreground">축제 제목</label>
          <input 
            {...register("title")}
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
          {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-muted-foreground">부제목</label>
          <input 
            {...register("subtitle")}
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-muted-foreground">일시</label>
            <input 
              {...register("date")}
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-muted-foreground">연락처</label>
            <input 
              {...register("phone")}
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-muted-foreground">이메일</label>
          <input 
            {...register("email")}
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-muted-foreground">후원계좌</label>
          <input 
            {...register("donationAccount")}
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
          {errors.donationAccount && <p className="text-red-500 text-xs">{errors.donationAccount.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-muted-foreground">장소</label>
          <input 
            {...register("location")}
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-muted-foreground">상세 주소</label>
          <input 
            {...register("locationDetail")}
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-muted-foreground">소개글</label>
          <textarea 
            {...register("aboutText")}
            rows={5}
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors resize-none"
          />
        </div>
      </div>

      <button className="px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors">
        저장하기
      </button>
    </form>
  );
}
