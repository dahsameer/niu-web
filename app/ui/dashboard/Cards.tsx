import { lusitana } from '@/app/ui/fonts';

type IconType = React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
	title?: string | undefined;
	titleId?: string | undefined;
} & React.RefAttributes<SVGSVGElement>>;

export function Card({
	title,
	value,
	type,
}: {
	title: string;
	value: number | string;
	type: IconType;
}) {
	const Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
		title?: string | undefined;
		titleId?: string | undefined;
	} & React.RefAttributes<SVGSVGElement>>
		= type;

	return (
		<div className="rounded-xl bg-gray-50 p-2 shadow-sm">
			<div className="flex p-4">
				{Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
				<h3 className="ml-2 text-sm font-medium">{title}</h3>
			</div>
			<p className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}>
				{value}
			</p>
		</div>
	);
}
