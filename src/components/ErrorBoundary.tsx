// Component must be imported to write any class component
import React, { Component, type ReactNode } from "react";
import errorBoundaryImg from "/imgs/error-boundary-image.webp";
//import errorBoundaryBgImage from "/imgs/error-boundary-bg-image.svg";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  resetKey?: string | number;
}

interface State {
  hasError: boolean;
  // error assigned to the JavaScript Error Object
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to your error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  // Allow reset
  componentDidUpdate(prevProps: Props) {
    if (this.props.resetKey !== prevProps.resetKey) {
      this.setState({ hasError: false, error: undefined });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <section className="fixed inset-0 bg-[url('/imgs/error-boundary-bg-image.svg')] bg-cover bg-center flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center w-3xl p-5 border-2 border-red-600 rounded-sm bg-gray-100 text-neutral-900 text-center text-balance text-2xl font-bold m-4">
              <h1 className="text-7xl md:text-9xl text-gray-600 m-4">Oops!</h1>
              <h2 className="text-3xl md;text-4xl">Something went wrong.</h2>
              <div className="aspect-3/2 p-4 overflow-hidden mb-8">
                <img
                  src={errorBoundaryImg}
                  alt="A retro style robot toy straes with a fixed expression."
                  className="aspect object-cover"
                />
              </div>
              <p className="text-2xl font-medium text-gray-500 text-balance">
                We apologize for the inconvenience. Please use the button below
                to go back.
              </p>
              <div className="flex justify-between mt-4 gap-4">
                <button
                  className="py-2 px-4 bg-blue-700 text-neutral-50 border rounded cursor-pointer"
                  onClick={() => (window.location.href = "/store")}
                >
                  Go to Store
                </button>
              </div>
            </div>
          </section>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
