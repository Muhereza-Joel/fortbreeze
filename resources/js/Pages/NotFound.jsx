import PublicLayout from "@/Layouts/PublicLayout";
import { Head, Link } from "@inertiajs/react";

export default function NotFound() {
    return (
        <PublicLayout title="Page Not Found">
            <Head title="404 - Page Not Found" />
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                    Sorry, the page you’re looking for could not be found.
                </p>
                <Link
                    href={route("home")}
                    className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </PublicLayout>
    );
}
