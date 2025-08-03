"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy, Link2, ToolCase } from "lucide-react";
import { useState } from "react";

const Home = () => {
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
        <div className="h-screen w-screen relative bg-black overflow-hidden">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
                }}
            />

            <div className="flex flex-col items-center justify-center gap-4 z-10 h-full relative px-4">
                <Badge variant={"secondary"} className="rounded-3xl">
                    <ToolCase className="h-5 w-5" />
                    Under Development
                </Badge>
                <h1 className="text-5xl text-white">Shorten URLs</h1>
                <p className="text-lg w-full md:w-1/3 text-center text-white">
                    Create short, memorable links in seconds. Get detailed analytics, custom domains, and
                    powerful link management tools.
                </p>

                <div className="w-full md:w-[35%] flex flex-row gap-4">
                    <Input
                        type="text"
                        placeholder="Enter your URL"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <Button variant="outline" onClick={handleOnShorten}>
                        <Link2 />
                        Shorten URL
                    </Button>
                </div>

                {shortenedUrl && (
                    <div className="flex flex-row gap-4 justify-center items-center">
                        <Card className="p-3 md:p-4 flex flex-row gap-4">
                            <p className="text-muted-foreground">{shortenedUrl}</p>
                            <Copy
                                className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer"
                                onClick={handleOnCopy}
                            />
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
