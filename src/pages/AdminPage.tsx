import { useState } from "react";
import { motion } from "motion/react";
import { Lock, LayoutDashboard, Settings, ListTodo, LogOut } from "lucide-react";
import SettingsForm from "../components/Admin/SettingsForm";
import ScheduleManager from "../components/Admin/ScheduleManager";
import { useAppData } from "../hooks/useAppData";

type AdminTab = "dashboard" | "settings" | "schedule";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const { settings, schedule, updateSettings, updateSchedule } = useAppData();

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-8 bg-muted/30 rounded-3xl border border-white/10"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="text-primary w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold">관리자 로그인</h1>
            <p className="text-muted-foreground text-sm mt-2">나도람 축제 관리 시스템</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">ID</label>
              <input 
                type="text" 
                defaultValue="admin"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
                placeholder="admin"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Password</label>
              <input 
                type="password" 
                defaultValue="admin123"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full py-4 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 transition-colors">
              로그인
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 p-6 hidden md:block">
        <div className="mb-12">
          <h2 className="text-xl font-black text-primary tracking-tighter">ADMIN PANEL</h2>
        </div>

        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 font-bold rounded-xl transition-all ${
              activeTab === "dashboard" ? "bg-primary text-black" : "text-muted-foreground hover:text-white"
            }`}
          >
            <LayoutDashboard size={20} />
            대시보드
          </button>
          <button 
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center gap-3 px-4 py-3 font-bold rounded-xl transition-all ${
              activeTab === "settings" ? "bg-primary text-black" : "text-muted-foreground hover:text-white"
            }`}
          >
            <Settings size={20} />
            사이트 설정
          </button>
          <button 
            onClick={() => setActiveTab("schedule")}
            className={`w-full flex items-center gap-3 px-4 py-3 font-bold rounded-xl transition-all ${
              activeTab === "schedule" ? "bg-primary text-black" : "text-muted-foreground hover:text-white"
            }`}
          >
            <ListTodo size={20} />
            일정 관리
          </button>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
          >
            <LogOut size={20} />
            로그아웃
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto max-h-screen">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold">
            {activeTab === "dashboard" && "대시보드"}
            {activeTab === "settings" && "사이트 설정"}
            {activeTab === "schedule" && "일정 관리"}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">관리자님, 환영합니다</span>
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30" />
          </div>
        </header>

        {activeTab === "dashboard" && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-muted/20 rounded-3xl border border-white/5">
                <h4 className="text-muted-foreground text-sm font-bold uppercase tracking-widest mb-2">방문자 수</h4>
                <p className="text-4xl font-bold">1,234</p>
              </div>
              <div className="p-8 bg-muted/20 rounded-3xl border border-white/5">
                <h4 className="text-muted-foreground text-sm font-bold uppercase tracking-widest mb-2">공유 횟수</h4>
                <p className="text-4xl font-bold">567</p>
              </div>
              <div className="p-8 bg-muted/20 rounded-3xl border border-white/5">
                <h4 className="text-muted-foreground text-sm font-bold uppercase tracking-widest mb-2">일정 개수</h4>
                <p className="text-4xl font-bold">{schedule.length}</p>
              </div>
            </div>

            <div className="p-8 bg-muted/10 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-6">최근 활동</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <p className="text-sm">축제 데이터가 로컬에 저장되었습니다.</p>
                    </div>
                    <span className="text-xs text-muted-foreground">방금 전</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <SettingsForm initialData={settings} onSave={updateSettings} />
        )}

        {activeTab === "schedule" && (
          <ScheduleManager initialItems={schedule} onSave={updateSchedule} />
        )}
      </main>
    </div>
  );
}
