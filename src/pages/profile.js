import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Head from "next/head";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data } = useSession()

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>User Profile</h1>
      <Avatar size={64} src={data?.user?.image} icon={<UserOutlined />} />
      <h3>{data?.user?.name}</h3>
    </div>
  );
};

export default ProfilePage;
