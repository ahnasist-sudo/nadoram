import { useState, useEffect } from "react";
import { SiteSettings, ScheduleItem } from "../types";
import { MOCK_SITE_SETTINGS, MOCK_SCHEDULE } from "../constants/mockData";

const SETTINGS_KEY = "aejung_festival_settings";
const SCHEDULE_KEY = "aejung_festival_schedule";

export function useAppData() {
  const [settings, setSettings] = useState<SiteSettings>(MOCK_SITE_SETTINGS);
  const [schedule, setSchedule] = useState<ScheduleItem[]>(MOCK_SCHEDULE);

  const updateSettings = (newSettings: SiteSettings) => {
    setSettings(newSettings);
    // localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
  };

  const updateSchedule = (newSchedule: ScheduleItem[]) => {
    setSchedule(newSchedule);
    // localStorage.setItem(SCHEDULE_KEY, JSON.stringify(newSchedule));
  };

  return {
    settings,
    schedule,
    updateSettings,
    updateSchedule,
  };
}
