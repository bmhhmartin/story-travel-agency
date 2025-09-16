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
					{children}
				</body>
			</html>
		</StoryblokProvider>
	);
}