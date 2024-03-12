import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SAMSUNG",
	description: "삼성 쇼핑몰입니다",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{/* {`$[inter.className text-slate-700`]} -> 이런식으로 글자색상 변경도 가능하다 */}
				<div className="flex flex-col min-h-screen">
					<Navbar />
						<main className="flex-grow">{children}</main>
					<Footer />
				</div>
				</body>
		</html>
	);
}
