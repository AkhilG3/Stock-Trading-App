import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { TrendingUp } from "lucide-react";

const PublicNavbar = () => {
  return (
    <nav className="border-b bg-background/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">StockTrader</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
