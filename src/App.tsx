import MapContainer from "./components/Map/MapContainer";
import DrawingToolbar from "./components/Toolbar/DrawingToolbar";
import ExportButton from "./components/Toolbar/ExportButton";
import ErrorToast from "./components/UI/ErrorToast";

import { useFeatureStore } from "./store/featureStore";

const App = () => {
  const error = useFeatureStore((state) => state.error);
  const clearError = useFeatureStore((state) => state.clearError);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      
      <DrawingToolbar />
      <MapContainer />
      <ExportButton />
      <ErrorToast
        message={error ?? ""}
        isVisible={Boolean(error)}
        onClose={clearError}
      />
    </div>
  );
};

export default App;
