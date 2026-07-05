import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import apiClient from "../api/client";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Skeleton } from "../components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import EmptyState from "../components/EmptyState";

const fetchUser = async () => {
  const { data } = await apiClient.get("/users/me");
  return data.user;
};

export default function Portfolio() {
  const { data: user, isLoading, isError, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  const portfolio = user?.portfolio || [];
  const totalValue = portfolio.reduce((acc, item) => acc + (item.count * item.avgPrice), 0);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
          <p className="text-muted-foreground">
            Total portfolio value
          </p>
        </div>
        <div className="text-3xl font-bold">
          ${totalValue.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          )}
          {!isLoading && !isError && portfolio.length === 0 && (
            <EmptyState type="portfolio" message="No stocks in portfolio" description="Start buying stocks to build your portfolio" />
          )}
          {!isLoading && !isError && portfolio.length > 0 && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Avg Buy Price</TableHead>
                  <TableHead className="text-right">Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {portfolio.map((item) => (
                  <TableRow key={item.symbol}>
                    <TableCell className="font-medium">
                      <Link to={`/stocks/${item.symbol}`} className="hover:text-primary">
                        {item.symbol}
                      </Link>
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.count}</TableCell>
                    <TableCell>${item.avgPrice.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      ${(item.count * item.avgPrice).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
