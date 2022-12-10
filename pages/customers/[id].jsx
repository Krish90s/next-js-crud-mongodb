import { useRouter } from "next/router";

const Customer = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Customer id is {id}</h1>
    </>
  );
};

export default Customer;
