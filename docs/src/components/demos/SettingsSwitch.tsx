import { useState } from 'react';
import { Switch } from '@/components/ui/switch';

/**
 * Showcase island for the Nebari Switch — a controlled toggle with live state,
 * demonstrating immediate-effect settings.
 */
export function SettingsSwitch() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="not-content flex items-center gap-3">
      <Switch
        checked={enabled}
        onCheckedChange={setEnabled}
        aria-label="Email notifications"
      />
      <span className="text-sm text-muted-foreground">
        Email notifications are {enabled ? 'on' : 'off'}
      </span>
    </div>
  );
}
