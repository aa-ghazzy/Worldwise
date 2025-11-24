import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import styles from "./Map.module.css";

function Map() {
  const params = useParams();
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  console.log(params, lat, lng);
  return (
    <div className={styles.map} onClick={() => navigate("form")}>
      Map
    </div>
  );
}

export default Map;
