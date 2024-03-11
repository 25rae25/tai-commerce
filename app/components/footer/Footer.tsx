import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from 'react-icons/md'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
	return (
		<div className="bg-slate-700 text-slate-200 text-sm mt-16">
			<Container>
				<div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
					<FooterList>
						<h3 className="text-base font-bold mb-2">Shop Categories</h3>
						<Link href='#'>Phones</Link>
						<Link href='#'>Laptops</Link>
						<Link href='#'>Desktops</Link>
						<Link href='#'>TVs</Link>
					</FooterList>
					<FooterList>
						<h3 className="text-base font-bold mb-2">Customer Service</h3>
						<Link href='#'>Contact Us</Link>
						<Link href='#'>Shopping Policy</Link>
						<Link href='#'>Returns & Exchanges</Link>
						<Link href='#'>FAQs</Link>
					</FooterList>
					<div className="w-full md:w-1/3 mb-6 md:mb-0">
						<h3 className="text-base font-bold mb-2">Customer Service</h3>
						<p className="mb-2">
							At our electronics store, we are dedicated to providing the 
							latest and greatest devices and accessories to our customers.
							 With a wide selection of phones, TVs, laptops, watches, and accessories.
						</p>
						<p>&copy; {new Date().getFullYear()} Samsung-shop. All rights reserved</p>
					</div>
					<FooterList>
						<h3 className="text-base font-bold mb-2">Follow Us</h3>
						<div className="flex gap-2">
							<Link href="#">
								<MdFacebook  size={24}/>
							</Link>
							<Link href="#">
								<FaInstagram  size={24}/>
							</Link>
							<Link href="#">
								<FaXTwitter  size={24}/>
							</Link>
							<Link href="#">
								<FaYoutube  size={24}/>
							</Link>
						</div>
					</FooterList>
				</div>
			</Container>
		</div>
	);
}
 
export default Footer;