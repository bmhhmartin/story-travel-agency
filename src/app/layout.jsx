import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StoryblokProvider from "@/components/StoryblokProvider";
import "./globals.css";


export default function RootLayout({ children }) {
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