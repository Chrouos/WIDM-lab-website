import { useEffect } from 'react';
import { useRouter } from 'next/router';
import siteMetadata from '@/data/siteMetadata';
import ProjectType from '@/components/ProjectType'; 
import { PageSEO } from '@/components/SEO';
import { defaultHttp } from 'utils/http';
import { processDataRoutes } from 'routes/api';

const Projects = ({ projectsDatas, timeoutError }) => {
  const router = useRouter();

  useEffect(() => {
    if (timeoutError) {
      router.push('/timeout'); // 發生 timeout 時跳轉到 /timeout
    }
  }, [timeoutError, router]);

  if (timeoutError) {
    return null; // 發生超時時，不渲染內容
  }

  // 按類別
  const groupedProjects = {};

  projectsDatas.forEach((project) => {
    const categories = Array.isArray(project.types) && project.types.length > 0 ? project.types : ['other'];
    categories.forEach((type) => {
      if (!groupedProjects[type]) {
        groupedProjects[type] = [];
      }
      groupedProjects[type].push(project);
    });
  });
  
  // 對每個類別中的專案進行排序
  Object.keys(groupedProjects).forEach(type => {
    groupedProjects[type].sort((a, b) => {
      const seqA = a.sequence || 0;
      const seqB = b.sequence || 0;
      return seqA - seqB;
    });
  });
  
  const sortedTypes = Object.keys(groupedProjects).sort();

  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description="A list of projects I have built"
      />
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
        </div>
        <div className="container py-12">
          <div className="m-4 flex flex-wrap">
            {!projectsDatas.length && <h2 className="text-lg">No Projects found.</h2>}
            {sortedTypes.map((type) => (
              <ProjectType projects={groupedProjects[type]} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const response = await defaultHttp.get(processDataRoutes.project, { timeout: 10000 });
    const projectsDatas = response.data.response;

    return {
      props: {
        projectsDatas,
        timeoutError: false,
      },
    };
  } catch (error) {
    const isTimeout = error.code === 'ECONNABORTED';

    return {
      props: {
        projectsDatas: [],
        timeoutError: isTimeout,
      },
      revalidate: 60,
    };
  }
}

export default Projects;
