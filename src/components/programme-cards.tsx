import Link from 'next/link';
import { programmes } from '@/content/programmes';
import { programmePath, type ProgrammeId } from '@/content/programme-routes';

export function ProgrammeCards({
  ids,
  headingLevel = 3,
}: {
  ids: readonly ProgrammeId[];
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <div className="programme-link-grid">
      {ids.map((id) => {
        const programme = programmes.find((p) => p.id === id)!;
        return (
          <article key={id}>
            <span>{programme.level}</span>
            <Heading>
              <Link href={programmePath(id)}>{programme.title}</Link>
            </Heading>
            <p>{programme.description}</p>
            <Link className="text-link" href={programmePath(id)}>
              View programme
            </Link>
          </article>
        );
      })}
    </div>
  );
}
