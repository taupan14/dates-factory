import DashboardSingleCategory from "./detail";

// export async function generateStaticParams() {
//   const posts = await fetch("http://localhost:3000/admin/categories").then((res) => res.json());

//   return posts.map((post: { slug: any }) => ({
//     slug: post.slug,
//   }));
// }

interface DashboardSingleCategoryProps {
  params: { id: number };
}

const AdminCategories = ({ params: { id } }: DashboardSingleCategoryProps) => {
  return (
    <DashboardSingleCategory
      params={{
        id: id,
      }}
    />
  );
};

export default AdminCategories;
