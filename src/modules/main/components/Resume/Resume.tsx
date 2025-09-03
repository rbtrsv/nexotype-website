import Image from 'next/image';
import logoPrimeKapital from '@/modules/main/components/Resume/images/prime-kapital.png';
import logoFinpy from '@/modules/main/components/Resume/images/finpy.svg';
import logoV7 from '@/modules/main/components/Resume/images/v7-capital.png';
import logoDeloitte from '@/modules/main/components/Resume/images/Deloitte.png';
import logoKPMG from '@/modules/main/components/Resume/images/KPMG.png';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

type Role = {
  company: string;
  title: string;
  logo: StaticImageData;
  start: string | { label: string; dateTime: number };
  end: string | { label: string; dateTime: number };
};

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Button: React.FC<{ href?: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link
      href={href ?? ''}
      className="inline-flex w-full items-center justify-center rounded-md mt-5 py-2 px-3 text-sm bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
    >
      {children}
    </Link>
  );
};

// Type guard to check if the start or end is an object with label and dateTime properties
const isDateObject = (
  date: string | { label: string; dateTime: number }
): date is { label: string; dateTime: number } => {
  return (date as { label: string; dateTime: number }).label !== undefined;
};

const Resume: React.FC = () => {
  const resume: Role[] = [
    {
      company: 'V7 Capital',
      title: 'Investment Manager',
      logo: logoV7,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Finpy',
      title: 'General Manager',
      logo: logoFinpy,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Deloitte',
      title: 'Analytics Consultant',
      logo: logoDeloitte,
      start: '2021',
      end: '2022',
    },
    {
      company: 'Prime Kapital',
      title: 'Investment Analyst',
      logo: logoPrimeKapital,
      start: '2020',
      end: '2021',
    },
    {
      company: 'KPMG',
      title: 'M&A Consultant',
      logo: logoKPMG,
      start: '2019',
      end: '2020',
    },
  ];

  return (
    <div className="p-6 mx-1 max-w-sm mt-20 rounded-2xl border border-zinc-100 bg-white text-black dark:border-zinc-700/40 dark:bg-black dark:text-white">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${
                  isDateObject(role.start) ? role.start.label : role.start
                } until ${
                  isDateObject(role.end) ? role.end.label : role.end
                }`}
              >
                <time dateTime={isDateObject(role.start) ? role.start.dateTime.toString() : role.start}>
                  {isDateObject(role.start) ? role.start.label : role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={isDateObject(role.end) ? role.end.dateTime.toString() : role.end}>
                  {isDateObject(role.end) ? role.end.label : role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#">
        Download CV
        <ArrowDownIcon className="h-4 w-4 ml-2 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
};

export default Resume;
