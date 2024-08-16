import DashboardSingleUserPage from "./user";

// export async function generateStaticParams() {
//   const posts = await fetch("http://.../products").then((res) => res.json());

//   return posts.map((post: { slug: any }) => ({
//     slug: post.slug,
//   }));
// }

interface DashboardUserDetailsProps {
  params: { id: number };
}

const AdminUsers = ({ params: { id } }: DashboardUserDetailsProps) => {
  return (
    <DashboardSingleUserPage
      params={{
        id: id,
      }}
    />
  );
};

export default AdminUsers;
