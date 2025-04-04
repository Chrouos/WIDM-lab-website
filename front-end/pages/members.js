﻿import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import siteMetadata from '@/data/siteMetadata';
import { PageSEO } from '@/components/SEO';
import { defaultHttp } from 'utils/http';
import { processDataRoutes } from 'routes/api';

function CharmPerson(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
        <circle cx={8} cy={6} r={3.25}></circle>
        <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"></path>
      </g>
    </svg>
  );
}

export const Members = ({ members, timeoutError }) => {
  const [filter, setFilter] = useState('current');
  const router = useRouter();

  useEffect(() => {
    if (timeoutError) {
      router.push('/timeout'); // 超時時跳轉到 /timeout 頁面
    }
  }, [timeoutError, router]);

  if (timeoutError) {
    return null; // 超時時不渲染內容
  }

  // Group members by their position and filter based on the selected filter
  const groupByPosition = members.reduce((acc, member) => {
    const isGraduated = member.graduate_year !== null;
    if ((filter === 'current' && !isGraduated) || (filter === 'graduated' && isGraduated)) {
      if (!acc[member.position]) {
        acc[member.position] = [];
      }
      acc[member.position].push(member);
    }
    return acc;
  }, {});

  return (
    <>
      <PageSEO title={`Members - ${siteMetadata.author}`} description="What I use" />
      <div className="mx-auto max-w-4xl divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex items-center justify-between border-b border-gray-300 space-y-2 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 pb-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Members
          </h1>
          <div className="flex mb-0 items-end space-x-6">
            <button
              onClick={() => setFilter('current')}
              className={`text-gray-600 hover:text-gray-900 dark:text-gray-100 ${filter === 'current' ? 'font-bold' : ''}`}
            >
              在學
            </button>
            <button
              onClick={() => setFilter('graduated')}
              className={`text-gray-600 hover:text-gray-900 dark:text-gray-100 ${filter === 'graduated' ? 'font-bold' : ''}`}
            >
              畢業
            </button>
          </div>
        </div>

        <div className="container py-12">
          {Object.keys(groupByPosition).length === 0 && <h2 className="m-2 text-lg">No Member found.</h2>}
          {Object.keys(groupByPosition).map((position, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{position}</h2>
              <div className="flex flex-row flex-wrap">
                {groupByPosition[position].map((member, idx) => (
                  <div
                    key={idx}
                    className="group mb-4 w-full cursor-pointer rounded-xl p-6 backdrop-filter transition duration-100 hover:scale-[1.02] hover:bg-gray-300 hover:bg-opacity-40 dark:hover:bg-gray-500 dark:hover:bg-opacity-40 md:w-1/2"
                  >
                    <div className="flex items-center justify-start">
                      <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50 ">
                        {member.image_existed ? (
                          <img
                            src={`${process.env.NEXT_PUBLIC_API_URL || ""}/member/${member.id}/member-image`}
                            alt="Member Icon"
                            className="h-28 w-28 rounded-md"
                          />
                        ) : (
                          <CharmPerson style={{ color: 'black', height: '7rem', width: '7rem' }} />
                        )}
                      </div>
                      <div className="flex flex-col p-3">
                        <p className="text-2xl truncate font-bold leading-5 text-gray-800 dark:text-white sm:text-base lg:text-2xl">
                          {member.name}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 sm:text-base lg:text-base">
                          {member.name_en}
                        </p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                          {member.intro}
                        </p>
                        {filter === 'graduated' && member.graduate_year && (
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Graduate Year: {member.graduate_year}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// 使用 getStaticProps 在構建時獲取資料
export async function getStaticProps() {
  try {
    const response = await defaultHttp.get(processDataRoutes.member, { timeout: 10000 });
    const members = response.data.response;

    return {
      props: {
        members,
        timeoutError: false,
      },
    };
  } catch (error) {
    const isTimeout = error.code === 'ECONNABORTED';

    return {
      props: {
        members: [],
        timeoutError: isTimeout,
      },
      revalidate: 60,
    };
  }
}

export default Members;
