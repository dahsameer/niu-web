"use client";

import {
	Battery100Icon,
	HomeIcon,
	MapIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
	{
		name: 'Home',
		href: '/dashboard/<slug>',
		icon: HomeIcon
	},
	{
		name: 'Battery',
		href: '/dashboard/<slug>/battery',
		icon: Battery100Icon,
	},
	{
		name: 'Rides',
		href: '/dashboard/<slug>/rides',
		icon: MapIcon
	},
];

export default function NavLinks() {
	const pathname = usePathname();
	const slug = pathname.split("/")[2];
	links.forEach(x => x.href = x.href.replace("<slug>", slug));
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
							{
								'bg-sky-100 text-blue-600': pathname === link.href,
							},
						)}
					>
						<LinkIcon className="w-6" />
						<p className="hidden md:block">{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
