import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="container mx-auto pt-20 pb-3 flex flex-row text-center">
        <div class="text-center">
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/" className="btn btn-secondary bg-red-600 m-4 text-cyan-50">
            Return Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
