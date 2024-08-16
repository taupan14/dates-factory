import DashboardProductDetails from "./product";

// export async function generateStaticParams() {
//   const posts = await fetch("http://localhost:3000/admin/products").then((res) => res.json());

//   return posts.map((post: { slug: any }) => ({
//     slug: post.slug,
//   }));
// }

interface DashboardProductDetailsProps {
  params: { id: number };
}

const AdminProducts = ({ params: { id } }: DashboardProductDetailsProps) => {
  return (
    <DashboardProductDetails
      params={{
        id: id,
      }}
    />
  );
};

export default AdminProducts;
