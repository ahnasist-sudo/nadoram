import { useState } from "react";
import { ScheduleItem } from "../../types";
import { Plus, Trash2, GripVertical, Upload, X } from "lucide-react";
import { toast } from "sonner";

interface ScheduleManagerProps {
  initialItems: ScheduleItem[];
  onSave: (items: ScheduleItem[]) => void;
}

export default function ScheduleManager({ initialItems, onSave }: ScheduleManagerProps) {
  const [items, setItems] = useState<ScheduleItem[]>(initialItems);

  const addItem = () => {
    const newItem: ScheduleItem = {
      id: Date.now().toString(),
      time: "00:00",
      title: "새로운 일정",
      description: "",
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
    toast.error("일정이 삭제되었습니다.");
  };

  const updateItem = (id: string, field: keyof ScheduleItem, value: string) => {
    const newItems = items.map(item => item.id === id ? { ...item, [field]: value } : item);
    setItems(newItems);
  };

  const handleImageUpload = (id: string, file: File) => {
    if (file.size > 1024 * 1024) { // 1MB limit for localStorage
      toast.error("이미지 크기는 1MB 이하여야 합니다.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      updateItem(id, "image", base64String);
      toast.success("이미지가 업로드되었습니다.");
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    onSave(items);
    toast.success("일정이 저장되었습니다.");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold">일정 목록</h3>
        <button 
          onClick={addItem}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus size={18} />
          일정 추가
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={item.id}
            className="p-6 bg-muted/20 rounded-2xl border border-white/5 flex gap-6 items-start group"
          >
            <div className="pt-3 text-muted-foreground cursor-grab">
              <GripVertical size={20} />
            </div>

            <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">시간</label>
                <input 
                  type="text"
                  value={item.time}
                  onChange={(e) => updateItem(item.id, "time", e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 focus:border-primary outline-none text-sm"
                />
              </div>
              <div className="md:col-span-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">제목</label>
                <input 
                  type="text"
                  value={item.title}
                  onChange={(e) => updateItem(item.id, "title", e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 focus:border-primary outline-none text-sm"
                />
              </div>
              <div className="md:col-span-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">설명</label>
                <textarea 
                  value={item.description}
                  onChange={(e) => updateItem(item.id, "description", e.target.value)}
                  rows={2}
                  className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 focus:border-primary outline-none text-sm resize-none"
                />
              </div>
              <div className="md:col-span-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">이미지</label>
                <div className="flex gap-4 items-start">
                  <div className="flex-grow space-y-2">
                    <input 
                      type="text"
                      value={item.image || ""}
                      onChange={(e) => updateItem(item.id, "image", e.target.value)}
                      placeholder="이미지 URL 또는 직접 업로드"
                      className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 focus:border-primary outline-none text-sm"
                    />
                    <div className="flex items-center gap-2">
                      <label className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-xs font-medium">
                        <Upload size={14} />
                        이미지 업로드
                        <input 
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleImageUpload(item.id, file);
                          }}
                        />
                      </label>
                      {item.image && (
                        <button 
                          onClick={() => updateItem(item.id, "image", "")}
                          className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors text-xs font-medium"
                        >
                          <X size={14} />
                          이미지 제거
                        </button>
                      )}
                    </div>
                  </div>
                  {item.image && (
                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button 
              onClick={() => removeItem(item.id)}
              className="pt-3 text-muted-foreground hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-white/10">
        <button 
          onClick={handleSave}
          className="px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}
