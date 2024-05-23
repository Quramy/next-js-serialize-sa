import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="use-state">useState</Link>
      </li>
      <li>
        <Link href="action-state">useActionState</Link>
      </li>
      <li>
        <Link href="action-state/optimistic">
          useActionState and useOptimistic
        </Link>
      </li>
    </ul>
  );
}
