import {
	MediumLogo,
	YoutubeLogo,
	InstagramLogo,
	TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";
import maang from "/public/maang.png";

export default function (props) {
	return (
		<>
			<div
				aria-hidden="true"
				className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
			>
				<div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
				<div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
			</div>
			<div className="relative w-fit">
				<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 xl:mb-16">
					<div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
						{/* Title */}
						<div className="text-center">
							<p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
								Leetcode problem list
							</p>
							<h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200 my-6">
								TopSWE{" "}
								<span className="text-blue-500">100</span>
							</h1>
							<p className="font-semibold text-gray-800 tracking-wide my-3 dark:text-gray-200">
								Solve these 100 carefully curated problems in
								order. See you at the top!
							</p>
						</div>
						{/* End Title */}
						{/* Avatar Group */}
						<div className="sm:flex sm:justify-center sm:items-center text-center sm:text-start">
							<div className="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
								{/* Avatar Group */}
								<div className="flex justify-center h-8">
									<img
										className="inline-block h-full object-cover"
										src={maang.src}
										alt="Image Description"
									/>
								</div>
								{/* End Avatar Group */}
							</div>
							<div className="border-t sm:border-t-0 sm:border-s border-gray-200 w-32 h-px sm:w-auto sm:h-full mx-auto sm:mx-0" />
							<div className="pt-5 sm:pt-0 sm:ps-5">
								<div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
									Asked at MAANG
								</div>
								<div className="text-sm text-gray-500">
									and other top 50 tech companies
								</div>
							</div>
						</div>
						{/* End Avatar Group */}
					</div>
					<div className="w-fit mx-auto mt-12 flex items-center gap-8">
						<a
							className="text-zinc-900 dark:hover:text-zinc-200"
							href="https://www.tiktok.com/@top.swe"
						>
							<TiktokLogo />
						</a>
						<a
							className="text-zinc-900 dark:hover:text-zinc-200"
							href="https://www.youtube.com/@topswe"
						>
							<YoutubeLogo />
						</a>
						<a
							className="text-zinc-900 dark:hover:text-zinc-200"
							href="https://www.instagram.com/top.swe"
						>
							<InstagramLogo />
						</a>
						<a
							className="text-zinc-900 dark:hover:text-zinc-200"
							href="https://medium.com/@topswebusiness"
						>
							<MediumLogo />
						</a>
					</div>
				</div>
			</div>
			{/* End Hero */}
		</>
	);
}
