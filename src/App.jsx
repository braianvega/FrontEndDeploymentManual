import './App.css'
import "/DesignSystemLib_v1.0.0/css/axaIconFont.css";
import MidleComponent from './MidleComponent';
import HeaderComponent from "./HeaderComponent";
import "/DesignSystemLib_v1.0.0/css/axaDesignSystemLib-grid.rtl.css";
import "/DesignSystemLib_v1.0.0/css/axaDesignSystemLib.css";

export default function App() {
  return (
    <div>
      <HeaderComponent/>
      <MidleComponent/>
    </div>
  )
}
