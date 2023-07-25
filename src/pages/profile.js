import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "@/firebase/firebase";

const ProfilePage = () => {
  const { data } = useSession()
  const [user] = useAuthState(auth)

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>User Profile</h1>
      <Avatar size={64} src={data?.user?.image} icon={<UserOutlined />} />
      <h3>{data?.user?.name || user?.displayName}</h3>
    </div>
  );
};

export default ProfilePage;
