import Link from "next/link";
import Image from "next/image";
import Container from "../Container";


const NavBar = () => {
	return (
		<div className="top-0 w-full bg-slate-200 z-30 shadow-sm">
			<div className="py-4 border-b-[1px]">
				<Container>
					<div className="flex items-center justify-between gap-3 md-gap-0">
						{/* <Link href="/" className="font-[700] text-2xl">SAMSUNG</Link> */}
						<Link href='/'>
							<Image src='/logo-gnb.svg' alt='삼성 로고' width={100} height={100} />
						</Link>
						<div className="hidden md:block">Search</div>
						<div className="flex items-center gap-8 md:gap-12">
							<div>UserMenu</div>
							<div>UserMenu</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
 
export default NavBar;