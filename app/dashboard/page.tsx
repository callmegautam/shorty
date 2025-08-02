"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import React, { useState } from "react";

const Dashboard = () => {
    const [url, setUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("Your shortened URL will appear here.");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleOnShorten = () => {
        setIsLoading(true);
        setError("");
        setShortenedUrl("");
        setIsLoading(false);
        setShortenedUrl("https://shorty.dev/short/https://github.com/callmegautam/shorty");
        setError("");
        setUrl("");
    };

    const handleOnCopy = () => {
        navigator.clipboard.writeText(shortenedUrl);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4 h-screen w-screen">
            <div className="md:w-1/5 flex flex-row gap-4">
                <Input
                    type="text"
                    placeholder="Enter your URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <Button variant={"outline"} onClick={handleOnShorten}>
                    Shorten
                </Button>
            </div>
            <div>
                <Card className="p-3 md:p-4 flex flex-row gap-4">
                    <p className="text-muted-foreground">{shortenedUrl}</p>
                    <Copy
                        className="h-5 w-5 text-muted-foreground hover:text-foreground"
                        onClick={handleOnCopy}
                    />
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
