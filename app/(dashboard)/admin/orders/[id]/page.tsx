import OrderDetail from "./order";

// export async function generateStaticParams() {
//   const posts = await fetch("http://localhost:3000/admin/orders").then((res) => res.json());

//   return posts.map((post: { slug: any }) => ({
//     slug: post.slug,
//   }));
// }

const AdminSingleOrder = (orderId: string) => {
  return <OrderDetail id={orderId} />;
};

export default AdminSingleOrder;
