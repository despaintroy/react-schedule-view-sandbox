import "./styles.css";
import { data } from "./data";
import {
  createTheme,
  ScheduleTheme,
  ScheduleView,
  ThemeName
} from "react-schedule-view";

export default function App() {
  return (
    <div className="App">
      <ScheduleView daySchedules={data} />
    </div>
  );
}
