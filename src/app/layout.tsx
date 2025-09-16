import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StoryblokProvider from "@/components/StoryblokProvider";
import { ReactNode } from "react";
import "./globals.css";

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<StoryblokProvider>
			<html lang="en">
				<body>
                    <Header></Header>
					{children}
                    <Footer></Footer>
				</body>
			</html>
		</StoryblokProvider>
	);
}