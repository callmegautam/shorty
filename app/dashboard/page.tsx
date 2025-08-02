import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import React from "react";

const Dashboard = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 h-screen w-screen">
            <div className="md:w-1/5 flex flex-row gap-4">
                <Input type="text" placeholder="Enter your URL" />
                <Button variant={"outline"}>Shorten</Button>
            </div>
            <div>
                <Card className="p-3 md:p-4 flex flex-row gap-4">
                    <p className="text-muted-foreground">Your shortened URL will appear here.</p>
                    <Copy className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
