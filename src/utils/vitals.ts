import { onCLS, onLCP, onFCP, onTTFB, onINP, type Metric } from "web-vitals";

const logVitals = (metric: Metric): void => {
  console.log(`[Web Vital] ${metric.name}:`, {
    value: Math.round(metric.value),
    id: metric.id,
    rating: metric.rating, // 'good', 'needs-improvement', or 'poor'
  });
};

export const reportWebVitals = (): void => {
  onCLS(logVitals);
  onLCP(logVitals);
  onFCP(logVitals);
  onTTFB(logVitals);
  onINP(logVitals);
};
