import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    let title = "Algo salió mal";
    let message = "Ha ocurrido un error inesperado.";
    let status = 500;

    if (isRouteErrorResponse(error)) {
        status = error.status;
        message = error.statusText || message;
    } else if (error instanceof Error) {
        message = error.message;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-dark-grey text-white text-center p-8">
            <h1 className="text-7xl font-bold mb-4">{status}</h1>
            <h2 className="text-3xl mb-4">{title}</h2>
            <p className="text-xl text-light-grey mb-8">{message}</p>

            <Link
                to="/"
                className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:opacity-80 transition"
            >
                Volver al inicio
            </Link>
        </div>
    );
};

export default ErrorPage;