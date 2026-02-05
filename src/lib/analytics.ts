// Google Analytics 4 event tracking utility

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

// Track CTA clicks
export const trackCtaClick = (ctaId: string, ctaLabel: string) => {
  trackEvent("cta_click", {
    cta_id: ctaId,
    cta_label: ctaLabel,
  });
};

// Track page view event
export const trackPageView = (pageName: string) => {
  trackEvent("page_view", {
    page_name: pageName,
  });
};

// Extend window type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: Record<string, any>[];
  }
}
