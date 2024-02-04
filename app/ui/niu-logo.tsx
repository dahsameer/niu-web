import { BoltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function NiuLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <BoltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Niu</p>
    </div>
  );
}
