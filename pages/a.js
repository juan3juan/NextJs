import Link from "next/link";

export default () => {
  return (
    <div>
      <h2>a</h2>
      <Link prefetch href="/examples/ctest">
        <a href="/examples/ctest">ctest</a>
      </Link>
    </div>
  );
};
