import { useRouteError, Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import Logo from '../components/Logo';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(88,101,242,0.12) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-10 text-center max-w-lg">
        <div className="flex justify-center mb-8">
          <Logo size="large" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-text-primary mb-3">
          Page Not Found
        </h2>

        <p className="text-text-secondary leading-relaxed mb-8">
          {error?.statusText || error?.message || "The page you are looking for might have been moved or doesn't exist."}
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button to="/" size="md">
            Back to Home
          </Button>
          <Button to="/contact" variant="secondary" size="md">
            Contact Support
          </Button>
        </div>
      </Container>
    </div>
  );
}
