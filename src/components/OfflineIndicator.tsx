import React, { useEffect, useState } from "react";
import { WifiOff, AlertTriangle, X } from "lucide-react";
import { useServiceWorker } from "@/hooks/useServiceWorker";

interface OfflineIndicatorProps {
  className?: string;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({
  className = "",
}) => {
  const { isOffline } = useServiceWorker();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (isOffline) {
      setShow(true);
      // Hide after 8 seconds
      const timer = setTimeout(() => {
        setShow(false);
      }, 8000);

      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [isOffline]); // eslint-disable-line consistent-return

  const handleDismiss = (): void => {
    setShow(false);
  };

  if (!isOffline || !show) return null;

  return (
    <>
      {/* Top banner indicator */}
      <div className={`offline-indicator ${show ? "show" : ""} ${className}`}>
        <div className="flex items-center justify-center space-x-2">
          <WifiOff className="w-5 h-5" />
          <span className="font-medium">
            You're offline. Some features may be limited.
          </span>
        </div>
      </div>

      {/* Bottom-right toast notification */}
      <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-full duration-300">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg shadow-lg p-4 max-w-sm">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-extrabold text-yellow-800">
                Offline Mode
              </h4>
              <p className="text-sm font-medium text-yellow-700 mt-1">
                You're currently offline. Data may be limited to cached content.
              </p>
            </div>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-yellow-600 hover:text-yellow-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
