import { useSession } from "next-auth/react";
import Head from "next/head";

const HomePage = () => {
  const { data } = useSession()

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>Welcome To Next Auth Home Page</h1>
      {data?.user && <h3 style={{ textAlign: "center", marginTop: "1%" }}>LoggedIn user: {data.user.email}</h3>}
    </div>
  );
};

export default HomePage;
