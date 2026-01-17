
import { useFeatureStore } from "../../store/featureStore";
import { exportFeaturesAsGeoJSON } from "../../services/geoJsonExport.service";
const ExportButton = () => {
  const features = useFeatureStore((state) => state.features);
  const handleExport = () => {
    if (!features.length) {
      alert("No features to export");
      return;
    }
    exportFeaturesAsGeoJSON(features);
  };
  return (
    <button
      onClick={handleExport}
      style={{
        position: "absolute",
        bottom: "16px",
        right: "16px",
        zIndex: 1000,
        padding: "10px 14px",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: 500,
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      Export GeoJSON
    </button>
  );
};

export default ExportButton;
