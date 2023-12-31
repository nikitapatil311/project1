import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/legacy/image";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <div className="p-4 border border-gray-300 rounded-md shadow-md max-w-md mx-auto mt-8">
          <Image
            src={session.user.image}
            alt=""
            height={100}
            width={100}
            className="rounded-full"
          />
          <p className="text-xl font-semibold mb-2 text-orange">
            Welcome, {session.user.name}
          </p>

          <div className="mt-4 text-orange">
            You are signed in as {session.user.email}
          </div>
          <br />
          <button
            className="mt-4 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white font-semibold px-4 py-2 rounded transition-all"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="p-4 border border-gray-300 rounded-md shadow-md max-w-md mx-auto mt-8">
        <p className="text-xl font-semibold mb-2">
          Sign in to add items and continue shopping 🛒
        </p>

        <button
          className="mt-4 bg-orange-500 hover:bg-FF9F45-600 text-white font-semibold px-4 py-2 rounded"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>

      <div className="flex justify-center items-center mt-5 mb-5 rounded-md">
        <Image
          src="https://img.freepik.com/free-vector/shopping-bag-basket-composition-with-isolated-image-products-supermarket-trolley-cart_1284-54441.jpg?w=1380&t=st=1691497115~exp=1691497715~hmac=bdfe30d0080476256c88ac0830489e6c40365b406a21b8c550ee31279a9a6218"
          alt="profile icon"
          height={400}
          width={400}
          className="rounded-md"
        />
      </div>
    </>
  );
};

export default Login;
