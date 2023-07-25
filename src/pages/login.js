import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import auth from "@/firebase/firebase";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form"
import styles from "@/styles/Login.module.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const LoginPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const [
    createUserWithEmailAndPassword
  ] = useCreateUserWithEmailAndPassword(auth);

  const onHandleSubmit = (data) => {
    const { email, password } = data
    createUserWithEmailAndPassword(email, password)
    reset()
  }
  

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/" })} />
          <GithubOutlined onClick={() => signIn("github", { callbackUrl: "http://localhost:3000/" })} />
        </div>
        <hr />
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div>
            <label htmlFor="">Your Email</label>
            <input type="email"  {...register("email", { required: true })} />
          </div>
          {errors.email && <span style={{ color: "red", fontSize: "12px" }}>This field is required</span>}
          <div>
            <label htmlFor="">Your Password</label>
            <input type="password"  {...register("password", { required: true })} />
            {errors.password && <span style={{ color: "red", fontSize: "12px" }}>This field is required</span>}
          </div>
          <div><button type="submit">Login</button></div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
