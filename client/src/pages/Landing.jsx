import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  TrendingUp,
  Zap,
  Shield,
  BarChart3,
  DollarSign,
  Globe,
  CheckCircle2,
  ArrowRight,
  Clock,
  Activity,
} from "lucide-react";

const Landing = () => {
  const stats = [
    { label: "Active Users", value: "100K+", suffix: "" },
    { label: "Daily Trades", value: "1M+", suffix: "" },
    { label: "Assets Traded", value: "$5B+", suffix: "" },
    { label: "Avg. Response", value: "<100", suffix: "ms" },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our high-performance infrastructure.",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your funds and data are protected with industry-leading encryption.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Make informed decisions with real-time charts and market insights.",
    },
    {
      icon: DollarSign,
      title: "Low Fees",
      description: "Competitive pricing with no hidden charges or surprises.",
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Access stocks from major exchanges around the world.",
    },
    {
      icon: Activity,
      title: "24/7 Support",
      description: "Our support team is always ready to help you succeed.",
    },
  ];

  const whyChooseUs = [
    "Start with $100,000 virtual money to practice",
    "Real-time stock data from Finnhub API",
    "Track your portfolio performance",
    "No minimum deposit required",
    "Easy deposits and withdrawals",
    "Advanced order types",
  ];

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <CheckCircle2 className="h-4 w-4" />
                Trusted by 100K+ traders worldwide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Trade Stocks. <br />
                <span className="text-primary">Build Wealth.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                The modern trading platform that makes investing simple, accessible, and rewarding for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <Card className="relative border-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Portfolio Overview</span>
                    <span className="text-green-500 flex items-center gap-1 text-sm font-normal">
                      <TrendingUp className="h-4 w-4" />
                      +12.5%
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold">$125,000</div>
                  <div className="h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-lg" />
                  <div className="grid grid-cols-3 gap-4">
                    {["AAPL", "TSLA", "GOOGL"].map((stock) => (
                      <div key={stock} className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-semibold">{stock}</div>
                        <div className="text-xs text-green-500">+2.4%</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                  <span className="text-lg text-muted-foreground ml-1">{stat.suffix}</span>
                </div>
                <div className="text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose StockTrader</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to trade smarter and build your portfolio with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Trading Journey Today
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of traders who have transformed their financial future with StockTrader.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">5-Minute Setup</div>
                      <div className="text-sm text-muted-foreground">Get started in minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <div className="font-semibold">$100K Practice Money</div>
                      <div className="text-sm text-muted-foreground">Perfect for beginners</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join StockTrader today and take control of your financial future. Sign up for free and start building your portfolio.
            </p>
            <Link to="/register">
              <Button size="lg">
                Create Free Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
