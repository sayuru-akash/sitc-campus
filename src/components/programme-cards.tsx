import Link from 'next/link';
import { programmes } from '@/content/programmes';
import { programmePath, type ProgrammeId } from '@/content/programme-routes';

export function ProgrammeCards({ ids }: { ids: readonly ProgrammeId[] }) {
  return (
    <div className="programme-link-grid">
      {ids.map((id) => {
        const programme = programmes.find((p) => p.id === id)!;
        return (
          <article key={id}>
            <span>{programme.level}</span>
            <h3>
              <Link href={programmePath(id)}>{programme.title}</Link>
            </h3>
            <p>{programme.description}</p>
            <Link className="text-link" href={programmePath(id)}>
              View programme <span aria-hidden="true">↗</span>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
