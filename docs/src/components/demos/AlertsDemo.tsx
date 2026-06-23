import { CheckCircle2, Info, TriangleAlert } from 'lucide-react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert';

/**
 * Showcase island for the Nebari Alert — the colored severity variants, each
 * composed with a leading icon, title, and description.
 */
export function AlertsDemo() {
  return (
    <div className="not-content flex flex-col gap-3">
      <Alert variant="info">
        <Info />
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>
          Tasks sync automatically every few seconds.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <CheckCircle2 />
        <AlertTitle>Task created</AlertTitle>
        <AlertDescription>“Write the docs” was added to your board.</AlertDescription>
      </Alert>

      <Alert variant="warning">
        <TriangleAlert />
        <AlertTitle>Due soon</AlertTitle>
        <AlertDescription>Three tasks are due in the next 24 hours.</AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <TriangleAlert />
        <AlertTitle>Couldn’t save</AlertTitle>
        <AlertDescription>
          We lost connection to the server. Retrying…
        </AlertDescription>
      </Alert>
    </div>
  );
}
