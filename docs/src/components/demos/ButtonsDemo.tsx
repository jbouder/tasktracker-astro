import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Showcase island for the Nebari Button — variants, sizes, the loading state,
 * and `render`-prop polymorphism (a button rendered as a link).
 */
export function ButtonsDemo() {
  return (
    <div className="not-content flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button size="sm">
          <Plus />
          New task
        </Button>
        <Button>
          <Plus />
          New task
        </Button>
        <Button size="lg">
          <Plus />
          New task
        </Button>
        <Button size="icon" aria-label="Delete" variant="outline">
          <Trash2 />
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button loading loadingText="Saving…">
          Save
        </Button>
        <Button variant="outline" render={<a href="/getting-started/" />}>
          Docs link
        </Button>
      </div>
    </div>
  );
}
