import { useEffect, useState } from "react";

function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-logo">L'ÉCLAT</div>

      <div className="loading-line">
        <span />
      </div>
    </div>
  );
}

export default LoadingScreen;