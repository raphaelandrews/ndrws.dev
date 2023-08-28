'use client';

import * as React from "react"
import { useTheme } from 'next-themes';
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
        <Sun
          className="rotate-0 scale-100 text-primary transition-all dark:-rotate-90 dark:scale-0"
          width={16}
          height={16}
        />
        <Moon
          className="absolute rotate-90 scale-0 text-primaryDark transition-all dark:rotate-0 dark:scale-100"
          width={16}
          height={16}
        />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}