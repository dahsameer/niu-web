import NiuLogo from '@/app/ui/niu-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Niu Web (Unofficial)',
	description: 'unofficial niu web app'
};

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col p-6">
			<div className="flex h-20 shrink-0 items-end rounded-lg bg-niu-red p-4 md:h-52">
				<NiuLogo />
			</div>
			<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
				<div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
					<div
						className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
					/>
					<p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
						<strong>Welcome to Niu Web.</strong> This is an opensource free mobile app alternative for{' '}
						<a href="https://www.niu.com/en" className="text-niu-red">
							Niu
						</a>
						{' '}Vehicles
					</p>
					<Link
						href="/login"
						className="flex items-center gap-5 self-start rounded-lg bg-niu-red px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-niu-red-dark md:text-base"
					>
						<span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
					</Link>
				</div>
				<div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
					{/* Add Hero Images Here */}
					<Image
						src="/hero-desktop.png"
						width={1000}
						height={760}
						className="hidden md:block"
						alt="Screenshots of the dashboard project showing desktop version"
					/>
					<Image
						src="/hero-mobile.png"
						width={620}
						height={560}
						className="block md:hidden"
						alt="Screenshots of the dashboard project showing desktop version"
					/>
				</div>
			</div>
		</main>
	);
}
