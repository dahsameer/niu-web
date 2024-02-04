import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Terms of Service'
};

const tos = [
	{
		title: "Disclaimer",
		description: "This application (Niu Web Unofficial) is an independent custom frontend and is not affiliated, endorsed, or officially connected with Niu. Users should be aware that this application is the result of reverse engineering and is not supported or recognized by Niu."
	},
	{
		title: "Use at Your Own Risk",
		description: "Users of Niu Web Unofficial should understand that using this application might violate Niu's terms of service, which could result in penalties such as account suspension or banning from Niu. We hold no responsibility for any such actions taken against users of Niu Web Unofficial."
	},
	{
		title: "No Warranty",
		description: "This application is provided 'as is,' without warranty of any kind. The developers of Niu Web Unofficial make no guarantees regarding app functionality, stability, or safety."
	},
	{
		title: "Intellectual Property Rights",
		description: "Users of Niu Web Unofficial are responsible for ensuring that their use of this application does not infringe on the intellectual property rights of Niu or any other parties."
	},
	{
		title: "Acknowledgment of Risks",
		description: "By using Niu Web Unofficial, users acknowledge and accept all risks associated with its use, including but not limited to the risk of account suspension or banning from Niu."
	}
]

export default function LoginPage() {
	return (
		<main className="flex items-center justify-center md:h-screen">
			<div className="relative mx-auto flex w-full max-w-[600px] flex-col space-y-2.5 p-4 md:-mt-32">
				<h1 className='text-lg text-niu-red'>Terms of Service</h1>
				<ul>
					{tos.map((x,i) => {
						return (
							<li key={"tos-"+i}>
								<div className='text-niu-red-dark'>{x.title}</div>
								<div>{x.description}</div>
							</li>
						);
					})}
				</ul>
			</div>
		</main>
	);
}