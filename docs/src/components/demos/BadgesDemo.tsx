import { Badge } from '@/components/ui/badge';

/** Showcase island for the Nebari Badge — every variant as a status chip. */
export function BadgesDemo() {
  return (
    <div className="not-content flex flex-wrap items-center gap-2">
      <Badge>Done</Badge>
      <Badge variant="secondary">In progress</Badge>
      <Badge variant="outline">Backlog</Badge>
      <Badge variant="ghost">Draft</Badge>
      <Badge variant="destructive">Blocked</Badge>
    </div>
  );
}
