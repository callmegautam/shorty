"use client";

import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 h-screen w-screen">
            <h1 className="text-4xl font-bold">Shorty</h1>
            <p className="text-lg">A simple and efficient URL shortener.</p>
            <div className="flex gap-4">
                <Link href={"/dashboard"}>
                    <Button variant={"default"}>Get Started</Button>
                </Link>
                <Button
                    variant={"outline"}
                    onClick={() => window.open("https://github.com/callmegautam/shorty", "_blank")}
                >
                    Github
                </Button>
            </div>
        </div>
    );
};

export default Home;
