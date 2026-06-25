'use client';
import { useEffect } from 'react';

export function VisitorTracker() {
  useEffect(() => {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: window.location.pathname }),
    }).catch(() => {});
  }, []);
  return null;
}
