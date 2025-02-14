import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SkillTestCard from "@/components/SkillTestCard";
import Statistics from "@/components/Statistics";
import ProgressBar from "@/components/ProgressBar";
import SyllabusAnalysis from "@/components/SyllabusAnalysis";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Whatbytes",
  description: "Whatbytes assingment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Header/>
        {children}
        
       
      </body>
    </html>
  );
}
